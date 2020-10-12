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
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Here is our team</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/avatar.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Romina Hadid</h4>
                <p class="category text-primary">Model</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-instagram"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-facebook-square"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/ryan.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Ryan Tompson</h4>
                <p class="category text-primary">Designer</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="team-player">
                <img
                  src="img/eva.jpg"
                  alt="Thumbnail Image"
                  class="rounded-circle img-fluid img-raised"
                />
                <h4 class="title">Eva Jenner</h4>
                <p class="category text-primary">Fashion</p>
                <p class="description">
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#">links</a> for people to be able to follow
                  them outside the site.
                </p>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-google-plus"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-youtube"></i
                ></a>
                <a href="#pablo" class="btn btn-primary btn-icon btn-round"
                  ><i class="fab fa-twitter"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
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
<style></style>
