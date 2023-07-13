<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container text-center d-flex flex-column">
      <nav>
        <ul>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/">
              TeaZeap
            </router-link>
          </li>
          <li>
            <router-link v-popover:popover1 class="navbar-brand" to="/">
              {{ $t("nav.aboutUs") }}
            </router-link>
          </li>
          <li>
            <router-link
              v-popover:popover1
              class="navbar-brand"
              to="/admin/login"
            >
              {{ $t("nav.admin") }}
            </router-link>
          </li>
          <li>
            <router-link
              v-popover:popover1
              class="navbar-brand"
              to="/telemarketing"
            >
            {{ $t("nav.telemarketing") }}
            </router-link>
          </li>

          <li>
            <router-link
              v-popover:popover1
              class="navbar-brand"
              to="/telemarketing/single-agent"
            >
            {{ $t("nav.singleAgent") }}
            </router-link>
          </li>

           <li>
            <router-link
              v-popover:popover1
              class="navbar-brand"
              to="/telemarketing/multiple-agent"
            >
            {{ $t("nav.multipleAgent") }}
            </router-link>
          </li>

          <li>
            <router-link
              v-popover:popover1
              class="navbar-brand"
              to="/telemarketing/call-center"
            >
              {{ $t("nav.callCenter") }}
            </router-link>
          </li>


        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Coded by
        <a
          href="https://muzi-gondwe.netlify.app/"
          target="_blank"
          rel="noopener"
          >Muzi P. Gondwe</a
        >
        and
        <a
          href="https://www.facebook.com/calerb.louisjean/"
          target="_blank"
          rel="noopener"
          >Calerbucci Jake</a
        >.
      </div>
    </div>
  </footer>
</template>
<script>
import sizeMixin from "@/plugins/sizeMixin.js";

export default {
  mixins: [sizeMixin],
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
