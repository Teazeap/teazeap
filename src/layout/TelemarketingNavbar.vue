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
      <router-link v-popover:popover1 class="navbar-brand" to="/telemarketing">
        TeaZeap
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Agents"
        class="nav-item nav-ul"
      >
        <nav-link to="/telemarketing/single-agent">
          Single Agent Program
        </nav-link>
        <nav-link to="/telemarketing/multiple-agent">
          Multi Agent Program
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <nav-link class="nav-link about-us" to="/">
          <p>{{ $t("nav.about-us") }}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link
          class="nav-link  btn btn-neutral btn-call"
          to="/create-profile"
        >
          <p>800 -970-9739</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/teazeap"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/teazeap/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "telemarketing-navbar-navbar",
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
