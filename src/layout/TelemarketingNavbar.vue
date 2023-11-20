<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    :close-nav="closeNav"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        <img style="width: 80px" src="/img/logo/telemarketing-logo.png" />
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        :title="home"
        icon="users-viewfinder"
        class="nav-item nav-ul"
        :isFa="true"
      >
        <nav-link to="landing#about-us">
          <i class="now-ui-icons travel_info nav-link-icon"></i>
          <p class="mt-1">{{ $t("nav.about-us") }}</p>
        </nav-link>
        <nav-link to="landing#explore-teazeap">
          <i class="now-ui-icons ui-1_zoom-bold nav-link-icon"></i>
          <p class="mt-1">{{ $t("nav.explore-teazeap") }}</p>
        </nav-link>
        <!--
        <nav-link to="recruitment-agency#tech">
          <font-awesome-icon icon="code" />
          <span class="ml-2">{{ $t("nav.tech") }}</span>
        </nav-link>
        <nav-link to="recruitment-agency#corporate">
          <font-awesome-icon icon="business-time" />
          <span class="ml-2">{{ $t("nav.corporate") }}</span>
        </nav-link>
        <nav-link to="recruitment-agency#educational">
          <font-awesome-icon icon="graduation-cap" />
          <span class="ml-2">{{ $t("nav.education") }}</span>
        </nav-link>
        -->
      </drop-down>

      <drop-down
        class="nav-item nav-ul"
        :title="services"
        tag="li"
        icon="now-ui-icons business_money-coins"
      >
        <nav-link to="recruitment">
          <font-awesome-icon icon="users-viewfinder" />
          <span class="ml-2">{{ $t("nav.recruitment") }}</span>
        </nav-link>
        <nav-link to="telemarketing">
          <font-awesome-icon icon="headset" />
          <span class="ml-2">{{ $t("nav.telemarketing") }}</span>
        </nav-link>
        <nav-link to="customer-service">
          <font-awesome-icon icon="user-group" />
          <span class="ml-2">{{ $t("nav.customer-service") }}</span>
        </nav-link>
      </drop-down>

      <!--

      <drop-down
        tag="li"
        :title="telemarketing"
        icon="headset"
        class="nav-item nav-ul"
        :isFa="true"
      >
        <nav-link to="telemarketing/single-agent">
          <font-awesome-icon icon="user" />
          <span class="ml-2">{{ $t("nav.singleAgent") }}</span>
        </nav-link>
        <nav-link to="telemarketing/multiple-agent">
          <font-awesome-icon icon="user-group" />
          <span class="ml-2">{{ $t("nav.multipleAgent") }}</span>
        </nav-link>
        <nav-link to="telemarketing/bundle">
          <font-awesome-icon icon="crown" />
          <span class="ml-2">{{ $t("nav.bundle") }}</span>
        </nav-link>
      </drop-down>
-->
      <drop-down
        class="nav-item nav-ul"
        :title="plans"
        tag="li"
        icon="now-ui-icons education_agenda-bookmark"
      >
        <nav-link to="/plans#telemarketing">
          <font-awesome-icon icon="headset" />
          <span class="ml-2">{{ $t("nav.telemarketing") }}</span>
        </nav-link>
        <nav-link to="/plans#customer-service">
          <font-awesome-icon icon="user-group" />
          <span class="ml-2">{{ $t("nav.customer-service") }}</span>
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        :title="contact"
        icon="hashtag"
        :isFa="true"
        :isHighlighted="true"
        class="nav-item nav-ul"
      >
        <nav-link href="https://www.facebook.com/teazeap" target="_blank">
          <i class="fab fa-facebook-square"></i> {{ $t("nav.facebook") }}
        </nav-link>
        <nav-link href="https://www.instagram.com/teazeap/" target="_blank">
          <i class="fab fa-instagram"></i> {{ $t("nav.instagram") }}
        </nav-link>
      </drop-down>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import { v4 as uuidv4 } from "uuid";
// import LanguageSwitcher from '../components/LanguageSwitcher.vue';

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    // LanguageSwitcher,
    [Popover.name]: Popover,
  },
  computed: {
    ourServices() {
      return this.$t("nav.our-services");
    },
    language() {
      return this.$t("nav.language");
    },
    home() {
      return this.$t("nav.home");
    },
    services() {
      return this.$t("nav.services");
    },
    plans() {
      return this.$t("nav.plans");
    },
    contact() {
      return this.$t("nav.contact");
    },
  },
  methods: {
    onLanguageChange(language) {
      this.$i18n.locale = language === "en" ? "en" : "zh";
      localStorage.setItem("teapZeapLang", this.$i18n.locale);
      this.closeNav = uuidv4();
    },
  },
  data: () => ({
    closeNav: null,
  }),
};
</script>

<style scoped>
.nav-link-icon {
  right: 6px;
  top: 2px !important;
}

.about-us.active {
  color: #fff;
  text-decoration: none;
  background-color: transparent !important;
}

.about-us {
  color: #fff;
  text-decoration: none;
  background-color: transparent !important;
}
</style>
