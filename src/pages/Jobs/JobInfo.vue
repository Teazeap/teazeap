<template>
  <div>
    <JobInfoHeader :job="job" :show-button="true" />
    <div class="section" :style="[commonMarginClass, sectionStyleOverride]">
      <div class="container-fluid text-center">
        <!-- <div class="button-container">
          <router-link
            :to="{ name: 'JobsMain' }"
            tag="button"
            class="btn btn-primary btn-round btn-lg"
            >Back To Jobs</router-link
          >
        </div> -->
        <div class="row">
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-8 py-2"
          >
            <div class="card h-100 section-card">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">Introduction</h5>
                <p class="card-text">{{ job.description }}</p>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 py-2"
          >
            <div class="card h-100 section-card">
              <div class="card-body mx-2">
                <h5 class="card-title font-weight-bold">Requirements</h5>
                <ul class="text-left">
                  <li v-for="(item, index) in job.requirements" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-8 py-2"
          >
            <div class="card h-100 section-card">
              <div class="card-body mx-2">
                <h5 class="card-title font-weight-bold">What We Offer</h5>
                <ul class="text-left">
                  <li v-for="(item, index) in job.benefits" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 py-2"
          >
            <div class="card h-100 section-card">
              <div class="card-body mx-2">
                <h5 class="card-title font-weight-bold">Schedule</h5>
                <ul class="text-left">
                  <li v-for="(item, index) in job.schedule" :key="index">
                    {{ `${item.Day} : ${item.Time} ` }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :style="[commonMarginClass, formContainer]">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div
            class="col-md-12 col-lg-12 col-xl-12 section-card align-self-center"
          >
            <p class="card-title font-weight-bold text-center">Apply</p>
            <!-- Nav tabs -->
            <form
              @submit.prevent="handleSubmit"
              name="job-applications"
              method="POST"
              data-netlify="true"
              netlify-honeybot="bot-field"
              class="needs-validation"
              novalidate
            >
              <input type="hidden" name="bot-field" value="job-applications" />
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>Name</label>
                  <fg-input
                    type="text"
                    :class="`input-sm ${
                      errors.has('name') ? 'has-danger' : ''
                    }`"
                    placeholder="name..."
                    v-model="form.firstName"
                    v-validate="'required'"
                    name="name"
                  >
                  </fg-input>
                  <span v-show="errors.has('name')" class="text-danger">{{
                    errors.first("name")
                  }}</span>
                </div>
                <div class="form-group col-md-6">
                  <label>Surname</label>
                  <fg-input
                    type="text"
                    :class="`input-sm ${
                      errors.has('name') ? 'has-danger' : ''
                    }`"
                    placeholder="surame..."
                    v-model="form.lastName"
                    v-validate="'required'"
                    name="surname"
                  >
                  </fg-input>
                  <span v-show="errors.has('surname')" class="text-danger">{{
                    errors.first("surname")
                  }}</span>
                </div>
                <div class="form-group col-md-6">
                  <label>Email</label>
                  <fg-input
                    type="email"
                    :class="`input-sm ${
                      errors.has('name') ? 'has-danger' : ''
                    }`"
                    class="input-sm"
                    placeholder="Email..."
                    v-model="form.email"
                    v-validate="'required|email'"
                    name="email"
                  >
                  </fg-input>
                  <span v-show="errors.has('email')" class="text-danger">{{
                    errors.first("email")
                  }}</span>
                </div>
                <div class="form-group col-md-6">
                  <label>Gender</label>
                  <select
                    id="inputState"
                    class="custom-select select-rounded"
                    v-model="form.gender"
                  >
                    <option selected>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>Nationality</label>
                  <select
                    id="inputState"
                    class="custom-select select-rounded"
                    v-model="form.country"
                  >
                    <option v-for="(country, index) in countries" :key="index">
                      {{ country }}
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>Date of Birth</label>
                  <div class="datepicker-container">
                    <fg-input
                      :class="`${
                        pickers.datePicker === '' && submitClicked
                          ? 'has-danger'
                          : ''
                      }`"
                    >
                      <el-date-picker
                        type="date"
                        popper-class="date-picker date-picker-primary"
                        placeholder="Date Time Picker"
                        v-model="pickers.datePicker"
                        :picker-options="datePickerOptions"
                        v-validate="'required'"
                        name="D.O.B"
                      >
                      </el-date-picker>
                    </fg-input>
                    <span v-show="errors.has('D.O.B')" class="text-danger">{{
                      errors.first("D.O.B")
                    }}</span>
                  </div>
                </div>
                <div class="form-group col-md-12" id="filesList">
                  <label class="d-flex"
                    >Do you have a teaching license or sub teaching license
                    issued by state government?
                  </label>
                  <div class="d-flex">
                    <n-radio v-model="license.yes" label="1">Yes</n-radio>
                    <n-radio v-model="license.yes" label="2">No</n-radio>
                  </div>
                </div>
                <div class="form-group col-md-6" id="filesList">
                  <label class="d-flex">Upload CV (Required)</label>
                  <div class="d-flex">
                    <div class="col-md-3 upload-button">
                      <label class="btn btn-default btn-upload">
                        Upload
                        <input
                          type="file"
                          hidden
                          @change="fileChangedHandler"
                          :disabled="isUploading || isVideoUploading"
                          accept="application/pdf"
                        />
                      </label>
                    </div>
                    <div class="col-md-5 col-lg-6 col-xl-6 ml-md-n12 mr-lg-12">
                      <p
                        style="color: #f96332"
                        v-if="!isUploading && !uploaded"
                      >
                        Please upload cv...
                      </p>
                      <img
                        v-if="isUploading"
                        v-lazy="'img/Ellipsis-3s-128px.svg'"
                        alt="Rounded Image"
                        style="width: 30px; height: 30px"
                      />
                      <p v-if="uploaded" class="text-success">
                        {{ selectedFile.name }}
                      </p>
                    </div>
                  </div>
                </div>
                <!-- added for netlify form submissions, not visible in ui -->
                <div
                  style="position: absolute; z-index: -1; top: 0; opacity: 0"
                >
                  <fg-input v-model="fullName" name="name" />
                  <fg-input v-model="message" name="message" />
                  <fg-input v-model="subject" name="subject" />
                </div>
                <!-- end -->
                <div class="form-group col-md-6" id="filesList">
                  <label class="d-flex">Upload Video (Optional)</label>
                  <div class="d-flex">
                    <div class="col-md-3 upload-button">
                      <label class="btn btn-default btn-upload">
                        Upload
                        <input
                          type="file"
                          hidden
                          @change="videoChangedHandler"
                          accept="video/mp4,video/x-m4v,video/*"
                          :disabled="isUploading || isVideoUploading"
                        />
                      </label>
                    </div>
                    <div class="col-md-5 col-lg-6 col-xl-6 ml-md-n12 mr-lg-12">
                      <p
                        style="color: #f96332"
                        v-if="!isVideoUploading && !videoUploaded"
                      >
                        Upload video...
                      </p>
                      <img
                        v-if="isVideoUploading"
                        v-lazy="'img/Ellipsis-3s-128px.svg'"
                        alt="Rounded Image"
                        style="width: 30px; height: 30px"
                      />
                      <p v-if="videoUploaded" class="text-success">
                        {{ selectedVideoFile.name }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="btn-round btn btn-primary"
                rounded
                :disabled="isUploading || isVideoUploading"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import JobInfoHeader from "@/pages/Recruitment/JobInfoHeader.vue";
import sizeMixin from "@/plugins/sizeMixin.js";
import {
  Card,
  Tabs,
  TabPane,
  Button,
  FormGroupInput,
  Radio,
} from "@/components";
import { DatePicker, Icon } from "element-ui";
import SendEmailMixin from "@/mixins/SendEmailMixin";
import moment from "moment";

export default {
  name: "JobInfo",
  bodyClass: "profile-page",
  components: {
    [Radio.name]: Radio,
    [DatePicker.name]: DatePicker,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    JobInfoHeader,
  },
  mixins: [SendEmailMixin, sizeMixin],
  computed: {
    ...mapGetters(["allJobs", "assets"]),
    job() {
      let job = this.allJobs.filter(
        (item) => item.id === this.$route.params.id
      );
      return job[0];
    },
    computedAsset() {
      return this.asset;
    },
    fullName() {
      return `${this.form.firstName} ${this.form.lastName}`;
    },
    message() {
      return `${this.form.firstName} ${this.form.lastName} (${
        this.form.gender
      }) from ${this.form.country}, born in ${this.formatDate(
        this.pickers.datePicker
      )} just applied for the ${this.job.school} teaching job`;
    },
    subject() {
      return `New Job Application: ${this.form.firstName} ${this.form.lastName} - ${this.job.school}`;
    },
  },
  data: () => ({
    currentJob: {},
    selectedFile: {},
    selectedVideoFile: {},
    up: {},
    files: null,
    id: "",
    submitClicked: false,
    pickers: {
      datePicker: "",
    },
    isUploading: false,
    uploaded: false,
    isVideoUploading: false,
    videoUploaded: false,
    license: {
      yes: "2",
    },
    datePickerOptions: {
      disabledDate(date) {
        return date > new Date();
      },
    },
    sectionStyleOverride: {
      padding: "20px 0",
    },
    formContainer: {
      marginTop: "20px",
      marginBottom: "60px"
    },
    form: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      description: "",
      subject: "",
      gender: "Male",
      country: "Afghanistan",
    },
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegowina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo, the Democratic Republic of the",
      "Cook Islands",
      "Costa Rica",
      "Cote d'Ivoire",
      "Croatia (Hrvatska)",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands (Malvinas)",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "France Metropolitan",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard and Mc Donald Islands",
      "Holy See (Vatican City State)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea, Democratic People's Republic of",
      "Korea, Republic of",
      "Kuwait",
      "Kyrgyzstan",
      "Lao, People's Democratic Republic",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libyan Arab Jamahiriya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia, The Former Yugoslav Republic of",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia, Federated States of",
      "Moldova, Republic of",
      "Monaco",
      "Mongolia",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia (Slovak Republic)",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "Spain",
      "Sri Lanka",
      "St. Helena",
      "St. Pierre and Miquelon",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen Islands",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "United States Minor Outlying Islands",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna Islands",
      "Western Sahara",
      "Yemen",
      "Yugoslavia",
      "Zambia",
      "Zimbabwe",
    ],
  }),
  methods: {
    ...mapActions(["fetchJobs"]),
    async handleDownload() {
      const fullName = `${this.form.firstName} ${this.form.lastName}`;
      this.selectedFile.fullName = fullName;
      this.selectedFile.entryId = this.currentJob.id;
      this.selectedFile.description = this.description;
      this.$store.dispatch("uploadCv", this.selectedFile).then(() => {
        this.isUploading = false;
        this.uploaded = true;
      });
    },
    handleSubmit(e) {
      this.submitClicked = true;
      this.form.name = `${this.form.firstName} ${this.form.lastName}`;
      this.form.message = this.message;
      this.form.subject = this.subject;
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.uploaded) {
            this.handleNetlifyForm();
            this.applicationCompleted();
          } else {
            this.uploadRequired();
          }
        }
      });
    },
    handleNetlifyForm() {
      fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "job-applications",
          ...this.form,
        }),
      });
    },
    applicationCompleted() {
      this.handleEmailNotification();
      this.$swal({
        title: "Application sent",
        text: "You will recieve email for confirmation",
        icon: "success",
        confirmButtonText: "Okay",
      }).then((result) => {
        if (result.value) {
          this.$router.push({ name: "JobsMain" });
        }
      });
    },
    handleTwoWeeksLater() {
      return moment(new Date()).add(2, "weeks").format("DD MMM YYYY");
    },
    handleEmailNotification() {
      const email = {};
      email.message = `<div> <div> Dear ${
        this.fullName
      } </div> <div> <p> Thank you for your interest in the full time teaching position at ${
        this.job.school
      }.We have received your application for the position of a ${this.handleTime(
        this.job.fullTime
      )} teacher. We are currently in the middle of our recruitment process, and initial screening should be completed by ${this.handleTwoWeeksLater()}. You may expect another response around this time. </p> </div> <div> <p> In the meantime, you can learn more about Teazeap by following us on <a href="https://www.facebook.com/teazeap" target="_blank"> Facebook </a>, <a href="https://www.instagram.com/teazeap/" target="_blank"> Instagram </a> and our <a href='https://www.teazeap.com/'>company website</a> for the latest updates.<br /> You may contact me at <a href='mailto:teazeaprecruitingagency@gmail.com' >teazeaprecruitingagency@gmail.com </a >if you have any questions regarding your application. </p> </div> </div>`;
      email.subject = "Application Received Email";
      email.address = this.form.email;
      email.regards = "Sincerely,";
      this.sendEmail(email);
    },
    uploadRequired() {
      this.$swal({
        title: "Application Error",
        text: "Please upload your latest CV",
        icon: "error",
        confirmButtonText: "Okay",
      });
    },
    fileChangedHandler(e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.selectedFile = event.target.files[0];
          this.isUploading = true;
          this.description = this.formatDescription();
          this.handleDownload();
        }
      });
    },
    videoChangedHandler(e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.selectedVideoFile = event.target.files[0];
          this.isVideoUploading = true;
          this.description = this.formatDescription();
          this.handleVideoUpload();
        }
      });
    },
    async handleVideoUpload() {
      const fullName = `${this.form.firstName} ${this.form.lastName}`;
      this.selectedVideoFile.fullName = fullName;
      this.selectedVideoFile.entryId = this.currentJob.id;
      this.selectedVideoFile.description = this.description;
      this.$store.dispatch("uploadVideo", this.selectedVideoFile).then(() => {
        this.isVideoUploading = false;
        this.videoUploaded = true;
      });
    },
    formatDescription() {
      return JSON.stringify({
        fullName: `${this.form.firstName} ${this.form.lastName}`,
        country: `${this.form.country}`,
        email: `${this.form.email}`,
        gender: `${this.form.gender}`,
        dob: `${this.pickers.datePicker}`,
        lisence: `${this.license === "1" ? "yes" : "no"}`,
      });
    },
    handleTime(fullTime) {
      return fullTime ? "Full Time" : "Sub";
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    formatDate(date) {
      if (date) {
        date = moment(new Date(date)).format("DD MMMM YYYY");
      }
      return date;
    },
  },
  async created() {
    await this.fetchJobs();
    let job = this.allJobs.filter((item) => item.id === this.$route.params.id);
    if (job.length == 0) this.$router.push({ name: "JobsMain" });
    this.currentJob = job[0];
  },
};
</script>
