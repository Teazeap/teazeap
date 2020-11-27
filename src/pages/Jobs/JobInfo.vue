<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        :style="`background-image: url(${job.imageUrl[0]})`"
      >
      </parallax>
      <div class="container">
        <h1 class="title">{{job.school}}</h1>
        <div class="content">
            <div class="social-description">
              <i class="now-ui-icons location_pin"></i>
              <p>{{ job.city }}</p>
            </div>
            <div class="social-description">
              <img src="img/calendar-clock.png" style="width:12%; height: 12%"/>
              <p>{{ handleTime(job.fullTime) }}</p>
            </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container-fluid text-center">
        <div class="button-container">
          <router-link :to="{name: 'JobsMain'}" tag="button" class="btn btn-primary btn-round btn-lg">Back To Jobs</router-link>
        </div>
         <div class="card-deck row-fluid no-gutters">
            <div class="card col-12 col-xs-12  col-sm-12 col-md-12 col-lg-4 col-xl-6">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">Introduction</h5>
                <p class="card-text text-left">{{ job.description}}</p>
              </div>
            </div>
            <div class="card col-12 col-xs-12  col-sm-12 col-md-12 col-lg-4 col-xl-6">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">Requirements</h5>
               <ul class="text-left">
                <li v-for="(item, index) in job.requirements" :key="index" >{{ item }}</li>
              </ul>
              </div>
            </div>
            <div class="card col-12 col-xs-12  col-sm-12 col-md-12 col-lg-4 col-xl-6">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">What We Offer</h5>
               <ul class="text-left">
                <li v-for="(item, index) in job.benefits" :key="index" >{{ item }}</li>
              </ul>
              </div>
            </div>
            <div class="card col-12 col-xs-12  col-sm-12 col-md-12 col-lg-4 col-xl-6">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">Schedule</h5>
               <ul class="text-left">
                <li v-for="(item, index) in job.schedule" :key="index" >{{ `${item.Day} : ${item.Time} ` }}</li>
              </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div>
        <div class="container-fluid ">
          <div class="row-fluid card-deck no-gutters">
            <div class="col-md-12 col-lg-6 ml-auto col-xl-6 mr-auto">
              <p class="card-title font-weight-bold text-center">Apply</p>
              <!-- Nav tabs -->
              <form @submit.prevent="handleSubmit" name="job-applications" method="POST" data-netlify="true" netlify-honeybot="bot-field" class="needs-validation" novalidate>
                <input type="hidden" name="bot-field" value="job-applications">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Name</label>
                    <fg-input 
                      type="text"
                      :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                      placeholder="name..."
                      v-model="form.firstName"
                      v-validate="'required'"
                      name="name"
                    >
                    </fg-input>
                    <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Surname</label>
                    <fg-input 
                      type="text"
                      :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                      placeholder="surame..."
                      v-model="form.lastName"
                      v-validate="'required'"
                      name="surname"
                    >
                    </fg-input>
                    <span v-show="errors.has('surname')" class="text-danger">{{ errors.first('surname') }}</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Email</label>
                    <fg-input 
                      type="email"
                      :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                      class="input-sm"
                      placeholder="Email..."
                      v-model="form.email"
                      v-validate="'required|email'"
                      name="email"
                    >
                    </fg-input>
                    <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Gender</label>
                    <select id="inputState" class="custom-select select-rounded" v-model="form.gender">
                      <option selected>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Nationality</label>
                    <select id="inputState" class="custom-select select-rounded" v-model="form.country">
                        <option v-for="(country,index) in countries" :key="index">{{ country }}</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label>Date of Birth</label>
                    <div class="datepicker-container">
                      <fg-input
                        :class="`${(pickers.datePicker === ''&& submitClicked) ? 'has-danger' : ''}`"
                      >
                        <el-date-picker
                          type="date"
                          popper-class="date-picker date-picker-primary"
                          placeholder="Date Time Picker"
                          v-model="pickers.datePicker"
                          v-validate="'required'"
                          name="D.O.B"
                        >
                        </el-date-picker>
                      </fg-input>
                      <span v-show="errors.has('D.O.B')" class="text-danger">{{ errors.first('D.O.B') }}</span>
                    </div>
                  </div>
                  <div class="form-group col-md-12" id="filesList">
                    <label class="d-flex">Do you have a teaching license or sub teaching license issued by state government?
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
                                Upload <input type="file" hidden @change="fileChangedHandler" :disabled="isUploading || isVideoUploading" accept="application/pdf">
                            </label>
                        </div>
                        <div class="col-md-5 col-lg-6 col-xl-6 ml-md-n12 mr-lg-12">
                          <p style="color: #f96332" v-if="!isUploading && !uploaded">
                            Please upload cv...
                          </p>
                          <img  v-if="isUploading" v-lazy="'img/Ellipsis-3s-128px.svg'" alt="Rounded Image" style="width:30px; height: 30px" />
                          <p v-if="uploaded" class="text-success">{{selectedFile.name }}</p>
                        </div>
                      </div>
                  </div>
                  <div class="form-group col-md-6" id="filesList">
                    <label class="d-flex">Upload Video (Optional)</label>
                    <div class="d-flex">
                        <div class="col-md-3 upload-button">
                            <label class="btn btn-default btn-upload">
                                Upload <input type="file"  hidden @change="videoChangedHandler" accept="video/mp4,video/x-m4v,video/*" :disabled="isUploading || isVideoUploading" >
                            </label>
                        </div>
                        <div class="col-md-5 col-lg-6 col-xl-6 ml-md-n12 mr-lg-12">
                          <p style="color: #f96332" v-if="!isVideoUploading && !videoUploaded">
                            Upload video...
                          </p>
                          <img  v-if="isVideoUploading" v-lazy="'img/Ellipsis-3s-128px.svg'" alt="Rounded Image" style="width:30px; height: 30px" />
                          <p v-if="videoUploaded" class="text-success">{{selectedVideoFile.name }}</p>
                        </div>
                      </div>
                  </div>
                </div>
                <n-button type="submit" v-if="false"  round class="btn btn-primary" :disabled="isUploading || isVideoUploading">
                  Submit
                </n-button>
                <button class="btn-round btn btn-primary" rounded :disabled="isUploading || isVideoUploading" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Card, Tabs, TabPane, Button, FormGroupInput, Radio } from '@/components';
import { DatePicker, Icon } from 'element-ui';

export default {
  name: 'JobInfo',
  bodyClass: 'profile-page',
   components: {
    [Radio.name]: Radio,
    [DatePicker.name]: DatePicker,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  computed: {
    ...mapGetters(['allJobs', 'assets']),
    job () {
      let job = this.allJobs.filter(item => item.id === this.$route.params.id)
      return job[0]
    },
    computedAsset () {
      return this.asset
    }
  },
  data: () => ({
    currentJob: {},
    selectedFile: {},
    selectedVideoFile: {},
    up: {},
    files: null,
    id: '',
    submitClicked: false,
    pickers: {
      datePicker: ''
    },
    isUploading: false,
    uploaded: false,
    isVideoUploading: false,
    videoUploaded: false,
    license: {
      yes: '2'
    },
    form: {
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        gender: 'Male',
        country: 'Afghanistan'
      },
    countries: [
      "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Eswatini", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
    ]
  }),
  methods: {
    ...mapActions(['fetchJobs']),
    async handleDownload () {
      const fullName = `${this.form.firstName} ${this.form.lastName}`
      this.selectedFile.fullName = fullName
      this.selectedFile.entryId = this.currentJob.id
      this.selectedFile.description = this.description
      this.$store.dispatch('uploadCv', this.selectedFile).then( () => {
        this.isUploading = false
        this.uploaded = true
      })
    },
    handleSubmit (e) {
      this.submitClicked = true
      this.$validator.validateAll()
        .then((result) => {
          if(result) {
            if (this.uploaded) {
              this.handleNetlifyForm()
              this.applicationCompleted()
            } else {
              this.uploadRequired()
            }
          }
        })
    },
    handleNetlifyForm () {
      fetch('/', {
      method: 'post',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        'form-name': 'job-applications',
        ...this.form
        })
      })
    },
    applicationCompleted () {
      this.$swal({
        title: 'Application sent',
        text: 'You will recieve email for confirmation',
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then((result) => {
        if(result.value) {
          this.$router.push({name: 'JobsMain'})
        }
      })
    },
    uploadRequired () {
      this.$swal({
        title: 'Application Error',
        text: 'Please upload your latest CV',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    },
    fileChangedHandler (e) {
      this.$validator.validateAll()
      .then ((result) => {
        if (result) {
          this.selectedFile = event.target.files[0]
          this.isUploading = true
          this.description =  this.formatDescription()
          this.handleDownload()
        }
      })
    },
    videoChangedHandler (e) {
      this.$validator.validateAll()
      .then ((result) => {
        if (result) {
          this.selectedVideoFile = event.target.files[0]
          this.isVideoUploading = true
          this.description =  this.formatDescription()
          this.handleVideoUpload()
        }
      })
    },
    async handleVideoUpload () {
      const fullName = `${this.form.firstName} ${this.form.lastName}`
      this.selectedVideoFile.fullName = fullName
      this.selectedVideoFile.entryId = this.currentJob.id
      this.selectedVideoFile.description = this.description
      this.$store.dispatch('uploadVideo', this.selectedVideoFile).then( () => {
        this.isVideoUploading = false
        this.videoUploaded = true
      })
    },
    formatDescription () {
      return JSON.stringify({
              fullName : `${this.form.firstName} ${this.form.lastName}`,
              country   : `${this.form.country}`,
              email     : `${this.form.email}`,
              gender    : `${this.form.gender}`,
              dob     : `${this.pickers.datePicker}`,
              lisence   : `${this.license === '1' ? 'yes' : 'no'}`,
          })
    },
    handleTime (fullTime) {
      return fullTime? 'Full Time' : 'Sub'
    },
    encode (data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
    },
  },
  async created() {
    await this.fetchJobs()
    let job = this.allJobs.filter(item => item.id === this.$route.params.id)
    this.currentJob = job[0]
  }
};
</script>
