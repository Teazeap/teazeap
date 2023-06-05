<template>
  <div>
    <Header />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">
          Let us build your virtual telemarketing phone room.
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/intro-pic.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
              Welcome to Teazeap, your trusted telemarketing partner for
              business success. Our team of experienced and skilled
              telemarketing professionals are dedicated to providing top-notch
              services to businesses of all sizes. From generating leads to
              increasing sales, we help you achieve your marketing goals with
              the power of telemarketing. Promote your brand, connect with your
              target audience, and grow your business with Teazeap. Get in touch
              with us today to see how we can help you take your business to the
              next level.
            </p>
          </v-col>
        </div>
      </div>
    </div>
    <!-- telemarketing steps -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">
          Our Strategic Approach To Providing Telemarketing Services
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

   <!-- teacher type -->
    <div class="section pt-0 mobile-padding" :style="commonMarginClass">
      <div class="container section-card">
        <h2 class="title text-center">Where We Started</h2>
        <p class="video-section-introduction text-justify">
          Teazeap embarked on its journey with a primary emphasis on talent
          acquisition within the education sector. However, over time, the
          organization evolved into a well-rounded provider of recruitment
          solutions, telemarketing services, and call center operations.
          Teazeap's expanded scope encompassed various types of teaching
          professionals, including full-time educators, part-time instructors,
          and substitute teachers.
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
    <router-view/>
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
  name: "telemarketing",
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
          title: "UNDERSTAND CUSTOMER NEEDS",
          content: "Teazeap would start by understanding the customer's business requirements, target audience, and sales goals. Based on this information, we would recommend the most appropriate virtual telemarketing service to meet the customer's needs."
        },
        {
          id: 2,
          title: "CONFIGURE INFRASTRUCTURE",
          content: "Once the service is chosen, Teazeap would configure the necessary infrastructure, including software, hardware, and network components. This would ensure that the virtual telemarketing service is set up correctly and functions optimally."
        },
        {
          id: 3,
          title: "TRAIN AGENTS",
          content: "Teazeap would provide comprehensive training to agents on how to use the virtual telemarketing service effectively, including best practices for managing calls, handling objections, and closing sales. This training would help agents to provide top-quality service to customers and achieve the customer's sales goals."
        }
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
  text-align: justify;
}

@media (min-width: 600px) {
  .introduction-text {
    margin-right: 16px;
  }
}
</style>
