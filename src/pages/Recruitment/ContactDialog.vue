<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">Get in Touch with Us</div>

          <div class="modal-body">
            <form
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
                  class="form-control desc-textarea"
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
              <div class="send-button" style="text-align: center">
                <button
                  class="btn-round btn btn-primary btn-md mr-4"
                  rounded
                  @click="handleSubmit"
                >
                  {{ $t("contact.send") }}
                </button>
                <button
                  class="btn-round btn btn-secondary btn-md"
                  rounded
                  @click="handleCancel"
                >
                  {{ $t("contact.cancel") }}
                </button>
              </div>
              <!-- added for netlify form submissions, not visible in ui -->
              <div style="position: absolute; z-index: -1; top: 0; opacity: 0">
                <fg-input v-model="subject" name="subject" />
              </div>
              <!-- end -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import SendEmailMixin from "@/mixins/SendEmailMixin";

export default {
  name: "custom-modal",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  mixins: [SendEmailMixin],
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        subject: "",
      },
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
      return this.$t("contact.full-name");
    },
  },
  methods: {
    sendMessage() {
      this.$swal({
        title: "Message sent",
        text: "Our team will review your request and reach out to you shortly.",
        icon: "success",
        confirmButtonText: "Okay",
      }).then((result) => {
        if (result.value) {
          this.handleEmailNotification();
          this.form = {};
          this.$validator.reset();
        }
      });
    },
    handleEmailNotification() {
      const email = {};
      email.message = `<div>Dear ${this.form.name}</div><div><p>Thank you for taking the time to fill out the form on our website and expressing your interest in Teazeap's telemarketing services. We appreciate your consideration and the opportunity to assist you in reaching your marketing goals.</p></div><div><p>At Teazeap, we understand the importance of effective telemarketing in today's competitive business landscape. Our call filtering avatar plan, which includes 3 agents and 1 manager, is designed to provide you with a comprehensive solution to maximize your telesales efforts.</p></div><div><p>We pride ourselves on delivering advanced telemarketing services that can help you optimize your telesales budget and achieve a real return on investment. Our plan offers various features such as scripting, CRM integration, and a reliable dialer system to streamline your telemarketing campaigns.</p></div><div><p>We would be delighted to discuss your specific requirements and tailor a solution that aligns with your business objectives. Our experienced team is ready to guide you through the process and ensure your telemarketing endeavors are successful.</p></div><div><p>Thank you again for considering Teazeap. We value your trust and confidence in our services.</p></div><div><p>Hope to hear from you soon</p></div>`;
      email.subject = "Thanks for reaching out to us";
      email.address = this.form.email;
      email.regards = "Regards,";
      this.sendEmail(email);
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.subject = this.subject;
      this.$validator.validateAll().then((result) => {
        if (result) {
          fetch("/", {
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "telemarketing-contact",
              ...this.form,
            }),
          }).then(() => {
            this.$emit("close");
            this.sendMessage();
          });
        }
      });
    },
    handleCancel(e) {
      e.preventDefault();
      this.$validator.reset();
      this.$emit("close");
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 90%;
  width: 400px;
  margin: 0px auto;
  padding: 15px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  border: none;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bolder;
  color: black;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.desc-textarea {
  border: 1px solid #e3e3e3 !important;
  border-radius: 12px !important;
  padding: 10px 18px 10px 18px;
}
</style>
