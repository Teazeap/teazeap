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
              About Us
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/our-services/teachers">
              Teachers
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/our-services/schools">
              Schools
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/admin/jobs">
              Admin
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
