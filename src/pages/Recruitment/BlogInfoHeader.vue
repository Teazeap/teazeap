<template>
  <div class="banner-wrapper">
    <v-container class="container" :style="commonHeaderMarginClass">
      <v-row class="center mt-12">
        <v-col cols="12" sm="7" lg="6" class="d-flex align-center">
          <div class="text-center" style="width: 100%">
            <h1 class="banner-title font-weight-bold text-white">
              {{ blog.title }}
            </h1>
          </div>
        </v-col>
        <v-col cols="12" sm="5" lg="6"  class="text-center">
          <img
            :src="bannerSrc"
            alt="banner"
            class="img-fluid"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Button, FormGroupInput } from "@/components";
import sizeMixin from "@/plugins/sizeMixin.js";

export default {
  name: "blog-info-header",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
    showButton: {
      type: Boolean,
      default: () => true,
    },
    bannerSrc: {
      type: String,
      default: () => "/img/recruitment/recruitment-2.png"
    }
  },
  computed: {
    commonHeaderMarginClass() {
      let marginLeft = `${this.headerMargin}px`;
      let marginRight = `${this.headerMargin}px`;

      if (this.windowWidth < 960) {
        marginLeft = null;
        marginRight = null;
      }
      return {
        marginLeft,
        marginRight,
      };
    },
  },
  methods: {
    handleTime(fullTime) {
      return fullTime ? "Full Time" : "Sub";
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 5%;
}
.banner-wrapper {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  padding: 20px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.download {
  padding: 15px 35px;
  background: #f96332;
  color: white;
  font-weight: bolder;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .download {
    width: 100%;
  }
}

.img-fluid {
  max-width: 100%;
  height: 88%;
}

.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-subtitle {
  font-size: 21px;
}

@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}

@media (min-width: 1200px) {
  .banner-subtitle {
    margin-right: 150px;
  }
}

.program-link-content {
  display: flex;
  align-items: center;
  gap: 4px;
}

.program-link {
  padding: 15px 20px;
  background: #f96332;
  color: white;
  font-weight: bolder;
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.program-link:hover {
  text-decoration: none;
  transform: translateY(-2px);
  transition-duration: 3s;
}

.program-link.active {
  border: white solid 3px;
}
</style>
