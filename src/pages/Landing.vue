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
            <a href="https://www.facebook.com/teazeap" target="_blank" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/teazeap/" class="btn btn-primary btn-icon btn-round" target="_blank" >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              TeaZeaP services guarantee schools are connected and provided with the best school teachers. Full time, part time, and substitute teacher positions are available.
              TeaZeaP is here to support our partners. In addition to job placements our team is available to mediate between schools and teachers. This may include communicating, clarifying or solving any potential misunderstandings between the two parties. Mentorship and helpful resources are readily available to teachers.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container text-center">
          <div class="row justify-content-around">
            <div class="col-md-3">
              <div class="team-player">
                <i class="now-ui-icons education_hat"></i>
                <h4 class="title">Full time Teacher</h4>
                <p class="description">
                  Reliable and trustworthy teachers that are committed to working in harmony with their school full time in order to provide a fun and safe learning environment for students.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-player">
                <i class="now-ui-icons education_hat"></i>
                <h4 class="title">Part time Teacher</h4>
                <p class="description">
                  Reliable and trustworthy teachers that are committed to working in harmony with their school part time in order to provide a fun and safe learning environment for students.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-player">
                <i class="now-ui-icons education_hat"></i>
                <h4 class="title">Sub Teacher</h4>
                <p class="description">
                  Reliable, and trustworthy teachers open to fill in when requested by a school and willing to meet their needs.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
         <h2 class="title">Here is our team</h2>
      <div class="row">
          <div class="col-md-6 col-lg-4 col-xl-4  py-2">
            <div class="card h-80">
              <div class="mb-n4">
                <img class="card-img-top " src="img/clifton.jpg" alt="Card image cap">
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title">Clifton Moreau</h4>
                <h4 class="card-title text-primary">Chief Executive Officer</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
                <a href="#pablo" class="card-link btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4  py-2">
            <div class="card h-80">
              <div class="mb-n4">
                <img class="card-img-top " src="img/calerb.jpg" alt="Card image cap">
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title">Calerb Louis Jean</h4>
                <h4 class="card-title text-primary">Project Manager</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
                <a href="#pablo" class="card-link btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-4  py-2">
            <div class="card h-80">
              <div class="mb-n4">
                <img class="card-img-top " src="img/wixy.jpg" alt="Card image cap">
              </div>
              <div class="card-body mt-n6">
                <h4 class="card-title">Nnenia Stephens</h4>
                <h4 class="card-title text-primary">Communication Director</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
                <a href="#pablo" class="card-link btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
            </div>
          </div>
      </div>
      </div>
    </div>
    <Contact />
  </div>
</template>
<script>
import { Button, FormGroupInput, Tabs, TabPane } from '@/components';
import MainFooter from '@/layout/MainFooter';
import  Contact  from "@/pages/Services/Contact";

export default {
  name: 'landing',
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
      }
    };
  }
};
</script>
