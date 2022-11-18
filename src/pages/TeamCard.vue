<template>
  <div class="col-md-6 col-lg-4 col-xl-4">
    <v-app id="inspire">
      <v-card
        outlined
        class="mx-auto  profile-card"
        width="350"
        :elevation="4"

      >
        <v-img :position="profile.position" :src="profile.pictureUrl" height="350px" ></v-img>

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
          class="pt-0 d-flex justify-content-center"
          :class="{ 'mt-n6': adjustCardAction }"
        >
          <a class="card-link btn btn-primary btn-icon btn-round"
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-primary btn-icon btn-round"
            ><i class="fab fa-linkedin"></i
          ></a>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "profile-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    profile: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    adjustCardAction() {
      return this.profile.name === "Calerb Louis Jean";
    }
  },
  methods: {}
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
</style>
