<template>
  <div>
    <PageHeader/>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{$t('teachers.find')}}</h2>
            <h5 class="description text-justify">
              {{$t('teachers.success')}}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
     <div class="section pt-0">
      <div class="container text-center">
         <h2 class="title">{{$t('teachers.testimonials')}}</h2>
      <div class="row mt-2">
          <TesimonialsCard v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial"/>
      </div>
      </div>
    </div>
    <Contact class="pt-0"/>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import  Contact  from "@/pages/Services/Contact";
import TesimonialsCard from './TesimonialsCard.vue';
import PageHeader from '../PageHeader.vue';

export default {
  name: 'teachers',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    Contact,
    TesimonialsCard,
    PageHeader
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
          message: `"TeaZeaP has been really helpful, their service is efficient, effective and fast. I liked working with TeaZeaP."`
        },
        {
          picUrl: 'img/molie.jpg',
          name: 'Fermodelie Pierre',
          message: `"TeaZeaP is one of the best place to come when it comes to finding the best English teaching Gig."`
        },
        {
          picUrl: 'img/pic3.jpg',
          name: 'Drew',
          message: `"TeaZeaP..they work with the best schools and they pretty much facilitate everything for the teachers"`
        },
        {
          picUrl: 'img/daniella.jpg',
          name: 'Daniella',
          message: `"TeaZeaP experience  is reliable, honest, genuine and easily accessible. Their staff is very passionate and they are always availabe to communicate to someone through any kind of platforms."`
        }
      ],
      cardClass: 'col-md-6 col-lg-4 col-xl-4 py-2',
      last: 'offset-lg-4 offset-xl-4'
    };
  }
};
</script>
<style></style>
