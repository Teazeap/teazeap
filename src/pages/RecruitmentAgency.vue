<template>
  <div>
    <Header />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">
          {{ $t("recruitmentPage.revolutionizingRecruitment") }}
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img
              src="/img/recruitment/recruitment-1.jpg"
              alt="banner"
              class="img-fluid"
            />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              {{ $t("recruitmentPage.introText") }}
            </p>
          </v-col>
        </div>
      </div>
    </div>

    <!-- service industry -->
    <div
      v-for="(service, index) in servicedIndustry"
      :key="index"
      class="section pt-0 mobile-padding"
      :style="commonMarginClass"
      :id="service.id"
    >
      <div class="container section-card">
        <h2 class="title text-center">
          {{ $t("serviceIndustry." + service.id + ".name") }}
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img
              :src="service.picUrl"
              alt="banner"
              class="img-fluid"
              :style="service.picUrlStyle"
            />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              <span
                v-html="$t('serviceIndustry.' + service.id + '.description')"
              />
            </p>
          </v-col>
        </div>
      </div>
    </div>

    <!-- recruitment steps -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          {{ $t("recruitmentPage.stepsTitle") }}
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img
              src="/img/recruitment/recruitment-3.png"
              alt="banner"
              class="img-fluid"
            />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible :processes="processes" />
          </v-col>
        </div>
      </div>
    </div>

    <!-- recruitment steps -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          {{ $t("recruitmentPage.strategicProcess") }}
        </h2>
        <div class="row mt-4">
          <v-col cols="12">
            <img
              src="/img/recruitment/recruitment-4.png"
              alt="banner"
              class="img-fluid"
            />
          </v-col>
        </div>
      </div>
    </div>

    <!-- teacher type -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          {{ $t("recruitmentPage.startedTitle") }}
        </h2>
        <p class="video-section-introduction text-justify">
          {{ $t("recruitmentPage.startedContent") }}
        </p>

        <flickity :options="flickityOptions" class="teacher-type-carousel">
          <TeacherTypeCard
            v-for="(teacherType, index) in teacherTypes"
            :key="index"
            :teacher-type="teacherType"
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
import Contact from "@/pages/Recruitment/Contact";
import Header from "@/pages/Recruitment/Header.vue";
import Flickity from "vue-flickity";
import sizeMixin from "@/plugins/sizeMixin.js";
import TeacherTypeCard from "@/pages/Landing/TeacherTypeCard.vue";

export default {
  name: "recruitment",
  bodyClass: "landing-page",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    Header,
    Collapsible,
    Flickity,
    TeacherTypeCard,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      processes: [
        {
          id: 1,
          title: "recruitmentPage.processes.1.title",
          content: "recruitmentPage.processes.1.content",
        },
        {
          id: 2,
          title: "recruitmentPage.processes.2.title",
          content: "recruitmentPage.processes.2.content",
        },
        {
          id: 3,
          title: "recruitmentPage.processes.3.title",
          content: "recruitmentPage.processes.3.content",
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
      teacherTypes: [
        {
          type: "landing-page.full-time",
          desc: "landing-page.full-time-desc",
        },
        {
          type: "landing-page.part-time",
          desc: "landing-page.part-time-desc",
        },
        {
          type: "landing-page.sub-teacher",
          desc: "landing-page.sub-desc",
        },
      ],
      servicedIndustry: [
        {
          name: "Tech",
          id: "tech",
          picUrl: "/img/recruitment/tech.png",
          picUrlStyle: "margin-top: -2.8rem",
        },
        {
          name: "Corporate",
          id: "corporate",
          picUrl: "/img/recruitment/corporate.png",
          picUrlStyle: "margin-top: -2.8rem",
        },
        {
          name: "Education",
          id: "educational",
          picUrl: "/img/recruitment/educational.png",
          picUrlStyle: "margin-top: -2.8rem",
        },
      ],
    };
  },
  created() {
    this.handleLangauge();
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
  /* text-align: justify; */
  /* word-spacing:-2px; */
}

@media (min-width: 600px) {
  .introduction-text {
    margin-right: 16px;
  }
}
</style>
