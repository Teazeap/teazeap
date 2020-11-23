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
        title="How it Works"
        icon="now-ui-icons design_app"
        class="nav-item nav-ul"
      >
        <nav-link to="/process">
          <i class="now-ui-icons files_single-copy-04"></i> Application Process
        </nav-link>
       <nav-link to="/qualification">
          <i class="now-ui-icons education_hat"></i> Qualification 
        </nav-link>
      </drop-down>
      <drop-down
          tag="li"
          title="Our Services"
          icon="now-ui-icons design_image"
          class="nav-item nav-ul"
      >
        <nav-link to="/our-services/teachers">
          <i class="now-ui-icons education_paper"></i> Teachers
        </nav-link>
        <nav-link to="/our-services/schools">
          <i class="now-ui-icons education_hat"></i> Schools
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <a
          class="nav-link"
          href="./"
          target="_self"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>About Us</p>
        </a>
      </li>
      <li class="nav-item">
        <nav-link
          class="nav-link btn btn-neutral"
          to="/jobs"
        >
          <i class="now-ui-icons arrows-1_share-66"></i>
          <p>Apply Now</p>
        </nav-link>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
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
          href="https://www.instagram.com/CreativeTimOfficial"
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
  methods: {}
};
</script>

<style scoped></style>
