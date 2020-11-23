<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Username..."
              v-model="form.userName"
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              type="password"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password..."
              v-model="form.password"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  @click="handleLogIn"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >Log In</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <a href="./" class="link footer-link">Home page</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
   data() {
      return {
        form: {
          userName: '',
          password: ''
        },
        userName: 'Jake',
        password: '7t7fpLqTd5KnYGBf'
      };
    },
  methods : {
    handleLogIn () {
      if (this.form.userName === this.userName && this.password === this.form.password) {
        this.$store.dispatch('login')
        this.$router.push({name: 'JobsAdminMain'})
      } else {
        this.$swal({
        title: 'Login Error',
        text: 'Incorrect Username or Password',
        icon: 'error',
        confirmButtonText: 'Okay'
        })
      }
    }
  }
};
</script>
