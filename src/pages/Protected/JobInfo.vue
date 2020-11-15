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
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container-fluid text-center">
        <div class="button-container">
          <router-link :to="{name: 'JobsAdminMain'}" tag="button" class="btn btn-primary btn-round btn-lg">Back To Jobs</router-link>
        </div>
           <h2 class="title">Applications</h2>
         <div class="card-deck row no-gutters">
            <div class="card col-12 col-xs-12  col-sm-12 col-md-12 col-lg-4 col-xl-6" v-for="(applicant, index) in resumes" :key="index">
              <div class="card-body">
                <h5 class="card-title">{{ applicant.fields.title  }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ applicant.fields.title  }}</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Download CV</a>
              </div>
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
    resumes () {
      let job = this.allJobs.filter(item => item.id === this.$route.params.id)
      console.log(job[0].resumes)
      return job[0].resumes
    },
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
      "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Eswation", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
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
    inputUploader (up) {
    },
    hadleSubmit (e) {
      e.preventDefault()
      this.submitClicked = true
      this.$validator.validateAll()
        .then((result) => {
          if(result) {
            if (this.uploaded) {
              this.applicationCompleted()
            } else {
              this.uploadRequired()
            }
          }
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
          this.description = 
            `
              Full Name : ${this.form.firstName} ${this.form.lastName}
              Country   : ${this.form.country}
              Email     : ${this.form.email}
              Gender    : ${this.form.gender}
              D.O.B     : ${this.pickers.datePicker}
              Lisence   : ${this.license === '1' ? 'yes' : 'no'}
            `
            this.handleDownload()
        }
      })
      
    },
  },
  async created() {
    await this.fetchJobs()
    let job = this.allJobs.filter(item => item.id === this.$route.params.id)
    this.currentJob = job[0]
  }
};
</script>
