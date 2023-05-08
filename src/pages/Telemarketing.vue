<template>
  <div>
    <Header />
    <div class="section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">
              Let us build your virtual telemarketing phone room.
            </h2>
            <h5 class="description text-justify">
              Welcome to Teazeap, your  trusted telemarketing partner for business success. Our team of experienced and skilled telemarketing professionals are dedicated to providing top-notch services to businesses of all sizes. From generating leads to increasing sales, we help you achieve your marketing goals with the power of telemarketing. Promote your brand, connect with your target audience, and grow your business with Teazeap. Get in touch with us today to see how we can help you take your business to the next level.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <!-- video section -->
    <div class="section-about-us">
      <div class="container text-center">
        <div class="row justify-content-around">
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
    <!-- process section -->
    <div class="section pt-0">
      <div class="container process">
        <h2 class="title  text-center">
          Let us build your virtual telemarketing phone room.
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
    <div class="section pt-0">
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
    <div class="section pt-0">
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
            "https://www.youtube.com/embed/nZ7RNgTDxB0?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.avatarandechotelemarketing.com&playsinline=1&enablejsapi=1&widgetid=23"
        },
        {
          id: 2,
          src:
            "https://www.youtube.com/embed/tNHjG_Qqdy0?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.avatarandechotelemarketing.com&playsinline=1&enablejsapi=1&widgetid=15"
        },
        {
          id: 3,
          src:
            "https://www.youtube.com/embed/6SINX6jkZmw?autoplay=0&mute=0&controls=1&loop=0&origin=https%3A%2F%2Fwww.avatarandechotelemarketing.com&playsinline=1&enablejsapi=1&widgetid=17"
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
</style>
