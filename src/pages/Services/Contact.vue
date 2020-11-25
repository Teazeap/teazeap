<template>
  <div class="section text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your teaching career is very important to us.</p>
        <div class="row">
          <div class="col-lg-5 col-sm-12 text-center ml-auto mr-auto col-md-10">
            <form @submit.prevent="handleSubmit" name="contact" method="POST" data-netlify="true" netlify-honeybot="bot-field">
                <input type="hidden" name="bot-field" value="contact">
                <fg-input
                  class="input-lg"
                  placeholder="First Name..."
                  v-model="form.name"
                  type="text"
                  addon-left-icon="now-ui-icons users_circle-08"
                  name="name"
                >
                </fg-input>
                <fg-input
                  class="input-lg"
                  placeholder="Email Here..."
                  type="email"
                  v-model="form.email"
                  addon-left-icon="now-ui-icons ui-1_email-85"
                   name="email"
                >
                </fg-input>
                <div class="textarea-container">
                  <textarea
                    class="form-control"
                    rows="4"
                    cols="80"
                    v-model="form.message"
                    name="message"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div class="send-button">
                  <button class="btn-round btn btn-primary btn-lg" rounded >Send Message</button>
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
import axios from 'axios'

export default {
  name: 'contact',
  components: {
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
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
      },
      handleSubmit () {
        fetch('/', {
          method: 'post',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            'form-name': 'contact',
            ...this.form
          })
        }).then(() => {
          this.sendMessage()
        })
      },
       encode (data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
    }
}
</script>