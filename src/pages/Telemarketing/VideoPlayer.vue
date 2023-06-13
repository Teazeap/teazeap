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
        <video width="100%" height="100%" controls class="video-frame">
            <source :src="testimonial.videoFileUrl" type="video/mp4" />
        </video>

        <v-card-title class="d-flex  team-name text-primary justify-content-center">
          {{ $t(testimonial.name) }}
        </v-card-title>

        <v-card-text class="font-italic team-quote">
          {{testimonial.message}}
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "testimonial-card",
  bodyClass: "video-player",
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

.video-frame {
  border-radius: 24px 24px 0px 0px;;
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 12px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  height: 220px;
}

.video-frame :hover {
  transform: translateY(-2px);
  cursor: pointer;
}
</style>
