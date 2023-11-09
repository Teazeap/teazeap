<template>
  <div>
    <Header />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">
          {{ $t("telemarketingPage.introTitle") }}
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/intro-pic.png" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              {{ $t("telemarketingPage.introText") }}
              <br/>
              <br/>
              {{ $t("telemarketingPage.introText1") }}
            </p>
          </v-col>
        </div>
      </div>
    </div>
    <!-- audio and office interio office-->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          {{ $t("telemarketingPage.discoverTitle") }}
        </h2>
        <p class="video-section-introduction">
          {{ $t("telemarketingPage.discoverText") }}
        </p>
        <flickity :options="flickityContentOptions" class="carousel team">
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
          Make More Money: Outsource Your Telemarketing Campaign
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/multiple-agent.png" alt="banner" class="img-fluid" />
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
          {{ $t("telemarketingPage.plan.subtitle") }}
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
            <Collapsible :processes="leadProcesses" />
          </v-col>
        </div>
      </div>
    </div>
    <!-- testimonials section -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          {{ $t("telemarketingPage.testimonials.title") }}
        </h2>
        <flickity
          ref="communityBadgeInfoModalSwiper"
          :options="flickityOptions"
          class="carousel"
        >
          <TesimonialsCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :testimonial="testimonial"
          />
        </flickity>
      </div>
    </div>
    <Contact />
    <router-view />
  </div>
</template>
<script>
import { Button, FormGroupInput, Collapsible } from "@/components";
import Contact from "@/pages/Telemarketing/Contact";
import Header from "@/pages/Telemarketing/Header.vue";
import Flickity from "vue-flickity";
import TesimonialsCard from "@/pages/Telemarketing/TesimonialsCard";
import PlanCard from "@/pages/Telemarketing/PlanCard";
import sizeMixin from "@/plugins/sizeMixin.js";
import contentPlayerMixin from "@/mixins/contentPlayerMixin.js";
import ContentPlayer from "@/pages/Telemarketing/ContentPlayer";

export default {
  name: "telemarketing",
  bodyClass: "landing-page",
  mixins: [sizeMixin, contentPlayerMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    TesimonialsCard,
    Header,
    Collapsible,
    Flickity,
    PlanCard,
    ContentPlayer,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
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
      processes: [
        {
          id: 1,
          title: "OUTSOURCE YOUR COLD CALLING",
          content:
            "Unlock the power of outsourcing your telemarketing to drive unparalleled growth. Experience seamless hiring and cold calling with our live lead transfer program. Tailored for businesses needing one to a few live agents, our single agent telemarketing program delivers exceptional results.",
        },
        {
          id: 2,
          title: "EFFECTIVE TELEMARKETING WITH MULTIPLE AGENTS.",
          content:
            "At Teazeap, we redefine excellence in outsourcing by prioritizing quality over chance. Our rigorous selection process ensures that only the best-trained telemarketing agents, with experience and motivation, join our American-run call centers.<br/> <br/>Our telemarketers are college graduates with <span style='font-weight: bold'>telesales experience</span>,<span style='font-weight: bold'>self-managers</span>, <span style='font-weight: bold'>skilled in appointments</span>,<span style='font-weight: bold'>scripts</span>,<span style='font-weight: bold'>sales reporting</span>",
        },
        {
          id: 3,
          title: "SKIP THE HEADACHE & STOP WASTING TIME",
          content:
            "We outsource only the best single agent telemarketers by providing all the following hiring requirements: <ul style='margin-left: 2rem'> <li>Background criminal checks </li><li>Office space </li><li>Speech training</li><li>Management</li><li>English comprehension testing</li></ul>",
        },
      ],
      leadProcesses: [
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
      agents: [
        {
          src: "img/agents/agent_1.jpg",
        },
        {
          src: "img/agents/agent_2.jpg",
        },
        {
          src: "img/agents/agent_4.jpg",
        },
        {
          src: "img/agents/agent_5.jpg",
        },
        {
          src: "img/agents/agent_3.jpg",
        },
        {
          src: "img/agents/agent_6.jpg",
        },
      ],
      audioFlickityOptions: {
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
          name: "telemarketingPage.testimonials.0.name",
          message: "telemarketingPage.testimonials.0.message",
        },
        {
          picUrl: "img/agent-2.jpg",
          name: "telemarketingPage.testimonials.1.name",
          message: "telemarketingPage.testimonials.1.message",
        },
        {
          picUrl: "img/agent-3.jpg",
          name: "telemarketingPage.testimonials.2.name",
          message: "telemarketingPage.testimonials.2.message",
        },
      ],
      agentsWorking: [
        {
          picUrl: "img/audio/debt-collection.webp",
          name: "Debt Settlement",
          message:
            "Listen to our telemarketing agent and a client in a live call discussing effective debt collection strategies.",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/5C8AG4kZi3Yxpssc6e9xG/839cd5efa2ca3b918b9a6739463fc20d/Debt_Settlement_1.mp3",
        },
        {
          picUrl: "img/audio/tax-relief.webp",
          name: "Tax Relief",
          message:
            "Experience a seamless conversation between our telemarketing agent and a client, discussing important tax matters.",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/3oRu2T6tSBwMT41b8tGCxp/7e51f0af942b4f29bd5bf917cd587dc1/Tax_Relief_Live_Agent_Sample_3.wav",
        },
        {
          picUrl: "img/audio/debt-collection-1.webp",
          name: "Debt Settlement",
          message:
            "Eavesdrop on a call: Telemarketing agent and client discuss detailed debt collection solutions in real-time.",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/2KtBbHpuM3bFP8WUliw0Xg/30958de06b157ed2022e8030e71cc19b/Debt_Settlement_2.mp3",
        },
      ],
      officeInteriorVideos: [
        {
          id: 1,
          src: "https://videos.ctfassets.net/dr15y1pi2yc9/25vPZEL5MMaqlwMRUBglRJ/d2063e39d2d5ef4b29febeec96c73bf7/2203638109384894994.mp4",
        },
        {
          id: 2,
          src: "https://videos.ctfassets.net/dr15y1pi2yc9/3E8PcrJv2nqqGKiLgGRbUs/98402b0c07e8d641a12f4f0b4c308dca/1261371676653676733.mp4",
        },
      ],
      teazeapContent: [
        {
          picUrl: "img/audio/tax-relief.webp",
          name: "telemarketingPage.teazeapContent.0.name",
          message: "telemarketingPage.teazeapContent.0.message",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/3oRu2T6tSBwMT41b8tGCxp/7e51f0af942b4f29bd5bf917cd587dc1/Tax_Relief_Live_Agent_Sample_3.wav",
          isAudio: true,
        },
        {
          name: "telemarketingPage.teazeapContent.1.name",
          message: "telemarketingPage.teazeapContent.1.message",

          videoFileUrl:
            "https://videos.ctfassets.net/dr15y1pi2yc9/3p9fUqGM6nLVbKWMBSsqt9/634faaa8c15656d5b6ccd0b0d7c8ac1c/videoplayback-2.mp4",
          poster: "img/thumbnails/thumb-1.jpeg",
          isAudio: false,
        },
        {
          picUrl: "img/audio/debt-collection.webp",
          name: "telemarketingPage.teazeapContent.2.name",
          message: "telemarketingPage.teazeapContent.2.message",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/5C8AG4kZi3Yxpssc6e9xG/839cd5efa2ca3b918b9a6739463fc20d/Debt_Settlement_1.mp3",
          isAudio: true,
        },
        {
          name: "telemarketingPage.teazeapContent.3.name",
          message: "telemarketingPage.teazeapContent.3.message",
          videoFileUrl:
            "https://videos.ctfassets.net/dr15y1pi2yc9/50NSjIaNZBpPeFS9TsXg1K/f737802d942a17c902535bec42ec3cb0/telemarketing-video-1.mp4",
          poster: "img/thumbnails/thumb-2.jpeg",
          isAudio: false,
        },
        {
          name: "telemarketingPage.teazeapContent.4.name",
          message: "telemarketingPage.teazeapContent.4.message",
          videoFileUrl:
            "https://videos.ctfassets.net/dr15y1pi2yc9/77uBczZTTHGFOYJNjgL6qD/1a4577bff54f4a117ee37a4c7aee7b92/videoplayback-1.mp4",
          poster: "img/thumbnails/thumb-3.jpeg",
          isAudio: false,
        },
        {
          picUrl: "img/audio/debt-collection-1.webp",
          name: "telemarketingPage.teazeapContent.5.name",
          message: "telemarketingPage.teazeapContent.5.message",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/2KtBbHpuM3bFP8WUliw0Xg/30958de06b157ed2022e8030e71cc19b/Debt_Settlement_2.mp3",
          isAudio: true,
        },
        {
          name: "telemarketingPage.teazeapContent.6.name",
          message: "telemarketingPage.teazeapContent.6.message",
          videoFileUrl:
            "https://videos.ctfassets.net/dr15y1pi2yc9/ZU7GoFasJoChGSrkGATVB/f80908ac9abf7f54aa26afcb3b05f269/telemarketing-video-2.mp4",
          poster: "img/thumbnails/thumb-4.jpeg",
          isAudio: false,
        },

        {
          name: "telemarketingPage.teazeapContent.7.name",
          message: "telemarketingPage.teazeapContent.7.message",
          videoFileUrl:
            "https://videos.ctfassets.net/dr15y1pi2yc9/25vPZEL5MMaqlwMRUBglRJ/d2063e39d2d5ef4b29febeec96c73bf7/2203638109384894994.mp4",
          poster: "img/thumbnails/thumb-5.jpeg",
          isAudio: false,
        },
        {
          picUrl: "img/agents/agent_3.jpg",
          name: "telemarketingPage.teazeapContent.8.name",
          message: "telemarketingPage.teazeapContent.8.message",
          isAudio: true,
        },
        {
          name: "telemarketingPage.teazeapContent.9.name",
          message: "telemarketingPage.teazeapContent.9.message",
          videoFileUrl:
            "https://videos.ctfassets.net/dr15y1pi2yc9/NVi7i40iXbsu30guZRUak/ce71561a78a2a18bb474181d98437cdc/videoplayback-3.mp4",
          poster: "img/thumbnails/thumb-6.jpeg",
          isAudio: false,
        },
        {
          picUrl: "img/audio/debt-collection-1.webp",
          name: "telemarketingPage.teazeapContent.10.name",
          message: "telemarketingPage.teazeapContent.10.message",
          audioFileUrl:
            "https://assets.ctfassets.net/dr15y1pi2yc9/2KtBbHpuM3bFP8WUliw0Xg/30958de06b157ed2022e8030e71cc19b/Debt_Settlement_2.mp3",
          isAudio: true,
        },
      ],
      planData: [
        {
          plan: {
            title: "telemarketingPage.plan.0.title",
            subtitle: "telemarketingPage.plan.0.subtitle",
            keyPoints: [
              "telemarketingPage.plan.0.keyPoints.0",
              "telemarketingPage.plan.0.keyPoints.1",
              "telemarketingPage.plan.0.keyPoints.2",
              "telemarketingPage.plan.0.keyPoints.3",
              "telemarketingPage.plan.0.keyPoints.4",
            ],
            actionButton: {
              text: "telemarketingPage.plan.0.actionButton.text",
              url: "telemarketingPage.plan.0.actionButton.url",
            },
          },
          cardStyles: {
            backgroundColor: "rgb(96, 125, 249)",
            actionButtonColor: "rgb(96, 125, 249)",
            actionButtonBackground: "white",
          },
          to: "/telemarketing/single-agent",
        },
        {
          plan: {
            title: "telemarketingPage.plan.1.title",
            subtitle: "telemarketingPage.plan.1.subtitle",
            keyPoints: [
              "telemarketingPage.plan.1.keyPoints.0",
              "telemarketingPage.plan.1.keyPoints.1",
              "telemarketingPage.plan.1.keyPoints.2",
              "telemarketingPage.plan.1.keyPoints.3",
              "telemarketingPage.plan.1.keyPoints.4",
            ],
            actionButton: {
              text: "telemarketingPage.plan.1.actionButton.text",
              url: "telemarketingPage.plan.1.actionButton.url",
            },
          },
          cardStyles: {
            backgroundColor: "#f96332",
            textColor: "white",
            actionButtonColor: "#f96332",
            actionButtonBackground: "white",
          },
          to: "/telemarketing/multiple-agent",
        },
        {
          plan: {
            title: "telemarketingPage.plan.2.title",
            subtitle: "telemarketingPage.plan.2.subtitle",
            keyPoints: [
              "telemarketingPage.plan.2.keyPoints.0",
            ],
            actionButton: {
              text: "telemarketingPage.plan.2.actionButton.text",
              url: "telemarketingPage.plan.2.actionButton.url",
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
    };
  },
  mounted() {
    this.handleContentPipelie();
  },
  computed: {
    swiper() {
      return this.$refs.communityBadgeInfoModalSwiper;
    },
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
  box-shadow: 0px 5px 12px 0px rgb(0 0 0 / 20%);
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
  height: 220px;
}

.agents-carousel {
  margin: 84px 0 0;
  padding: 0;
  width: 100%;
  height: 250px;
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
</style>
