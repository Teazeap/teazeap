<template>
  <div>
    <AgentsHeader
      title="Customer Service"
      sub-title="Elevate your customer success, support, and communication through our exceptional customer service solutions."
      program-pic-url="/img/call-center-agent.png"
      planSelector="/call-center/#bundle"
    />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">
          Revolutionize Your Business with Teazeap’s Virtual and Live Customer Agent
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/intro-pic.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              When it’s time to scale your business and seek a solution that guarantees concrete results, look no further than Tezeap. Our extensively trained and articulate call center agents have a proven track record of delivering exceptional results. With rates starting at just
              <span style='font-weight: bold'>$12 per hour per agent</span>, our services are not only effective but also cost- efficient for your business. Contact us today to unlock the potential of a high-performing call center that not only enhances customer success but also significantly impacts your bottom line.
            </p>
          </v-col>
        </div>
      </div>
    </div>

        <!-- audio and office interio office-->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          Agents At Work
        </h2>
        <flickity
          :options="flickityContentOptions"
          class="carousel team"
        >
          <ContentPlayer
            v-for="(content, index) in teazeapContent"
            :key="index"
            :content="content"
          />
        </flickity>
      </div>
    </div>

    <!-- telemarketing steps -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          Our Strategic Approach to Providing Remarkable Customer Services
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/process.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible :processes="processes" />
          </v-col>
        </div>
      </div>
    </div>

        <!-- plans section -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title">{{ $t("telemarketingPage.plan.title") }}</h2>
        <h5 class="description">
          Our customer service is tailored to meet your unique needs. First step is to decide which support you’re in search of:
        </h5>
        <div class="row mt-n4 mb-4" style="justify-content: center">
          <v-col
            cols="12"
            sm="7"
            lg="4"
            v-for="(plan, index) in planData"
            :key="index"
          >
            <PlanCard
              :card-styles="plan.cardStyles"
              :plan="plan.plan"
              :to="plan.to"
            />
          </v-col>
        </div>
      </div>
    </div>

        <!-- steps section -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          Save Money While Elevating Your Brand With Effective & Efficient Customer Service
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/single-agent.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible :processes="liveProcesses" />
          </v-col>
        </div>
      </div>
    </div>


    <ContactDialog v-if="showModal" @close="showModal = false" />
    <Contact />
  </div>
</template>
<script>
import { Button, FormGroupInput, Collapsible } from "@/components";
import Contact from "@/pages/Telemarketing/Contact";
import AgentsHeader from "@/pages/CallCenter/AgentsHeader.vue";
import Flickity from "vue-flickity";
// import PricingTable from "@/pages/Telemarketing/PricingTable.vue";
import sizeMixin from "@/plugins/sizeMixin.js";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";
import ContentPlayer from "@/pages/Telemarketing/ContentPlayer";
import contentPlayerMixin from "@/mixins/contentPlayerMixin.js";
import PlanCard from "@/pages/Telemarketing/PlanCard";

export default {
  name: "single-agent",
  bodyClass: "landing-page",
  mixins: [sizeMixin, contentPlayerMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    AgentsHeader,
    PlanCard,
    Flickity,
    Collapsible,
    ContactDialog,
    ContentPlayer,
  },
  data() {
    return {
      showModal: false,
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      planData: [
        {
          plan: {
            title: "Customer Service Reps ",
            subtitle: "These team members will:",
            keyPoints: [
              "Answer inquiries",
              "Issue resolution",
              "Provide support",
              "Handle Escalations"
            ],
            actionButton: {
              text: "View Starter Plan",
              url: "/plans#customer-service",
            },
          },
          cardStyles: {
            backgroundColor: "rgb(96, 125, 249)",
            textColor: "white",
            actionButtonColor: "rgb(96, 125, 249)",
            actionButtonBackground: "white",
          },
          to: "/plans#customer-service",
        },
        {
          plan: {
            title: "Customer Service Specialists",
            subtitle: "For additional support our specialists will: ",
            keyPoints: [
              "Handle complaints & escalate concerns",
              "Maintain records",
              "Provide information",
              "Follow up after questions & concerns are resolved",
            ],
            actionButton: {
              text: "View Standard Plan",
              url: "/plans#customer-service",
            },
          },
          cardStyles: {
            backgroundColor: "#f96332",
            textColor: "white",
            actionButtonColor: "#f96332",
            actionButtonBackground: "white",
          },
          to: "/plans#customer-service",
        },
        {
          plan: {
            title: "Bundle",
            subtitle: "Looking for a combination of telemarketing & customer service?",
            keyPoints: [
              "No worries, we offer a customizable plan!",
            ],
            actionButton: {
              text: "View Bundle Deal",
              url: "/telemarketing/bundle",
            },
          },
          cardStyles: {
            backgroundColor: "rgb(16, 77, 51)",
            textColor: "white",
            actionButtonColor: "rgb(16, 77, 51)",
            actionButtonBackground: "white",
          },
          to: "/telemarketing/bundle",
        },
      ],
      processes: [
        {
          id: 1,
          title: "Faster Issue Resolution",
          content:
            "Efficient CS agents can resolve customer issues more quickly and accurately. This reduces the need for follow-up inquiries and repeated contacts, which can strain CS resources and increase operational costs.",
        },
        {
          id: 2,
          title: "Productivity & Quality",
          content:
            "Efficiently manage their workload while consistently delivering a high level of service, which includes effective communication, problem-solving, empathy, and professionalism. Balancing productivity and quality is essential for providing exceptional customer service and building positive customer relationships.",
        },
        {
          id: 3,
          title: "Higher Retention rates",
          content:
            "Great CS agents have a positive impact on the company's operations, customer relationships, and financial performance. It signifies a more stable, satisfied, and experienced CS team, which is better equipped to provide exceptional service and support to customers.",
        },
      ],
      liveProcesses: [
        {
          id: 1,
          title: "Increase Brand Loyalty",
          content:
            "Exceptional customer service fosters brand loyalty leading to higher customer engagement and drives long-term profitability. By nurturing a loyal customer base.",
        },
        {
          id: 2,
          title: "Crisis Management",
          content:
            "Teazeap’s CS agent  plays a crucial role in managing crises and handling customer complaints during adverse situations, such as product recalls or service",
        },
        {
          id: 3,
          title: "Establishing & Building Trust",
          content:
            "Our effective CS team builds trust and credibility with customers. When customers trust a company, they are more likely to engage in long-term relationships.",
        },
        {
          id: 4,
          title: "Customer Satisfaction",
          content:
            "We will  incorporate timely responses, clear communication, problem resolutions, pro-active listening, and follow up in your organization. These practices will enhance customer satisfaction, build loyalty, and create positive long-term relationships with your customers.",
        },
      ],
      team: [
        {
          name: "Clifton Moreau",
          quote: "landing-page.chief-quote",
          pictureUrl: "img/ceo.jpg",
          title: "landing-page.chief",
          position: "top",
        },
        {
          name: "Calerb Louis Jean",
          quote: "landing-page.project-quote",
          pictureUrl: "img/jake_2.jpg",
          title: "landing-page.project",
          position: "top",
        },
        {
          name: "Nnenia Stephens",
          quote: "landing-page.comm-quote",
          pictureUrl: "img/nnenia_1.jpg",
          title: "landing-page.comm",
          position: "top",
        },
      ],
      videos: [
        {
          id: 1,
          src: "https://videos.ctfassets.net/dr15y1pi2yc9/77uBczZTTHGFOYJNjgL6qD/1a4577bff54f4a117ee37a4c7aee7b92/videoplayback-1.mp4",
        },
        {
          id: 2,
          src: "https://videos.ctfassets.net/dr15y1pi2yc9/3p9fUqGM6nLVbKWMBSsqt9/634faaa8c15656d5b6ccd0b0d7c8ac1c/videoplayback-2.mp4",
        },
        {
          id: 3,
          src: "https://videos.ctfassets.net/dr15y1pi2yc9/NVi7i40iXbsu30guZRUak/ce71561a78a2a18bb474181d98437cdc/videoplayback-3.mp4",
        },
      ],
      callCenterPlans: [
        {
          name: "Single Agent",
          id: "single-agent",
          plan: {
            name: "SINGLE AGENT",
            price: "11.5",
            points: [
              "4/more Agents and 1 Manager",
              "Robust Technology Integration",
              "Skilled and Trained Agents",
              "Scalability and Flexibility",
            ],
          },
        },
        {
          name: "Multiple Agent",
          id: "multiple-agent",
          plan: {
            name: "MULTIPLE AGENT",
            price: "12.5",
            points: [
              "5/more Agents and 1 Manager",
              "Robust Technology Integration",
              "Skilled and Trained Agents",
              "Scalability and Flexibility",
            ],
          },
        },
        {
          name: "Bundle",
          id: "bundle",
          plan: {
            name: "Bundle",
            price: "13",
            points: [
              "Single Agent deal",
              "Multiple Agent deal",
              "Robust Technology Integration",
              "Skilled and Trained Agents",
              "Scalability and Flexibility",
            ],
          },
        },
      ],
      flickityOptions: {
        adaptiveHeight: false,
        cellAlign: "left",
        contain: true,
        draggable: true,
        freeScroll: true,
        groupCells: true,
        pageDots: false,
        percentPosition: true,
        autoPlay: 3000,
        wrapAround: true,
        pauseAutoPlayOnHover: false,
        resize: true,
      },
      flickityContentOptions: {
        adaptiveHeight: false,
        cellAlign: "left",
        contain: true,
        draggable: true,
        freeScroll: true,
        groupCells: true,
        pageDots: false,
        percentPosition: true,
        autoPlay: false,
        wrapAround: true,
        pauseAutoPlayOnHover: false,
        resize: true,
      },
      testimonials: [
        {
          picUrl: "img/agent-1.jpg",
          name: "Debt Settlement",
          message: `"How many other outbound call centers did we try?At least 12 in India and the Philippines. They all failed because of the accents. Avatar & Echo telemarketing outsourcing works, the agents don't have accents and prospects listen to what they say."`,
        },
        {
          picUrl: "img/agent-2.jpg",
          name: "Mortgage",
          message: `"American-run, they get lead generation. Avatar & Echo delivers the lowest cost, qualified leads. Its as east to get as siding up for their service. Listen to what they say – they know the business."`,
        },
        {
          picUrl: "img/agent-3.jpg",
          name: "Insurance",
          message: `With the RXR we manager our team and it feels like we are in the middle of the action.  The software is amazing are we run better then we did when we had the call center here. It's amazing that they turned the complex process of running a call center into a service!`,
        },
      ],
      plans: [
        {
          isPopular: false,
          planName: "CALL CENTER",
          planCost: 11.5,
          planDetails: [
            "<strong> 4/more</strong> Agents and <strong>1</strong> Manager",
            "Multichannel",
            "Call Recording",
            "Quality Assurance",
            "Analytics",
          ],
          className: "pro",
        },
        {
          isPopular: false,
          planName: "FILTERING AVATAR",
          planCost: 11.5,
          planDetails: [
            "<strong>3</strong> Agents and <strong>1</strong> Manager",
            "Lead Management",
            "Reporting",
            "",
            "",
          ],
          className: "basic",
        },
        {
          isPopular: false,
          planName: "FILTERING SPECIALS",
          planCost: 12.5,
          planDetails: [
            "<strong>5/more</strong> Agents and <strong>1</strong> Manager",
            "Scripting",
            "CRM Integration",
            "Dialer",
            "Performance Metrics",
          ],
          className: "echo",
        },
        {
          isPopular: true,
          planName: "BUNDLE",
          planCost: 13,
          planDetails: [
            "Everything in <strong>Filtering Avatar </strong> ",
            "Everything in <strong>Filtering Specials</strong>",
            "Team Collaboration Features",
            "Lead Database Management",
            "Performance Tracking Tools",
          ],
          className: "business",
        },
      ],
      filteringAvatarPlan: {
        name: "CALL CENTER",
        price: "9.5",
        points: [
          "4/more Agents and 1 Manager",
          "Robust Technology Integration",
          "Skilled and Trained Agents",
          "Scalability and Flexibility",
        ],
      },
      openDialog: false,
      teazeapContent: [
          {
          picUrl: "img/audio/george.webp",
          name: "Complaints & Disputes",
          message:
            "Experience George's professional, empathetic, and efficient customer service in action. Liste now!",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/1vZdNqAGVV46el28zv7anJ/d2e368ced7f3465c89927f39ac9fc956/george.mp3",
          isAudio: true,
        },
        {
          picUrl: "img/audio/daliah.webp",
          name: "Product Info & Support",
          message:
            "Exemplary professionalism displayed by Dalia throughout the call, ensuring client satisfaction.",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/3OmNUBNAbF5178MxGbCRJU/5d9ee3eabc75a55be9d2e171ce669a3d/daliah.m4a",
          isAudio: true,
        },
        {
        name: "Order Processing",
        message:
          "Experience the professionalism of Teazeap's agents with our video showcasing a customer call. Watch now to see how Bella assists with a seamless flower order process!",
        videoFileUrl:
          "https://videos.ctfassets.net/dr15y1pi2yc9/7H5eI8EPquLp3x2BZyyZjY/213486e9f209c13bedac51431e2e97d3/Sample_Order_Taking_Customer_Support_Philippines.mp4",
          poster: "img/thumbnails/thumb-7.jpeg",
          isAudio: false,
      },
        {
          picUrl: "img/audio/bella.webp",
          name: "Exceptional Service",
          message:
            "Bella  exemplifies professionalism, empathy, and efficient customer service.",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/58G8uW2ChhX0E8yww5wFEi/168a1debd96df331665a28ffeff94964/bella.mp3",
          isAudio: true,
        },
                {
        name: "Problem Solving",
        message:
          "Agent Rachel patiently assists frustrated customer with Bluetooth headset troubleshooting.",
        videoFileUrl:
          "https://videos.ctfassets.net/dr15y1pi2yc9/5qmKxDrWfHFWdqmNkfQn9M/9d4d4d0d25933a2fc97858df004338d9/mishandled_call.mp4",
          poster: "img/thumbnails/thumb-8.jpeg",
          isAudio: false,
      },
        {
          picUrl: "img/audio/roger.webp",
          name: "Product Delivery Issues",
          message:
            "Agent Roger handles delayed delivery with professionalism, updates, and alternative solutions.",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/7tUfQnRiIySE7cxuTwnHAJ/b48a31bdb9b719683f99cf72836abe1e/roger2.m4a",
          isAudio: true,
        },

      ],
      agentWorking: {
        picUrl: "img/audio/tax-relief.webp",
        name: "Tax Relief",
        message:
          "Experience a seamless conversation between our telemarketing agent and a client, discussing important tax matters.",
        audioFileUrl:
          "https://assets.ctfassets.net/dr15y1pi2yc9/3oRu2T6tSBwMT41b8tGCxp/7e51f0af942b4f29bd5bf917cd587dc1/Tax_Relief_Live_Agent_Sample_3.wav",
      },
      officeInterior: {
        picUrl: "img/audio/debt-collection.webp",
        name: "Our Office Interior",
        message:
          "Experience the vibrant Teazeap office through our captivating video tour. Explore modern workstations, collaborative meeting rooms, and witness our passionate team delivering exceptional call center services.",
        videoFileUrl:
          "https://videos.ctfassets.net/dr15y1pi2yc9/25vPZEL5MMaqlwMRUBglRJ/d2063e39d2d5ef4b29febeec96c73bf7/2203638109384894994.mp4",
      },
    };
  },
  mounted() {
    this.handleContentPipelie()
  },
  created() {
    this.handleLangauge();
  },
  methods: {
    handleLangauge() {
      const browserLanguage = navigator.language;
      const storedLanguage = localStorage.getItem("teapZeapLang");

      if (storedLanguage) {
        this.$i18n.locale = storedLanguage;
      } else {
        this.$i18n.locale = browserLanguage.includes("zh") ? "zh" : "en";
      }
    },
  },
};
</script>

<style scoped>
.video-frame {
  border-radius: 24px;
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
}

.video-frame :hover {
  transform: translateY(-2px);
  cursor: pointer;
}

.carousel {
  margin: 84px 0 0;
  padding: 0;
  width: 100%;
  height: 500px;
}

.carousel-cell {
  height: 450px;
  margin: 0 20px 0;
  padding: 0;
  width: 300px;
}

.video-carousel {
  margin: 84px 0 0;
  padding: 0;
  width: 100%;
  height: 400px;
}

.video-section-introduction {
  text-align: justify;
}

@media (min-width: 600px) {
  .video-section-introduction {
    text-align: center;
    margin: 0 5%;
  }
}

.videos-container {
  margin: 0 5%;
}

.mobile-padding {
  margin: 0 16px;
}

.intro {
  background: white;
}

.intro-container {
  margin: 0 16px;
}

@media (min-width: 600px) {
  .intro-container {
    margin-top: -10rem;
  }
}

.introduction-text {
  text-align: justify;
}

@media (min-width: 600px) {
  .introduction-text {
    margin-right: 16px;
  }
}

.what-to-expect {
  /* margin-top: 28px; */
}

.what-to-expect-title {
  color: #1ecd6e;
}
</style>
