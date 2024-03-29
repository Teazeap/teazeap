<template>
  <div>
    <Header />
    <div class="pt-0 intro-container" :style="commonMarginClass" id="about-us">
      <div class="container section-card intro">
        <h2 class="title text-center">{{ $t('intro.whoWeAre') }}</h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/landing/310731.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              {{ $t('intro.teazeapEstablished') }}
              <strong>{{ $t('intro.recruitment') }}</strong>,
              <strong>{{ $t('intro.telemarketing') }}</strong>,
              {{ $t('intro.and') }}
              <strong>{{ $t('intro.customer-service') }}</strong> {{ $t('intro.services') }},{{ $t('intro.recognizingDemand') }}
              <br /><br />
              {{ $t('intro.teazeapSetOut') }}
              <br /><br />{{ $t('intro.teazeapHasSuccessfully') }}
            </p>
          </v-col>
        </div>
      </div>
    </div>

    <!-- teazeap products -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass" id="explore-teazeap">
      <div class="container section-card">
        <h2 class="title text-center products-header">{{ $t('products.explore') }}</h2>
        <flickity :options="flickityOptions" class="teacher-type-carousel">
          <ProductCard
            v-for="(teazeapProduct, index) in teazeapProducts"
            :key="index"
            :teazeap-product="teazeapProduct"
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
import Header from "@/pages/Landing/Header.vue";
import Flickity from "vue-flickity";
import sizeMixin from "@/plugins/sizeMixin.js";
import ProductCard from "@/pages/Landing/ProductCard.vue";

export default {
  name: "landing",
  bodyClass: "landing-page",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    ProductCard,
    Header,
    Flickity,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      team: [
        {
          name: "Clifton Moreau",
          quote: "landing-page.chief-quote",
          pictureUrl: "img/ceo_1.jpeg",
          title: "landing-page.chief",
          position: "top",
          linkendLink: "https://www.linkedin.com/in/johnscmoreau/"
        },
        {
          name: "Calerb Louis Jean",
          quote: "landing-page.project-quote",
          pictureUrl: "img/jake_3.jpeg",
          title: "landing-page.project",
          position: "top",
          linkendLink: "https://www.linkedin.com/in/calerb-louis-jean-3b6a41135/"
        },
        {
          name: "Nnenia Stephens",
          quote: "landing-page.comm-quote",
          pictureUrl: "img/nnenia_2.jpeg",
          title: "landing-page.comm",
          position: "top",
          linkendLink: "https://www.linkedin.com/in/nnenia-moreau-1a558511a/"
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
      flickityOptions: {
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
      teazeapProducts: [
        {
          type: "landing-page.recruitment",
          desc: "landing-page.recruitment-desc",
          backgroupImgUrl: "img/landing/bg/recruitment-bg.webp",
          productLink: "recruitment-agency"
        },
        {
          type: "landing-page.telemarketing",
          desc: "landing-page.telemarketing-desc",
          backgroupImgUrl: "img/landing/bg/telemarketing-bg.webp",
          productLink: "telemarketing"
        },
        {
          type: "landing-page.customer-service",
          desc: "landing-page.call-center-desc",
          backgroupImgUrl: "img/landing/bg/call-center-bg.webp",
          productLink: "customer-service"
        },
      ],
    };
  },
  created() {
    // this.handleLangauge();
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

<style scoped lang="scss">
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
  height: 100%;
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
  height: 100%;
}

.teacher-type-carousel {
  margin: 20px 0 0;
  padding: 0;
  width: 100%;
  height: 100%;
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

.products-header {
  margin-bottom: 4rem;
}

@media (min-width: 600px) {
  .introduction-text {
    margin-right: 16px;
  }
}
</style>
