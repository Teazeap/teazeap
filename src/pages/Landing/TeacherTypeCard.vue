<template>
  <div class="col-md-6 col-lg-4 col-xl-4">
    <v-app id="inspire">
      <v-card outlined class="mx-auto profile-card" min-height="360" width="350"  :elevation="4">
        <v-card-title
          class="d-flex mt-2 justify-content-center team-name font-weight-bold"
        >
          <span style="color: #f96332">
            <i class="fas fa-address-card fa-5x"></i>
          </span>
        </v-card-title>
        <v-card-title
          class="d-flex mt-2 justify-content-center team-name font-weight-bold"
        >
          {{ $t(`${teacherType.type}`) }}
        </v-card-title>
        <v-card-text class="font-italic team-quote">
          {{ $t(`${teacherType.desc}`) }}
        </v-card-text>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "teacher-type-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    teacherType: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
.v-application--wrap {
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
  // height: 100% !important;
  // min-height: 100% !important;
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
