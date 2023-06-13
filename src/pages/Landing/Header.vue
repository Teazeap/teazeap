<template>
  <div class="banner-wrapper">
    <v-container class="container" :style="commonHeaderMarginClass">
      <v-row class="center mt-12">
        <v-col cols="12" sm="7" lg="6" class="d-flex align-center">
          <div class="text-sm-left text-center">
            <h1 class="banner-title font-weight-bold text-white">
              Teazeap Agency
            </h1>
            <h4
              class="banner-subtitle white--text font-weight-regular text-white"
            >
              Transforming your workforce and customer interactions with
              Teazeap's innovative recruitment, telemarketing and call center
              solutions.
            </h4>
            <div class="mt-md-16 mt-10 d-sm-flex d-block">
              <router-link
                to="/recruitment-agency"
                class="program-link mr-0 mr-md-4 mb-md-0 mb-sm-0 mt-4 mt-md-0"
              >
                <div class="program-link-content">Recruitment</div>
              </router-link>
              <router-link to="/telemarketing" class="program-link mr-0 mr-md-4 mb-2 mb-md-0 mt-2 mt-md-0 mt-sm-0">
                <div class="program-link-content">Telemarketing</div>
              </router-link>

              <router-link to="/call-center" class="program-link">
                <div class="program-link-content">Call Center</div>
              </router-link>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="5" lg="6">
          <img src="/img/landing/landing-intro.png" alt="banner" class="img-fluid" />
        </v-col>
      </v-row>
      <ContactDialog v-if="showModal" @close="showModal = false" />
    </v-container>
  </div>
</template>

<script>
import { Button, FormGroupInput } from "@/components";
import sizeMixin from "@/plugins/sizeMixin.js";
import ContactDialog from "@/pages/Telemarketing/ContactDialog";

export default {
  name: "telemarketing-header",
  mixins: [sizeMixin],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    ContactDialog,
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
    handleFreeConsultation() {},
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
  background: rgb(96, 125, 249);
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
  height: auto;
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

.program-link-content {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
