<template>
  <!-- <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title company-name">Telemarketing Outsourcing</h1>
          <div class="text-center row">
            <div class="col-12">
              <router-link
                  :to="{ name: 'JobsMain' }"
                  tag="button"
                  class="btn btn-primary btn-round btn-md"
                  >{{ $t("nav.apply-now") }}</router-link
                >
            </div>
            <div class="col-12">
              <a
                href="https://www.facebook.com/teazeap"
                target="_blank"
                class="btn btn-primary btn-icon btn-round mx-2"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/teazeap/"
                class="btn btn-primary btn-icon btn-round"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div> -->
  <div class="banner-wrapper">
      <v-container class="container">
        <v-row justify="center mt-12">
          <v-col cols="12" sm="7" lg="6" class="d-flex align-center">
            <div class="text-sm-left text-center">
              <h1 class="banner-title font-weight-bold text-white">
                 Teazeap Telemarketing And Call Center Services
              </h1>
              <h4 class="banner-subtitle white--text font-weight-regular text-white">
                "Maximize your sales potential with our expert telemarketing services."
              </h4>
              <div class="mt-md-16 mt-10 d-sm-flex d-block">
                <button class="download mr-4 mr-0 mr-sm-5 mb-5 mb-md-0 btn-custom-md d-sm-flex d-block btn-100">Free Consultation</button>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="5" lg="6">
            <img
              src="/img/tele.png"
              alt="banner" class="img-fluid"
            />
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import { Button, FormGroupInput } from '@/components';
export default {
   name: "telemarketing-header",
   components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
}
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
</style>