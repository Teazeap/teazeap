<template>
  <div>
    <AgentsHeader
      title="Call Center"
      sub-title="Experience superior call center solutions that elevate customer satisfaction and boost productivity"
      program-pic-url="/img/call-center-agent.png"
      planSelector="/call-center/#bundle"
    />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">
          Revolutionize Your Business with Teazeap's Virtual Call Center.
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/intro-pic.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              When you're ready to break free from a flawed call ceter operation
              and experience a solution that delivers tangible results, reach
              out to us. Teazeap Call Center specializes in outsourcing single
              agent call center campaigns. These campaigns are hassle-free for
              you and yield real outcomes. Our extensively trained, clear-spoken
              call center agents boast a track record of success. Single agents
              start at $9.5 per hour, ensuring cost-effective support for your
              business. Contact us today and unlock the potential of a
              high-performing call center that drives customer satisfaction and
              boosts your bottom line.
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

    <!-- price section-->
    <div
      class="section pt-0 mobile-padding"
      v-for="(program, index) in callCenterPlans"
      :key="index"
      :style="commonMarginClass"
      :id="program.id"
    >
      <div class="container section-card">
        <h2 class="title text-center">{{ program.name }}</h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <PriceBadge :plan="program.plan" @get-plan="showModal = true" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible :processes="processes" />
          </v-col>
        </div>
      </div>
    </div>

    <!-- steps section -->
    <div class="row what-to-expect" :style="commonMarginClass">
      <v-col cols="12" sm="12" lg="6" class="section pt-0">
        <div class="container section-card contact-steps">
          <h2 class="title text-center">Just Follow These Steps</h2>
          <ol>
            <li>Discovery and Needs Assessment</li>
            <li>Solution Design and Proposal</li>
            <li>Agreement and Contract</li>
            <li>Set-Up and Configuration</li>
            <li>Training and Knowledge Transfer</li>
            <li>
              <span class="step-empasize">Go-live and Continuous Support</span>
            </li>
          </ol>
        </div>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="section pt-0">
        <div class="container section-card benefits">
          <h2 class="title text-center what-to-expect-title">The Benefits</h2>
          <p>Contact Teazeap when you’re ready for:</p>
          <ul lang="la">
            <li>Enhanced Customer Satisfaction</li>
            <li>Increased Sales and Conversions</li>
            <li>mproved Efficiency and Productivity</li>
            <li>Expanded Market Reach</li>
          </ul>
        </div>
      </v-col>
    </div>

    <!-- <PricingTable :plans="plans" @get-plan="showModal = true" /> -->

    <!-- propgram steps-->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          Make More Money with Live Lead Transfers
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/single-agent.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible :processes="processes" />
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
import PriceBadge from "@/pages/CallCenter/PriceBadge.vue";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";
import ContentPlayer from "@/pages/Telemarketing/ContentPlayer";
import contentPlayerMixin from "@/mixins/contentPlayerMixin.js";

export default {
  name: "single-agent",
  bodyClass: "landing-page",
  mixins: [sizeMixin, contentPlayerMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    AgentsHeader,
    Flickity,
    // PricingTable,
    Collapsible,
    ContactDialog,
    PriceBadge,
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
      processes: [
        {
          id: 1,
          title: "Enhance Customer Satisfaction",
          content:
            "With our call center services, we prioritize exceptional customer experiences by providing prompt and knowledgeable support, resolving issues efficiently, and ensuring personalized interactions that leave a lasting positive impression.",
        },
        {
          id: 2,
          title: "Increase Sales and Conversions",
          content:
            "Our skilled call center agents are trained in effective sales techniques, enabling them to engage customers, identify their needs, and effectively promote products or services. This leads to increased sales, higher conversion rates, and ultimately, improved revenue generation.",
        },
        {
          id: 3,
          title: "Improve Productivity",
          content:
            "By leveraging advanced call center technologies and streamlined processes, we optimize operational efficiency. Our automation tools, call routing systems, and performance tracking capabilities allow for efficient call handling, reduced wait times, and improved agent productivity.",
        },
        {
          id: 4,
          title: "Expand Market Presence",
          content:
            "Our call center services provide an opportunity to reach a broader customer base. Through outbound calling campaigns and lead generation strategies, we proactively engage potential customers, expanding your market presence and creating new business opportunities. This helps in increasing brand awareness and driving business growth.",
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
            price: "10.5",
            points: [
              "3/more Agents and 1 Manager",
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
            price: "11.5",
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
            price: "13.5",
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
            "<strong> 3/more</strong> Agents and <strong>1</strong> Manager",
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
          "3/more Agents and 1 Manager",
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
