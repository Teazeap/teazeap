<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">TeaZeaP Recruiting Agency</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Finding Your Next Job</h2>
            <h5 class="description">
              Your success is important to us. TeaZeaP has curated partnerships with various employers looking to fill full-time, part-time, and substitute teacher positions. Through our platform you will be promoted as a candidate for a number of openings. If your resume is a good match for our clients’ needs, a recruiter will reach out to you to ensure the opportunity fits your goals and preferences. From there, our team will prepare you for every step of the hiring process, from the interview to placement. And even in helping you get settled in the apartment and city, you would like. We would have one of our team members accompany you all along the way.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
     <div class="section">
      <div class="container text-center">
         <h2 class="title">Teachers' Testimonials</h2>
      <div class="row">
          <div :class="[cardClass, index === 3 ? last : '']" v-for="(testimony, index) in testimonials" :key="index">
            <div class="card h-100">
              <div class="mb-n4">
                <img class="card-img-top " :src="testimony.picUrl" alt="Card image cap" >
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title text-primary">{{ testimony.name }}</h4>
                <p class="card-text font-italic">{{ testimony.message }}</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    <Contact />
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import  Contact  from "@/pages/Services/Contact";

export default {
  name: 'teachers',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      testimonials : [
        {
          picUrl: 'img/serge.jpg',
          name: 'Serge Jhally',
          message: `"TeaZeaP has been really helpful, their services are efficient effective and fast. I liked working with TeaZeaP."`
        },
        {
          picUrl: 'img/molie.jpg',
          name: 'Fermodelie Pierre',
          message: `"TeaZeaP is one of the best place to come when it comes to find the best English teaching Gig."`
        },
        {
          picUrl: 'img/pic3.jpg',
          name: 'Drew',
          message: `"TeaZeaP they work with the best schools and they would pretty much facilitate everything for the teachers"`
        },
        {
          picUrl: 'img/daniella.jpg',
          name: 'Daniella',
          message: `"TeaZeaP experience so far is reliable, honest, genuine, easily accessible to talk to someone through any kinds of platforms."`
        }
      ],
      cardClass: 'col-md-6 col-lg-4 col-xl-4 py-2',
      last: 'offset-lg-4 offset-xl-4'
    };
  }
};
</script>
<style></style>
