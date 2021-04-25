<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container text-center">
      <nav>
        <ul>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/">
              TeaZeap
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/">
              {{$t('nav.about-us')}}
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/our-services/teachers">
              {{$t('nav.teachers')}}
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/our-services/schools">
              {{$t('nav.schools')}}
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/admin/jobs">
              {{$t('nav.admin')}}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, 
        Coded by
        <a href="https://muzi-gondwe.netlify.app/" target="_blank" rel="noopener"
          >Muzi P. Gondwe</a
        >
        and
        <a href="https://www.facebook.com/calerb.louisjean/" target="_blank" rel="noopener"
          >Calerbucci Jake</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
