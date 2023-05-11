<template>
  <div class="col-md-6 col-lg-4 col-xl-4" >
    <v-app id="inspire">
      <v-card
        outlined
        class="mx-auto  profile-card"
        :elevation="4"
        :height="450"
        :min-height="450"
        :max-height="450"
      >
        <v-img :src="testimonial.picUrl"></v-img>

        <v-card-title class="d-flex  team-name text-primary justify-content-center">
          {{ $t(testimonial.name) }}
        </v-card-title>

        <v-card-text class="font-italic team-quote">
          {{ $t(testimonial.message) }}
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "testimonial-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    testimonial: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
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
  font-weight: 500;
}
</style>
