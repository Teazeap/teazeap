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
          <h1 class="title">TeaZeaP Recruiting Agency</h1>
          <div class="text-center">
            <a
              href="https://www.facebook.com/teazeap"
              target="_blank"
              class="btn btn-primary btn-icon btn-round"
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
          <div class="button-container d-lg-none">
            <router-link
              :to="{ name: 'JobsMain' }"
              tag="button"
              class="btn btn-primary btn-round btn-md"
              >Apply Now</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ $t("landing-page.who") }}</h2>
            <h5 class="description">
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
              <p class="description">
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
              <p class="description">
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
              <p class="description">
                {{ $t("landing-page.sub-desc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
        <h2 class="title">{{ $t("landing-page.team") }}</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-4  py-2">
            <div class="card h-80">
              <div class="mb-n4">
                <img
                  class="card-img-top "
                  src="img/clifton.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title">Clifton Moreau</h4>
                <h4 class="card-title text-primary">{{ $t("landing-page.chief") }}</h4>
                <p class="card-text font-italic">
                  {{ $t("landing-page.chief-quotes") }}
                </p>
              </div>
              <a
                href="#pablo"
                class="card-link btn btn-primary btn-icon btn-round"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4  py-2">
            <div class="card h-80">
              <div class="mb-n4">
                <img
                  class="card-img-top "
                  src="img/calerb.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title">Calerb Louis Jean</h4>
                <h4 class="card-title text-primary">{{ $t("landing-page.project") }}</h4>
                <p class="card-text font-italic">
                 {{ $t("landing-page.project-quote") }}
                </p>
              </div>
              <a
                href="#pablo"
                class="card-link btn btn-primary btn-icon btn-round"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4  py-2">
            <div class="card h-80">
              <div class="mb-n4">
                <img
                  class="card-img-top "
                  src="img/wixy.jpg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title">Nnenia Stephens</h4>
                <h4 class="card-title text-primary">{{ $t("landing-page.comm") }}</h4>
                <p class="card-text font-italic">
                  {{ $t("landing-page.comm-quote") }}
                </p>
              </div>
              <a
                href="#pablo"
                class="card-link btn btn-primary btn-icon btn-round"
                ><i class="fab fa-twitter"></i
              ></a>
              <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                ><i class="fab fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>
<script>
import { Button, FormGroupInput} from "@/components";
import Contact from "@/pages/Services/Contact";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
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
      
      if(storedLanguage){
        this.$i18n.locale = storedLanguage
        console.log(this.$i18n.locale);
      } else {
        this.$i18n.locale = browserLanguage.includes("zh") ? "zh" : "en"
        console.log(this.$i18n.locale);
      }
    },
  },
};
</script>
