<template>
  <div>
    <Header />
    <div class="section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Let us build your virtual telemarketing phone room. </h2>
            <h5 class="description text-justify">
              Welcome to Teazeap, your premier telemarketing solution! We are a company dedicated to providing top-notch telemarketing services to businesses of all sizes. With our experienced and highly skilled team of telemarketing professionals, we can help you reach your target audience and achieve your marketing goals. Whether you're looking to generate leads, increase sales, or simply promote your brand, Teazeap is here to help. Contact us today to learn more about how we can help you grow your business through the power of telemarketing.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section-about-us">
      <div class="container text-center">
        <div class="row justify-content-around">
          <div class="col-md-4" v-for="(video, id) in videos" :key="id">
            <iframe width="100%" height="345" class="video-frame" :src="video.src">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="section mt-0 pt-0">
      <div class="container text-center">
        <h2 class="title">{{ $t("landing-page.team") }}</h2>
        <div class="row mt-4">
          <TeamCard
            v-for="(profile, index) in team"
            :key="index"
            :profile="profile"
          />
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import Contact from "@/pages/Services/Contact";
import TeamCard from "./TeamCard.vue";
import Header from "@/pages/Telemarketing/Header.vue";

export default {
  name: "telemarketing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    TeamCard,
    Header
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: ""
      },
      team: [
        {
          name: "Clifton Moreau",
          quote: "landing-page.chief-quote",
          pictureUrl: "img/ceo.jpg",
          title: "landing-page.chief",
          position: "top"
        },
        {
          name: "Calerb Louis Jean",
          quote: "landing-page.project-quote",
          pictureUrl: "img/jake_2.jpg",
          title: "landing-page.project",
          position: "top"
        },
        {
          name: "Nnenia Stephens",
          quote: "landing-page.comm-quote",
          pictureUrl: "img/nnenia_1.jpg",
          title: "landing-page.comm",
          position: "top"
        }
      ],
      videos: [
        {
          id: 1,
          src: "https://www.youtube.com/embed/nZ7RNgTDxB0?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.avatarandechotelemarketing.com&playsinline=1&enablejsapi=1&widgetid=23"
        },
        {
          id: 2,
          src: "https://www.youtube.com/embed/tNHjG_Qqdy0?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.avatarandechotelemarketing.com&playsinline=1&enablejsapi=1&widgetid=15"
        },
        {
          id: 3,
          src: "https://www.youtube.com/embed/6SINX6jkZmw?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.avatarandechotelemarketing.com&playsinline=1&enablejsapi=1&widgetid=17"
        }
      ]
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
    }
  }
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
</style>
