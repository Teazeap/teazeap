<template>
  <div class="section text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your teaching career is very important to us.</p>
        <div class="row">
          <form
            name="add-subscriber"
            id="myForm"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            enctype="application/x-www-form-urlencoded"
            @submit.prevent="handleFormSubmit">
              <input type="hidden" name="form-name" value="add-subscriber" />
              <input type="email" name="userEmail" v-model="formData.userEmail">
              <button type="submit" name="button">Subscribe</button>
          </form>
          <!-- <div class="col-lg-5 col-sm-12 text-center ml-auto mr-auto col-md-10">
            <form name="homepage" method="POST" data-netlify="true" netlify>
                <span v-if="false">
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
          </div> -->
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
          fullName: '',
          email: '',
          message: '',
          askPerson: ""
        },
        formData: {
          userEmail: null,
        },
        panelists: ['Evan You', 'Chris Fritz'],
        currentPanelist: 'Evan You'
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
      updatePanelist (ev) {
        this.currentPanelist = ev.target.value
      },
      encode(data) {  
            const formData = new FormData();
            
            for (const key of Object.keys(data)) {
                formData.append(key, data[key]);
            }
            
            return formData;
        },
      handleFormSubmit(e) {
            const axiosConfig = {
                header: { "Content-Type": "application/x-www-form-urlencoded" }
            };

            axios.post(
                location.href, 
                this.encode({
                    'form-name': e.target.getAttribute("name"),
                    ...this.formData,
                }),
                axiosConfig
            )
            // .then(document.getElementById("myForm").innerHTML = `
            // <div>
            //     Thank you! I received your submission.
            // </div>
            // `)
        }
    }
}
</script>