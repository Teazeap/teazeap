<template>
  <div>
    <Header />
    <div class="pt-0 intro-container" :style="commonMarginClass">
      <div class="container section-card intro">
        <h2 class="title text-center">Your Path to Success</h2>
        <p class="video-section-introduction">
          At Teazeap, we understand that businesses come in all shapes and
          sizes, and so do their needs. We’ve designed three distinct pricing
          plans to cater to your unique requirements. Whether you’re looking to
          supercharge your recruitment efforts, elevate your telemarketing game,
          or streamline your call center operations, we’ve got you covered with
          our <span style="font-weight: bold">Starter</span>,
          <span style="font-weight: bold">Standard</span>, and
          <span style="font-weight: bold">Bundle</span> deals.
        </p>
        <div class="row mt-4">
          <v-col cols="12" sm="7" lg="6">
            <img
              src="/img/plans/pricing-plans.jpg"
              alt="banner"
              class="img-fluid"
            />
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <Collapsible :processes="plans" />
          </v-col>
        </div>
        <p class="video-section-introduction mb-4">
          No matter which plan you choose, Teazeap is committed to providing you
          with the support and tools required to thrive in today's competitive
          landscape. Let’s partner together and propel your business towards new
          heights of achievement.
        </p>
      </div>
    </div>

    <PricingTable
      priceTableHeader="Telemarketing Plans & Pricing"
      :plans="pricingPlans"
      @get-plan="showModal = true"
      id="telemarketing"
    />

    <PricingTable
      priceTableHeader="
Customer Service Plans & Pricing
"
      :plans="customerPlans"
      @get-plan="showModal = true"
      id="customer-service"
    />

    <!-- recruitment steps
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
    </div> -->
    <ContactDialog v-if="showModal" @close="showModal = false" />
    <Contact />
    <router-view />
  </div>
</template>
<script>
import { Button, FormGroupInput, Collapsible } from "@/components";
import Contact from "@/pages/Recruitment/Contact";
import Header from "@/pages/Plans/Header.vue";
import sizeMixin from "@/plugins/sizeMixin.js";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";
import PricingTable from "@/pages/Telemarketing/PricingTable.vue";

export default {
  name: "recruitment",
  bodyClass: "landing-page",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    Header,
    PricingTable,
    ContactDialog,
    Collapsible,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      showModal: false,
      customerPlans: [
        {
          isPopular: false,
          planName: "CUSTOMER SERVICE REPRESENTATIVE(CSR)",
          planType: "STARTER",
          planCost: 12,
          planDetails: [
            "<strong>4</strong> Reps and <strong>1</strong> Manager",
            "Answer inquiries",
            "Issue resolution",
            "Provide support",
            "",
            "",
          ],
          className: "basic",
        },
        {
          isPopular: false,
          planName: "CUSTOMER SERVICE SPECIALIST(CSS)",
          planType: "STANDARD",
          planCost: 12.5,
          planDetails: [
            "<strong>5</strong> Specialist and <strong>1</strong> Manager",
            "Handle complaints & escalate concerns",
            "Maintain records",
            "Provide information",
            "Follow up after questions & concerns are resolved",
            "",
          ],
          className: "echo",
        },
        {
          isPopular: true,
          planName: "CUSTOMER SERVICE+TELEMARKETING",
          planType: "BUNDLE",
          planCost: 13,
          planDetails: [
            "Customizable Plan",
           "<strong>7</strong> team members (1 Manager + 6 team members)",
            "Flexibility to select members based on your",
            "needs",
            "Choose members from CS & Telemarketing",
            "",
          ],
          className: "business",
        },
      ],
      pricingPlans: [
        {
          isPopular: false,
          planName: "FILTERING AGENTS",
          planType: "STARTER",
          planCost: 12,
          planDetails: [
            "<strong>4</strong> Agents and <strong>1</strong> Manager",
            "Identify ideal customers for products/ services",
            "Qualify potential leads for sales team ",
            "Set appointments",
            "Conduct up to 500 calls a day",
            "Call analytics dashboard",
          ],
          className: "basic",
        },
        {
          isPopular: false,
          planName: "FILTERING SPECIALISTS",
          planType: "STANDARD",
          planCost: 12.5,
          planDetails: [
            "<strong>5</strong> Specialist and <strong>1</strong> Manager",
            "Perform credit checks for prospects",
            "Maintain accurate CRM data",
            "Carry out multi- channel outreach",
            "Customizable script templates",
            "Live transfers",
          ],
          className: "echo",
        },
        {
          isPopular: true,
          planName: "CUSTOMER SERVICE+TELEMARKETING",
          planType: "BUNDLE",
          planCost: 13,
          planDetails: [
            "Customizable Plan",
            "<strong>7</strong> team members (1 Manager + 6 team members)",
            "Flexibility to select members based on your",
            "needs",
            "Choose members from CS & Telemarketing",
            "",
          ],
          className: "business",
        },
      ],
      plans: [
        {
          id: 1,
          title: "Starter Plan",
          content:
            "Ideal for those just beginning their journey, this plan offers the fundamental tools and support you need to make your mark and scale your efforts. It’s a cost effective way to get started on your path to success.",
        },
        {
          id: 2,
          title: "Standard Plan",
          content:
            "For those ready to take their business to the next level, our Standard Plan provides a comprehensive set of services and features to boost your operations and drive growth.",
        },
        {
          id: 3,
          title: "Bundle Plan",
          content:
            "The ultimate package for businesses seeking a full-service solution. Our Bundle Deal combines the best of our telemarketing and call center services, ensuring that your business has all the resources it needs for maximum success.",
        },
      ],
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
  text-align: start;
}

@media (min-width: 600px) {
  .video-section-introduction {
    text-align: start;
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
