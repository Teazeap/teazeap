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
        <img style="width: 60px" src="/img/logo/logo-1.png" />
      </router-link>
    </template>
    <template slot="navbar-menu">

      <li class="nav-item">
        <nav-link class="nav-link btn btn-profile" to="/telemarketing/single-agent">
          <font-awesome-icon icon="user" />
          <p class="ml-1">{{ $t("nav.singleAgent") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link class="nav-link btn btn-profile" to="/telemarketing/multiple-agent">
         <font-awesome-icon icon="user-group" />
          <p class="ml-1">{{ $t("nav.multipleAgent") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link class="nav-link btn btn-profile" to="/telemarketing/bundle">
         <font-awesome-icon icon="crown" />
          <p class="ml-1">{{ $t("nav.bundle") }}</p>
        </nav-link>
      </li>
        <language-switcher/>
    </template>
    <ContactDialog v-if="showModal" @close="showModal = false" />
  </navbar>
</template>

<script>
import { Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import { v4 as uuidv4 } from "uuid";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";
import LanguageSwitcher from '../components/LanguageSwitcher.vue';

export default {
  name: "telemarketing-navbar-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    ContactDialog,
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
    handlePhoneNumberClicked() {
      this.closeNav = uuidv4();

      setTimeout(() => {
        this.showModal = true;
      }, 500);
    },
  },
  data: () => ({
    closeNav: null,
    showModal: false,
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

@media screen and (max-width: 991px) {
  .telephone-nav {
    display: none;
  }
}
</style>
