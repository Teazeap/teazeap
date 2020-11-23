<template>
  <div class="section  text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your teaching career is very important to us.</p>
        <div class="row">
          <form name="homepage" method="POST" data-netlify="true">
              <div class="col-lg-5 col-sm-12 text-center ml-auto mr-auto col-md-10">
                <fg-input
                  class="input-lg"
                  placeholder="First Name..."
                  v-model="form.fullName"
                  type="text"
                  addon-left-icon="now-ui-icons users_circle-08"
                  name="Full Name"
                >
                </fg-input>
                <fg-input
                  class="input-lg"
                  placeholder="Email Here..."
                  type="email"
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
                  <n-button type="submit" round block @click="sendMessage" size="lg"
                    >Send Message</n-button
                  >
                </div>
            </div>
          </form>
          
        </div>
      </div>
    </div>
</template>

<script>
import { Button, FormGroupInput, Tabs, TabPane } from '@/components';

export default {
  name: 'contact',
  components: {
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    data() {
      return {
        form: {
          fullName: '',
          email: '',
          message: ''
        }
      };
    },
    methods : {
      sendMessage () {
        this.$swal({
        title: 'Message sent',
        text: 'You will recieve email for confirmation',
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then((result) => {
        if(result.value) {
          this.form = {}
        }
      })
      }
    }
}
</script>