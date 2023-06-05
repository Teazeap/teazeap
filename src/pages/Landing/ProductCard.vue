<template>
  <div class="col-md-6 col-lg-4 col-xl-4">
    <v-app id="inspire">
      <v-card
        outlined
        class="mx-auto profile-card"
        min-height="220"
        width="334"
        to="telemarketing"
        :elevation="4"
        :style="{
          backgroundImage: 'url(' + teazeapProduct.backgroupImgUrl + ')',
        }"
      >
        <div class="content-containner">
          <div class="product-header">{{ $t(`${teazeapProduct.type}`) }}</div>
          <div class="product-sub-header text-justify">
            {{ $t(`${teazeapProduct.desc}`) }}
          </div>
          <div class="product-footer"></div>
        </div>
        <!-- <v-card-title class="d-flex team-name font-weight-bold">
        </v-card-title>
        <v-card-title class="d-flex mt-2 team-name font-weight-bold">
          {{ $t(`${teazeapProduct.type}`) }}
        </v-card-title>
        <v-card-text class="font-italic team-quote">
          {{ $t(`${teazeapProduct.desc}`) }}
        </v-card-text> -->
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "product-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    teazeapProduct: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  methods: {
    getImgUrl(imagePath) {
      return require(`${imagePath}`);
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
  background-position: right;
}

.profile-card:hover {
  transform: translateY(-2px);
  cursor: pointer;
  text-decoration: none;
}

.content-containner {
  padding: 24px;
}

.product-header {
  font-size: 36px;
  color: #ffffff;
  font-weight: 700;
  line-height: 1.3em;
  padding-bottom: 10px;
}

.product-sub-header {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
}
</style>
