<template>
  <div class="section text-center">
    <div class="container">
      <h2 class="title">{{ $t("contact.with-us") }}</h2>
      <p class="description">{{ $t("contact.important") }}</p>
      <div class="row">
        <div class="col-lg-5 col-sm-12 text-center ml-auto mr-auto col-md-10">
          <form
            @submit.prevent="handleSubmit"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeybot="bot-field"
            class="needs-validation"
            novalidate
          >
            <input type="hidden" name="bot-field" value="contact" />
            <fg-input
              :class="`input-lg ${errors.has('name') ? 'has-danger' : ''}`"
              :placeholder="[[firstPlaceholder]]"
              v-model="form.name"
              type="text"
              v-validate="'required'"
              addon-left-icon="now-ui-icons users_circle-08"
              name="name"
            >
            </fg-input>
            <span v-show="errors.has('name')" class="text-danger">{{
              errors.first("name")
            }}</span>
            <fg-input
              :class="`input-lg ${errors.has('name') ? 'has-danger' : ''}`"
              :placeholder="[[emailPlaceholder]]"
              type="email"
              v-validate="'required|email'"
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
              name="email"
            >
            </fg-input>
            <span v-show="errors.has('email')" class="text-danger">{{
              errors.first("email")
            }}</span>
            <div class="textarea-container">
              <textarea
                class="form-control"
                :class="`${errors.has('name') ? 'has-danger' : ''}`"
                rows="4"
                cols="80"
                v-model="form.message"
                v-validate="'required'"
                name="message"
                :placeholder="[[sendPlaceholder]]"
              ></textarea>
              <span v-show="errors.has('message')" class="text-danger">{{
                errors.first("message")
              }}</span>
            </div>
            <div class="send-button">
              <button class="btn-round btn btn-primary btn-lg" rounded>
                {{ $t("contact.send") }}
              </button>
            </div>
            <!-- added for netlify form submissions, not visible in ui -->
            <div style="position: absolute;z-index: -1;top: 0; opacity: 0">
              <fg-input v-model="subject" name="subject" />
            </div>
            <!-- end -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, FormGroupInput } from "@/components";
import SendEmailMixin from "@/mixins/SendEmailMixin";

export default {
  name: "contact",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  mixins: [SendEmailMixin],
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        subject: ""
      }
    };
  },
  computed: {
    subject() {
      return `Contact Form Message:  ${this.form.name}`;
    },
    sendPlaceholder() {
      return this.$t("contact.type");
    },
    emailPlaceholder() {
      return this.$t("contact.email");
    },
    firstPlaceholder() {
      return this.$t("contact.name");
    }
  },
  methods: {
    sendMessage() {
      this.$swal({
        title: "Message sent",
        text: "Our staff will contact you",
        icon: "success",
        confirmButtonText: "Okay"
      }).then(result => {
        if (result.value) {
          this.handleEmailNotification();
          this.form = {};
          this.$validator.reset();
        }
      });
    },
    handleEmailNotification() {
      const email = {};
      email.message = `
      <div>
      Dear ${this.form.name}
    </div>
    <div>
      <p>
        The Teazeap recruiting team is very happy you have chosen us to help you find the best placement that will suit you.
      </p>
    </div>
    <div>
      <p>
        In order for us to fully assist you in the process, we would like to have some relevant information.
      </p>
    </div>
    <ol>
      <li>For starters, where are you from and where are you currently located?</li>
      <li>Do you have any teaching experience and are you familiar with teaching kindergarten?</li>
      <li>Do you have any teaching certificates?</li>
      <li>Are you fully vaccinated?</li>
      <li>Finally, When will you be willing to relocate to Taiwan?</li>
    </ol>
    <div>
      <p>
        Last but not least when will you be available for a quick e-meeting this week?
      </p>
    </div>
    <div>
      <p>
        Hope to hear from you soon
      </p>
    </div>
    </div>

      `;
      email.subject = "Thanks for reaching out to us";
      email.address = this.form.email;
      email.regards = "Regards,";
      this.sendEmail(email);
    },
    handleSubmit() {
      this.form.subject = this.subject;
      this.$validator.validateAll().then(result => {
        if (result) {
          fetch("/", {
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "contact",
              ...this.form
            })
          }).then(() => {
            this.sendMessage();
          });
        }
      });
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    }
  }
};
</script>
