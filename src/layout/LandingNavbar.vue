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
        TeaZeap
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Recruitment"
        icon="users-viewfinder"
        class="nav-item nav-ul"
        :isFa="true"
      >
        <nav-link to="recruitment-agency#tech">
          <font-awesome-icon icon="code" /> <span class="ml-2">Tech</span>
        </nav-link>
        <nav-link to="recruitment-agency#corporate">
          <font-awesome-icon icon="business-time" /> <span class="ml-2">Corporate</span>
        </nav-link>
        <nav-link to="recruitment-agency#educational">
          <font-awesome-icon icon="graduation-cap" /> <span class="ml-2">Educational</span>
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        title="Telemarketing"
        icon="headset"
        class="nav-item nav-ul"
        :isFa="true"
      >
        <nav-link to="telemarketing/single-agent">
          <font-awesome-icon icon="user" /> <span class="ml-2">Single Agent </span>
        </nav-link>
        <nav-link to="telemarketing/multiple-agent">
          <font-awesome-icon icon="user-group" /> <span class="ml-2">Multiple Agent </span>
        </nav-link>
        <nav-link to="telemarketing/bundle">
          <font-awesome-icon icon="crown" /> <span class="ml-2">Bundle</span>
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        title="Call Center"
        icon="phone-volume"
        class="nav-item nav-ul"
        :isFa="true"
      >
        <nav-link to="/call-center#single-agent">
          <font-awesome-icon icon="user" /> <span class="ml-2">Single Agent</span>
        </nav-link>
        <nav-link to="/call-center#multiple-agent">
          <font-awesome-icon icon="user-group" /> <span class="ml-2">Multiple Agent</span>
        </nav-link>
        <nav-link to="/call-center#bundle">
          <font-awesome-icon icon="crown" /> <span class="ml-2">Bundle</span>
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        title="Get In Touch"
        icon="now-ui-icons business_globe"
        class="nav-item nav-ul"
      >
        <nav-link to="https://www.facebook.com/teazeap">
          <i class="fab fa-facebook-square"></i> Facebook
        </nav-link>
        <nav-link to="https://www.facebook.com/teazeap">
          <i class="fab fa-instagram"></i> Instagram
        </nav-link>
        <nav-link to="https://www.facebook.com/teazeap">
          <font-awesome-icon icon="phone" /> <span class="ml-2">+1 848 305 7850</span>
        </nav-link>
      </drop-down>

      <li class="nav-item">
        <nav-link
          class="nav-link  btn btn-neutral btn-profile"
          to="/blog"
        >
          <i class="now-ui-icons files_paper nav-link-icon"></i>
          <p>{{ $t("nav.blog") }}</p>
        </nav-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  },
  computed: {
    ourServices() {
      return this.$t("nav.our-services");
    },
    language() {
      return this.$t("nav.language");
    }
  },
  methods: {
    onLanguageChange(language) {
      this.$i18n.locale = language === "en" ? "en" : "zh";
      localStorage.setItem("teapZeapLang", this.$i18n.locale);
      this.closeNav = uuidv4()
    }
  },
  data: () => ({
    closeNav: null
  })
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
