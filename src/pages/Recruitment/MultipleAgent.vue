<template>
  <div>
    <AgentsHeader
      title="Multiple Agent Program"
      sub-title="Advanced telemarketing services with live lead transfers and multi-agent program options."
      program-pic-url="/img/team-agents.png"
    />
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
              Leverage our advanced services for optimal telesales ROI through
              qualified live lead transfers. Say goodbye to unproductive cold
              calls, as our telemarketing experts generate warm, qualified
              leads. With our 100% USA-run call centers, professional
              representatives, and cost-effective solutions, streamline your
              costs and amplify profitability. Empower your sales team to focus
              on closing deals while we handle the groundwork. Take the first
              step today towards maximizing your revenue potential.
            </p>
          </v-col>
        </div>
      </div>
    </div>
    <PriceBadge :plan="filteringAvatarPlan" @get-plan="showModal = true"/>
    <!-- what to expect section -->
    <div class="row what-to-expect" :style="commonMarginClass">
      <v-col cols="12" sm="12" lg="6" class="section pt-0">
        <div class="container section-card contact-steps">
          <h2 class="title text-center">How It Works</h2>
          <ol>
            <li>Echo Live separates prospect's voice and scripted prompts.</li>
            <li>Telemarketers hear prospects in their left headphone.</li>
            <li>Telemarketers push appropriate buttons based on prospect's response.</li>
            <li>Pre-recorded responses played in right headphone, with script displayed on screen.</li>
            <li>Telemarketers echo exactly what they hear and see, like karaoke.</li>
            <li>Echo agents become proficient within an hour.</li>
            <li><span class="step-empasize">GENERATES QUALIFIED, LIVE, WARM TRANSFERS.</span></li>
          </ol>
        </div>
      </v-col>
      <v-col cols="12" sm="12" lg="6" class="section pt-0">
        <div class="container section-card benefits">
          <h2 class="title text-center what-to-expect-title">The Benefits</h2>
          <p>Contact Teazeap when you’re ready for:</p>
          <ul lang="la">
            <li>Call Analytics Dashboard</li>
            <li>Customizable Script Templates</li>
            <li>Multi-Channel Outreach</li>
            <li>Lead Generation Assistance</li>
            <li>Call Disposition Management</li>
          </ul>
        </div>
      </v-col>
    </div>

    <!-- steps section -->
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

    <ContactDialog v-if="showModal"  @close="showModal = false"  />
    <PricingTable @get-plan="showModal = true" />
    <Contact />
  </div>
</template>
<script>
import { Button, FormGroupInput, Collapsible } from "@/components";
import Contact from "@/pages/Telemarketing/Contact";
import AgentsHeader from "@/pages/Telemarketing/AgentsHeader.vue";
import sizeMixin from "@/plugins/sizeMixin.js";
import PriceBadge from "./PriceBadge.vue";
import PricingTable from "@/pages/Telemarketing/PricingTable.vue";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";

export default {
  name: "multiple-agent",
  bodyClass: "landing-page",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    AgentsHeader,
    PricingTable,
    ContactDialog,
    Collapsible,
    PriceBadge,
  },
  data() {
    return {
      showModal: false,
      form: {
        firstName: "",
        email: "",
        message: "",
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
      filteringAvatarPlan : {
        name: "FILTERING SPECIALS",
        price: "11.5",
        points: ['5/more and 1 Manager', 'Scripting', 'CRM Integration', 'Dialer']
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
    },
  },
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
  height: 400px;
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

.what-to-expect {
  margin-top: 28px;
}

.what-to-expect-title {
  color: #1ecd6e;
}
</style>
