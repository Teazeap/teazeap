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
        <img style="width: 60px" src="/img/logo/logo.png" />
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <nav-link class="nav-link btn btn-profile" to="recruitment-agency#tech">
          <font-awesome-icon icon="code" />
          <p class="ml-1">{{ $t("nav.tech") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link
          class="nav-link btn btn-profile"
          to="recruitment-agency#corporate"
        >
          <font-awesome-icon icon="business-time" />
          <p class="ml-1">{{ $t("nav.corporate") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link
          class="nav-link btn btn-profile"
          to="recruitment-agency#educational"
        >
          <font-awesome-icon icon="graduation-cap" />
          <p class="ml-1">{{ $t("nav.education") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link class="nav-link btn btn-profile" to="/jobs">
          <i class="now-ui-icons arrows-1_share-66 nav-link-icon"></i>
          <p>{{ $t("recruitmentPage.applyNow") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link
          class="nav-link btn btn-neutral btn-profile"
          to="/create-profile"
        >
          <i class="now-ui-icons users_single-02 nav-link-icon"></i>
          <p>{{ $t("recruitmentPage.createProfile") }}</p>
        </nav-link>
      </li>

      <language-switcher
    /></template>
  </navbar>
</template>

<script>
import { Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import { v4 as uuidv4 } from "uuid";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

export default {
  name: "recruitment-agency-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    Navbar,
    NavLink,
    LanguageSwitcher,
    [Popover.name]: Popover,
  },
  computed: {
    ourServices() {
      return this.$t("nav.our-services");
    },
    language() {
      return this.$t("nav.language");
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
