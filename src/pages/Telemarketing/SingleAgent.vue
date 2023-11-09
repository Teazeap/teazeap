<template>
  <div>
    <AgentsHeader
      title="telemarketingPage.singleAgent.header-title"
      sub-title="telemarketingPage.singleAgent.header-subtitle"
      planSelector="/telemarketing/single-agent#filterinng-avatar"
    />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">
          {{ $t("telemarketingPage.singleAgent.introTitle") }}
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/intro-pic.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              {{ $t("telemarketingPage.singleAgent.introText") }}
            </p>
          </v-col>
        </div>
      </div>
    </div>

    <PriceBadge :plan="filteringAvatarPlan" @get-plan="showModal = true" />

    <!-- steps section -->
    <div class="row what-to-expect" :style="commonMarginClass">
      <v-col cols="12" sm="12" lg="6" class="section pt-0">
        <div class="container section-card contact-steps">
          <h2 class="title text-center">
            {{ $t("telemarketingPage.singleAgent.justFollowTheseSteps") }}
          </h2>
          <ol>
            <li>{{ $t("telemarketingPage.singleAgent.step1") }}</li>
            <li>{{ $t("telemarketingPage.singleAgent.step2") }}</li>
            <li>{{ $t("telemarketingPage.singleAgent.step3") }}</li>
            <li>{{ $t("telemarketingPage.singleAgent.step4") }}</li>
            <li>{{ $t("telemarketingPage.singleAgent.step5") }}</li>
            <li>
              <span class="step-empasize">{{
                $t("telemarketingPage.singleAgent.step6")
              }}</span>
            </li>
          </ol>
        </div>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="section pt-0">
        <div class="container section-card benefits">
          <h2 class="title text-center what-to-expect-title">
            {{ $t("telemarketingPage.singleAgent.benefits") }}
          </h2>
          <p>{{ $t("telemarketingPage.singleAgent.benefit1") }}</p>
          <p>{{ $t("telemarketingPage.singleAgent.benefit2") }}</p>
          <p>{{ $t("telemarketingPage.singleAgent.benefit3") }}</p>
          <p>{{ $t("telemarketingPage.singleAgent.benefit4") }}</p>
        </div>
      </v-col>
    </div>

    <PricingTable :plans="plans" @get-plan="showModal = true" />

    <!-- propgram steps-->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          {{$t("telemarketingPage.singleAgent.processes.title")}}
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
import AgentsHeader from "@/pages/Telemarketing/AgentsHeader.vue";
import PricingTable from "@/pages/Telemarketing/PricingTable.vue";
import sizeMixin from "@/plugins/sizeMixin.js";
import PriceBadge from "./PriceBadge.vue";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";

export default {
  name: "single-agent",
  bodyClass: "landing-page",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    AgentsHeader,
    PricingTable,
    Collapsible,
    ContactDialog,
    PriceBadge,
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
          title: "telemarketingPage.singleAgent.processes.1.title",
          content: "telemarketingPage.singleAgent.processes.1.content",
        },
        {
          id: 2,
          title: "telemarketingPage.singleAgent.processes.2.title",
          content: "telemarketingPage.singleAgent.processes.2.content",
        },
        {
          id: 3,
          title: "telemarketingPage.singleAgent.processes.3.title",
          content: "telemarketingPage.singleAgent.processes.3.content",
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
        // {
        //   isPopular: false,
        //   planName: "CALL CENTER",
        //   planCost: 11.5,
        //   planDetails: [
        //     "<strong> 4/more</strong> Agents and <strong>1</strong> Manager",
        //     "Multichannel",
        //     "Call Recording",
        //     "Quality Assurance",
        //     "Analytics",
        //   ],
        //   className: "pro",
        // },
        {
          isPopular: false,
          planName: "Filtering Agents",
          planCost: 11.5,
          planDetails: [
            "<strong>3</strong> Agents and <strong>1</strong> Manager",
            "Lead Management",
            "Reporting",
            "No Dialer Provided",
            "",
          ],
          className: "basic",
        },
        {
          isPopular: false,
          planName: "Filtering Specialists",
          planCost: 12.5,
          planDetails: [
            "<strong>5/more</strong> Agents and <strong>1</strong> Manager",
            "Scripting",
            "CRM Integration",
            "Dialer Provided",
            "Performance Metrics",
          ],
          className: "echo",
        },
        {
          isPopular: true,
          planName: "Bundle",
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
        name: "telemarketingPage.singleAgent.avatarPlan.filteringAvatarPlan.name",
    points: [
      "telemarketingPage.singleAgent.avatarPlan.filteringAvatarPlan.points.0",
      "telemarketingPage.singleAgent.avatarPlan.filteringAvatarPlan.points.1",
      "telemarketingPage.singleAgent.avatarPlan.filteringAvatarPlan.points.2"
    ],
        price: "11.5",
        id: "filterinng-avatar",
      },
      openDialog: false,
      agentWorking: {
        picUrl: "img/audio/debt-collection.webp",
        name: "Debt Settlement",
        message:
          "Listen to our telemarketing agent and a client in a live call discussing effective debt collection strategies.",
        audioFileUrl:
          "https://assets.ctfassets.net/dr15y1pi2yc9/5C8AG4kZi3Yxpssc6e9xG/839cd5efa2ca3b918b9a6739463fc20d/Debt_Settlement_1.mp3",
      },
      officeInterior: {
        picUrl: "img/audio/debt-collection.webp",
        name: "Our Office Interior",
        message:
          "Experience the vibrant Teazeap office through our captivating video tour. Explore modern workstations, collaborative meeting rooms, and witness our passionate team delivering exceptional call center services.",
        videoFileUrl:
          "https://videos.ctfassets.net/dr15y1pi2yc9/3E8PcrJv2nqqGKiLgGRbUs/98402b0c07e8d641a12f4f0b4c308dca/1261371676653676733.mp4",
      },
    };
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
