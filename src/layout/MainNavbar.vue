<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
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
          :title="ourServices"
          icon="now-ui-icons design_image"
          class="nav-item nav-ul"
      >
        <nav-link to="/our-services/teachers">
          <i class="now-ui-icons education_paper"></i> {{$t('nav.teachers')}}
        </nav-link>
        <nav-link to="/our-services/schools">
          <i class="now-ui-icons education_hat"></i> {{$t('nav.schools')}}
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link"
          href="./"
          target="_self"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>{{$t('nav.about-us')}}</p>
        </a>
      </li>
      <li class="nav-item">
        <nav-link
          class="nav-link btn btn-neutral"
          to="/jobs"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>{{$t('nav.apply-now')}}</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <nav-link
          class="nav-link  btn btn-neutral btn-profile"
          to="/create-profile"
        >
          <i class="now-ui-icons users_single-02"></i>
          <p>{{$t('nav.create-profile')}}</p>
        </nav-link>
      </li>

      <drop-down
          tag="li"
          :title="language"
          icon="now-ui-icons business_globe"
          class="nav-item nav-ul"
      >
        <nav-link text="en" @onLanguageChange="onLanguageChange">
          <i class="now-ui-icons travel_istanbul"></i> English
        </nav-link>
        <nav-link text="zh" @onLanguageChange="onLanguageChange">
          <i class="now-ui-icons transportation_air-baloon"></i> Chinese
        </nav-link>
      </drop-down>

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
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
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
    ourServices () {
      return this.$t('nav.our-services');
    },
    language () {
      return this.$t('nav.language');
    }
  },
  methods: {
    onLanguageChange (language) {
      this.$i18n.locale = language === 'en' ? 'en' : 'zh'
      localStorage.setItem('teapZeapLang', this.$i18n.locale)
    }
   }
};
</script>

<style scoped></style>
