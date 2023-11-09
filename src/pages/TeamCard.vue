<template>
  <div class="col-md-6 col-lg-4 col-xl-4">
    <v-app id="inspire">
      <v-card
        outlined
        class="mx-auto profile-card"
        width="350"
        :elevation="4"
        min-height="640"
        :href="profile.linkendLink"
        target="_blank"
      >
        <v-img
          :position="profile.position"
          :src="profile.pictureUrl"
          height="350px"
          @loadstart="loading = true"
          @load="loading = false"
        ></v-img>

        <v-card-title
          class="d-flex mt-2 justify-content-center team-name font-weight-bold"
        >
          {{ profile.name }}
        </v-card-title>
        <v-card-title class="d-flex mt-n4 text-primary justify-content-center">
          {{ $t(profile.title) }}
        </v-card-title>

        <v-card-text class="font-italic team-quote">
          {{ $t(profile.quote) }}
        </v-card-text>

        <v-card-actions
          class="pt-0 d-flex justify-content-center team-card-actions"
        >
          <a class="btn btn-primary btn-icon btn-round"
            ><i class="fab fa-linkedin"></i
          ></a>
        </v-card-actions>
      </v-card>
      <ContentPlaceholder :loading="loading" :height="640" :margin="640" />
    </v-app>
  </div>
</template>

<script>
import ContentPlaceholder from "@/components/ContentPlaceholder.vue";
export default {
  name: "team-card",
  bodyClass: "profile-page",
  components: { ContentPlaceholder },
  props: {
    profile: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {
    adjustCardAction() {
      return this.profile.name === "Calerb Louis Jean";
    },
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style scoped lang="scss">
.v-application--wrap {
  height: 620px !important;
  min-height: 100%;
  font-family: "Montserr" !important;

  a {
    color: white !important;
  }
}

.profile-card {
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 24px !important;
  height: 100% !important;
}

.profile-card:hover {
  transform: translateY(-2px);
  cursor: pointer;
}
.team-quote {
  font-size: 16px;
}
.team-name {
  font-size: 24px;
}

.team-card-actions::after {
  content: "";
  background: url("https://inventive.netlify.app/images/objects/6.png");
  background-repeat: no-repeat;
  height: 180px;
  width: 188px;
  position: absolute;
  right: 5px;
  bottom: 0;
  opacity: 0.2;
  z-index: 0;
  -moz-transform: scale(1);
  -o-transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  transform: scale(1);
  -moz-transition: all 400ms ease-out 0s;
  -webkit-transition: all 400ms ease-out 0s;
  -ms-transition: all 400ms ease-out 0s;
  -o-transition: all 400ms ease-out 0s;
  transition: all 400ms ease-out 0s;
}
</style>
