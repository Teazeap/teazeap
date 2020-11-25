<template>
  <div class="section text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your teaching career is very important to us.</p>
        <div class="row">
              <div class="col-lg-5 col-sm-12 text-center ml-auto mr-auto col-md-10">
                <form name="homepage" method="POST" data-netlify="true" netlify>
                    <span>
                      <p>
                        <label>Your Name: <input v-model="form.fullName" type="text" name="name" /></label>   
                      </p>
                      <p>
                        <label>Your Email: <input v-model="form.email" type="email" name="email" /></label>
                      </p>
                      <p>
                        <label>Message: <textarea v-model="form.message" name="message"></textarea></label>
                      </p>
                    </span>
                  
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
                      <button type="submit" class="btn-round btn btn-primary btn-lg" rounded >Send Message</button>
                      <n-button v-if="false" type="submit" round   class="btn btn-primary btn-lg"
                        >Send Message</n-button
                      >
                    </div>
                </form>
            </div>
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