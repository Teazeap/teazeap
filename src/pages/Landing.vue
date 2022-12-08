<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title company-name">TeaZeaP Recruiting Agency</h1>
          <div class="text-center row">
            <div class="col-12">
              <router-link
                  :to="{ name: 'JobsMain' }"
                  tag="button"
                  class="btn btn-primary btn-round btn-md"
                  >{{ $t("nav.apply-now") }}</router-link
                >
            </div>
            <div class="col-12">
              <a
                href="https://www.facebook.com/teazeap"
                target="_blank"
                class="btn btn-primary btn-icon btn-round mx-2"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/teazeap/"
                class="btn btn-primary btn-icon btn-round"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ $t("landing-page.who") }}</h2>
            <h5 class="description text-justify" >
              {{ $t("landing-page.goals") }}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container text-center">
        <div class="row justify-content-around">
          <div class="col-md-3">
            <div class="team-player">
              <span style="color: #f96332;">
                <i class="fas fa-address-card fa-5x"></i>
              </span>
              <h4 class="title">{{ $t("landing-page.full-time") }}</h4>
              <p class="description text-justify">
                {{ $t("landing-page.full-time-desc") }}
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-player">
              <span style="color: #f96332;">
                <i class="fas fa-address-card fa-5x"></i>
              </span>
              <h4 class="title">{{ $t("landing-page.part-time") }}</h4>
              <p class="description text-justify">
                {{ $t("landing-page.part-time-desc") }}
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="team-player">
              <span style="color: #f96332;">
                <i class="fas fa-address-card fa-5x"></i>
              </span>
              <h4 class="title">{{ $t("landing-page.sub-teacher") }}</h4>
              <p class="description text-justify">
                {{ $t("landing-page.sub-desc") }}
              </p>
            </div>
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

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    TeamCard
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
