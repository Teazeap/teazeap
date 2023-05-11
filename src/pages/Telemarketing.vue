<template>
  <div>
    <Header />
        <div class="pt-0 intro-container">
      <div class="container process intro">
        <h2 class="title  text-center">
          Let us build your virtual telemarketing phone room.
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/intro-pic.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <p class="introduction-text">
            Welcome to Teazeap, your  trusted telemarketing partner for business success. Our team of experienced and skilled telemarketing professionals are dedicated to providing top-notch services to businesses of all sizes. From generating leads to increasing sales, we help you achieve your marketing goals with the power of telemarketing. Promote your brand, connect with your target audience, and grow your business with Teazeap. Get in touch with us today to see how we can help you take your business to the next level.
          </p>
          </v-col>
        </div>
      </div>
    </div>
    <!-- <div class="section-about-us intro-container">
      <div class="container process intro">
        <h2 class="title  text-center">
          Let us build your virtual telemarketing phone room.
        </h2>
        <p class="video-section-introduction">
          Welcome to Teazeap, your  trusted telemarketing partner for business success. Our team of experienced and skilled telemarketing professionals are dedicated to providing top-notch services to businesses of all sizes. From generating leads to increasing sales, we help you achieve your marketing goals with the power of telemarketing. Promote your brand, connect with your target audience, and grow your business with Teazeap. Get in touch with us today to see how we can help you take your business to the next level.
        </p>
        <div class="separator separator-primary"></div>
      </div>
    </div> -->
    <!-- video section -->
    <div class="section pt-0 mobile-padding">
      <div class="container process">
        <h2 class="title  text-center">
          Get a Glimpse Inside: Watch Our Call Center Agents in Action
        </h2>
        <p class="video-section-introduction">
          At Teazeap, we take pride in our team of professional and dedicated call center agents who work tirelessly to provide exceptional service to our clients. Our video gallery offers an inside look into the daily operations of our call center, highlighting the professionalism, expertise, and dedication of our agents. See firsthand how our team works to generate leads, increase sales, and promote brands through the power of telemarketing.
        </p>

        <div class="row mt-4 videos-container">
          <div class="col-md-4" v-for="(video, id) in videos" :key="id">
            <iframe
              width="100%"
              height="345"
              class="video-frame"
              :src="video.src"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- video section -->
    <div class="section pt-0 mobile-padding">
      <div class="container process">
        <h2 class="title  text-center">
          Our Strategic Approach To Providing Telemarketing Services
        </h2>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img src="/img/process.png" alt="banner" class="img-fluid" />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible />
          </v-col>
        </div>
      </div>
    </div>

    <!-- plans section -->
    <div class="section pt-0 mobile-padding">
      <div class="container process">
        <h2 class="title">CHOOSING Your Solution:</h2>
        <h5 class="description">
          If you're looking for a reliable partner to help you reach your sales goals and improve customer engagement, look no further than Teazeap. Our telemarketing and call center services are tailored to meet your unique needs and deliver results.
        </h5>
        <div class="row mt-n4 mb-4" style="justify-content: center">
          <v-col cols="12" sm="7" lg="4">
            <PlanCard
              :card-styles="{
                backgroundColor: 'rgb(96, 125, 249)',
                actionButtonColor: 'rgb(96, 125, 249)',
                actionButtonBackground: 'white'
              }"
              :plan="{
                title: 'AVATAR',
                subtitle: 'If this describes your campaign:',
                keyPoints: [
                  'Identify ideal customers for products/services.',
                  'Research potential leads for sales.',
                  'Generate leads through surveys.'
                ],
                actionButton: {
                  text: 'Reserve',
                  url: ''
                }
              }"
            />
          </v-col>
          <v-col cols="12" sm="5" lg="4">
            <PlanCard
              :card-styles="{
                backgroundColor: '#f96332',
                textColor: 'white',
                actionButtonColor: '#f96332',
                actionButtonBackground: 'white'
              }"
              :plan="{
                title: 'SPECIALS',
                subtitle: 'If this describes your campaign:',
                keyPoints: [
                  'Credit check for prospects.',
                  'Thorough research for sales leads.',
                  'Maintain accurate CRM data.'
                ],
                actionButton: {
                  text: 'Reserve',
                  url: ''
                }
              }"
            />
          </v-col>
        </div>
      </div>
    </div>
    <!-- testimonials section -->
    <div class="section pt-0 mobile-padding">
      <div class="container process">
        <h2 class="title  text-center">Real Clients. Real Results</h2>
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
  </div>
</template>
<script>
import { Button, FormGroupInput, Collapsible } from "@/components";
import Contact from "@/pages/Services/Contact";
import Header from "@/pages/Telemarketing/Header.vue";
import Flickity from "vue-flickity";
import TesimonialsCard from "@/pages/Telemarketing/TesimonialsCard";
import PlanCard from "@/pages/Telemarketing/PlanCard";

export default {
  name: "telemarketing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    TesimonialsCard,
    Header,
    Collapsible,
    Flickity,
    PlanCard
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
          src:
            "https://videos.ctfassets.net/dr15y1pi2yc9/77uBczZTTHGFOYJNjgL6qD/1a4577bff54f4a117ee37a4c7aee7b92/videoplayback-1.mp4"
        },
        {
          id: 2,
          src:
            "https://videos.ctfassets.net/dr15y1pi2yc9/3p9fUqGM6nLVbKWMBSsqt9/634faaa8c15656d5b6ccd0b0d7c8ac1c/videoplayback-2.mp4"
        },
        {
          id: 3,
          src:
            "https://videos.ctfassets.net/dr15y1pi2yc9/NVi7i40iXbsu30guZRUak/ce71561a78a2a18bb474181d98437cdc/videoplayback-3.mp4"
        }
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
        resize: true
      },
      testimonials: [
        {
          picUrl: "img/agent-1.jpg",
          name: "Debt Settlement",
          message: `"How many other outbound call centers did we try?At least 12 in India and the Philippines. They all failed because of the accents. Avatar & Echo telemarketing outsourcing works, the agents don't have accents and prospects listen to what they say."`
        },
        {
          picUrl: "img/agent-2.jpg",
          name: "Mortgage",
          message: `"American-run, they get lead generation. Avatar & Echo delivers the lowest cost, qualified leads. Its as east to get as siding up for their service. Listen to what they say – they know the business."`
        },
        {
          picUrl: "img/agent-3.jpg",
          name: "Insurance",
          message: `With the RXR we manager our team and it feels like we are in the middle of the action.  The software is amazing are we run better then we did when we had the call center here. It's amazing that they turned the complex process of running a call center into a service!`
        }
      ]
    };
  },
  created() {
    this.handleLangauge();
  },
  computed: {
    swiper() {
      return this.$refs.communityBadgeInfoModalSwiper;
    }
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

.process {
  border: 1px solid #ebeef5;
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 24px;
  margin-top: 4rem;
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
    margin-right: 16px
  }
}



</style>
