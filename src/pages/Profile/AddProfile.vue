<template>
  <div class="container-fluid">
    <div style="textAlign: center">
      <h2 class="title">Want to join our communtiy of teachers?</h2>
      <p class="description">
        Join a global community of over 200,000 TEFL teachers working throughout
        the world!
      </p>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-12 col-lg-8 col-xl-6 align-self-center">
        <!-- Nav tabs -->
        <form
          @submit.prevent="handleSubmit"
          name="profile-applications"
          method="POST"
          data-netlify="true"
          netlify-honeybot="bot-field"
          class="needs-validation"
          novalidate
        >
          <input type="hidden" name="bot-field" value="profile-applications" />
          <div class="form-row">
            <div class="form-group col-md-6">
              <!-- name -->
              <label>Name</label>
              <fg-input
                type="text"
                :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                placeholder="Name..."
                v-model="form.firstName"
                v-validate="'required'"
                name="name"
              >
              </fg-input>
              <span v-show="errors.has('name')" class="text-danger">{{
                errors.first("name")
              }}</span>
            </div>
            <!-- surname -->
            <div class="form-group col-md-6">
              <label>Surname</label>
              <fg-input
                type="text"
                :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                placeholder="Surname..."
                v-model="form.lastName"
                v-validate="'required'"
                name="surname"
              >
              </fg-input>
              <span v-show="errors.has('surname')" class="text-danger">{{
                errors.first("surname")
              }}</span>
            </div>
            <!-- email -->
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
              <span v-show="errors.has('email')" class="text-danger">{{
                errors.first("email")
              }}</span>
            </div>
            <!-- Gender -->
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
            <!-- Description -->
            <div class="form-group col-md-6">
              <label>Description</label>
              <textarea
                :class="
                  `form-control desc-textarea ${
                    errors.has('name') ? 'has-danger' : ''
                  }`
                "
                name="description"
                rows="4"
                cols="80"
                v-model="form.description"
                v-validate="'required'"
                placeholder="Type a description..."
              ></textarea>
              <span v-show="errors.has('description')" class="text-danger">{{
                errors.first("description")
              }}</span>
            </div>
            <!-- Teaching Experience -->
            <div class="form-group col-md-3">
              <label>Teaching Experience</label>
              <fg-input
                type="number"
                min="0"
                :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                class="input-sm"
                placeholder="Teaching Experience..."
                v-model="form.teachingExperience"
                v-validate="'required'"
                name="teachingExperience"
              >
              </fg-input>
              <span
                v-show="errors.has('teachingExperience')"
                class="text-danger"
                >The Teaching Experience field is required.</span
              >
            </div>
            <!-- Years Living in Taiwan -->
            <div class="form-group col-md-3">
              <label
                >Years In Taiwan <country-flag country="tw" size="small"
              /></label>
              <fg-input
                type="number"
                min="0"
                :class="`input-sm ${errors.has('name') ? 'has-danger' : ''}`"
                class="input-sm"
                placeholder="Years In Taiwan..."
                v-model="form.yearsInTaiwan"
                v-validate="'required'"
                name="yearsInTaiwan"
              >
              </fg-input>
              <span v-show="errors.has('yearsInTaiwan')" class="text-danger">
                The Years In Taiwan field is required.</span
              >
            </div>
            <!-- Nationality -->
            <div class="form-group col-md-6">
              <label
                >Nationality
                <country-flag :country="countryInfo['alpha-2']" size="small"
              /></label>
              <select
                id="inputState"
                class="custom-select select-rounded"
                v-model="form.country"
              >
                <option v-for="(country, index) in countries" :key="index">{{
                  country.name
                }}</option>
              </select>
            </div>
            <!-- Date of Birth -->
            <div class="form-group col-md-6">
              <label>Date of Birth</label>
              <div class="datepicker-container">
                <fg-input
                  :class="
                    `${
                      form.birthDate === '' && submitClicked ? 'has-danger' : ''
                    }`
                  "
                >
                  <el-date-picker
                    type="date"
                    popper-class="date-picker date-picker-primary"
                    placeholder="Date Time Picker"
                    v-model="form.birthDate"
                    v-validate="'required'"
                    name="birthDate"
                  >
                  </el-date-picker>
                </fg-input>
                <span v-show="errors.has('birthDate')" class="text-danger">{{
                  errors.first("birthDate")
                }}</span>
              </div>
            </div>
            <div class="form-group col-md-12" id="filesList">
              <label class="d-flex"
                >Do you have a teaching license or sub teaching license issued
                by state government?
              </label>
              <div class="d-flex">
                <n-radio v-model="form.hasCertificate" label="true"
                  >Yes</n-radio
                >
                <n-radio v-model="form.hasCertificate" label="false"
                  >No</n-radio
                >
              </div>
            </div>

            <!-- CV -->
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
                      :disabled="isUploading || isProfilePictureUploading"
                      accept="application/pdf"
                    />
                  </label>
                </div>
                <div class="col-md-5 col-lg-6 col-xl-6 ml-md-n12 mr-lg-12">
                  <p style="color: #f96332" v-if="!isUploading && !uploaded">
                    Please upload cv...
                  </p>
                  <img
                    v-if="isUploading"
                    v-lazy="'img/Ellipsis-3s-128px.svg'"
                    alt="Rounded Image"
                    style="width:30px; height: 30px"
                  />
                  <p v-if="uploaded" class="text-success">
                    {{ selectedFile.name }}
                  </p>
                </div>
              </div>
            </div>
            <!-- profile picture -->
            <div class="form-group col-md-6" id="filesList">
              <label class="d-flex">Upload Profile Picture</label>
              <div class="d-flex">
                <div class="col-md-3 upload-button">
                  <label class="btn btn-default btn-upload">
                    Upload
                    <input
                      type="file"
                      hidden
                      @change="profilePictureChangedHandler"
                      accept="image/png, image/gif, image/jpeg"
                      :disabled="isUploading || isProfilePictureUploading"
                    />
                  </label>
                </div>
                <div class="col-md-5 col-lg-6 col-xl-6 ml-md-n12 mr-lg-12">
                  <p
                    style="color: #f96332"
                    v-if="!isProfilePictureUploading && !profilePictureUploaded"
                  >
                    Upload profile picture...
                  </p>
                  <img
                    v-if="isProfilePictureUploading"
                    v-lazy="'img/Ellipsis-3s-128px.svg'"
                    alt="Rounded Image"
                    style="width:30px; height: 30px"
                  />
                  <p v-if="profilePictureUploaded" class="text-success">
                    {{ selectedProfilePictureFile.name }}
                  </p>
                </div>
              </div>
            </div>
            <!-- added for netlify form submissions, not visible in ui -->
            <div style="position: absolute;z-index: -1;top: 0; opacity: 0">
              <fg-input v-model="fullName" name="name" />
              <fg-input v-model="message" name="message" />
              <fg-input v-model="subject" name="subject" />
            </div>
            <!-- end -->
          </div>
          <button
            class="btn-round btn btn-primary"
            rounded
            :disabled="isUploading || isProfilePictureUploading"
          >
            Submit
          </button>
          <img
            v-if="isProfileAssetUploading"
            v-lazy="'img/Ellipsis-3s-128px.svg'"
            alt="Rounded Image"
            style="width:30px; height: 30px"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Button, FormGroupInput, Radio } from "@/components";
import { DatePicker, Icon } from "element-ui";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddProfile",
  bodyClass: "profile-page",
  components: {
    [Radio.name]: Radio,
    [DatePicker.name]: DatePicker,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  computed: {
    ...mapGetters(["allJobs", "assets"]),
    job() {
      let job = this.allJobs;
      return job[0];
    },
    computedAsset() {
      return this.asset;
    },
    fullName() {
      return `${this.form.firstName} ${this.form.lastName}`;
    },
    message() {
      return `${this.fullName} (${
        this.form.gender
      }) (${this.form.email}) from ${this.form.country}, born in ${this.formatDate(
        this.form.birthDate
      )} just applied for a teacher's profile`;
    },
    subject() {
      return `New Profile Application: ${this.fullName}`;
    },
    countryInfo() {
      return this.countries.find(c => c.name == this.form.country);
    }
  },
  data: () => ({
    currentJob: {},
    selectedFile: {},
    selectedProfilePictureFile: {},
    up: {},
    files: null,
    id: "",
    submitClicked: false,
    isUploading: false,
    uploaded: false,
    isProfilePictureUploading: false,
    profilePictureUploaded: false,
    isProfileAssetUploading: false,
    form: {
      firstName: "",
      lastName: "",
      birthDate: "",
      email: "",
      message: "",
      subject: "",
      gender: "Male",
      country: "Afghanistan",
      teachingExperience: null,
      yearsInTaiwan: null,
      description: "",
      uploadedCvAsset: {},
      uploadedProfilePictureAsset: {},
      hasCertificate: "false"
    },
    countries: [
      {
        name: "Afghanistan",
        "alpha-2": "af"
      },
      {
        name: "Åland Islands",
        "alpha-2": "ax"
      },
      {
        name: "Albania",
        "alpha-2": "al"
      },
      {
        name: "Algeria",
        "alpha-2": "dz"
      },
      {
        name: "American Samoa",
        "alpha-2": "as"
      },
      {
        name: "Andorra",
        "alpha-2": "ad"
      },
      {
        name: "Angola",
        "alpha-2": "ao"
      },
      {
        name: "Anguilla",
        "alpha-2": "ai"
      },
      {
        name: "Antarctica",
        "alpha-2": "aq"
      },
      {
        name: "Antigua and Barbuda",
        "alpha-2": "ag"
      },
      {
        name: "Argentina",
        "alpha-2": "ar"
      },
      {
        name: "Armenia",
        "alpha-2": "am"
      },
      {
        name: "Aruba",
        "alpha-2": "aw"
      },
      {
        name: "Australia",
        "alpha-2": "au"
      },
      {
        name: "Austria",
        "alpha-2": "at"
      },
      {
        name: "Azerbaijan",
        "alpha-2": "az"
      },
      {
        name: "Bahamas",
        "alpha-2": "bs"
      },
      {
        name: "Bahrain",
        "alpha-2": "bh"
      },
      {
        name: "Bangladesh",
        "alpha-2": "bd"
      },
      {
        name: "Barbados",
        "alpha-2": "bb"
      },
      {
        name: "Belarus",
        "alpha-2": "by"
      },
      {
        name: "Belgium",
        "alpha-2": "be"
      },
      {
        name: "Belize",
        "alpha-2": "bz"
      },
      {
        name: "Benin",
        "alpha-2": "bj"
      },
      {
        name: "Bermuda",
        "alpha-2": "bm"
      },
      {
        name: "Bhutan",
        "alpha-2": "bt"
      },
      {
        name: "Bolivia (Plurinational State of)",
        "alpha-2": "bo"
      },
      {
        name: "Bonaire, Sint Eustatius and Saba",
        "alpha-2": "bq"
      },
      {
        name: "Bosnia and Herzegovina",
        "alpha-2": "ba"
      },
      {
        name: "Botswana",
        "alpha-2": "bw"
      },
      {
        name: "Bouvet Island",
        "alpha-2": "bv"
      },
      {
        name: "Brazil",
        "alpha-2": "br"
      },
      {
        name: "Virgin Islands (British)",
        "alpha-2": "vg"
      },
      {
        name: "British Indian Ocean Territory",
        "alpha-2": "io"
      },
      {
        name: "Brunei Darussalam",
        "alpha-2": "bn"
      },
      {
        name: "Bulgaria",
        "alpha-2": "bg"
      },
      {
        name: "Burkina Faso",
        "alpha-2": "bf"
      },
      {
        name: "Burundi",
        "alpha-2": "bi"
      },
      {
        name: "Cambodia",
        "alpha-2": "kh"
      },
      {
        name: "Cameroon",
        "alpha-2": "cm"
      },
      {
        name: "Canada",
        "alpha-2": "ca"
      },
      {
        name: "Cabo Verde",
        "alpha-2": "cv"
      },
      {
        name: "Cayman Islands",
        "alpha-2": "ky"
      },
      {
        name: "Central African Republic",
        "alpha-2": "cf"
      },
      {
        name: "Chad",
        "alpha-2": "td"
      },
      {
        name: "Chile",
        "alpha-2": "cl"
      },
      {
        name: "China",
        "alpha-2": "cn"
      },
      {
        name: "Hong Kong",
        "alpha-2": "hk"
      },
      {
        name: "Macao",
        "alpha-2": "mo"
      },
      {
        name: "Christmas Island",
        "alpha-2": "cx"
      },
      {
        name: "Cocos (Keeling) Islands",
        "alpha-2": "cc"
      },
      {
        name: "Colombia",
        "alpha-2": "co"
      },
      {
        name: "Comoros",
        "alpha-2": "km"
      },
      {
        name: "Congo",
        "alpha-2": "cg"
      },
      {
        name: "Congo, Democratic Republic of the",
        "alpha-2": "cd"
      },
      {
        name: "Cook Islands",
        "alpha-2": "ck"
      },
      {
        name: "Costa Rica",
        "alpha-2": "cr"
      },
      {
        name: "Côte d'Ivoire",
        "alpha-2": "ci"
      },
      {
        name: "Croatia",
        "alpha-2": "hr"
      },
      {
        name: "Cuba",
        "alpha-2": "cu"
      },
      {
        name: "Curaçao",
        "alpha-2": "cw"
      },
      {
        name: "Cyprus",
        "alpha-2": "cy"
      },
      {
        name: "Czechia",
        "alpha-2": "cz"
      },
      {
        name: "Denmark",
        "alpha-2": "dk"
      },
      {
        name: "Djibouti",
        "alpha-2": "dj"
      },
      {
        name: "Dominica",
        "alpha-2": "dm"
      },
      {
        name: "Dominican Republic",
        "alpha-2": "do"
      },
      {
        name: "Ecuador",
        "alpha-2": "ec"
      },
      {
        name: "Egypt",
        "alpha-2": "eg"
      },
      {
        name: "El Salvador",
        "alpha-2": "sv"
      },
      {
        name: "Equatorial Guinea",
        "alpha-2": "gq"
      },
      {
        name: "Eritrea",
        "alpha-2": "er"
      },
      {
        name: "Estonia",
        "alpha-2": "ee"
      },
      {
        name: "Ethiopia",
        "alpha-2": "et"
      },
      {
        name: "Falkland Islands (Malvinas)",
        "alpha-2": "fk"
      },
      {
        name: "Faroe Islands",
        "alpha-2": "fo"
      },
      {
        name: "Fiji",
        "alpha-2": "fj"
      },
      {
        name: "Finland",
        "alpha-2": "fi"
      },
      {
        name: "France",
        "alpha-2": "fr"
      },
      {
        name: "French Guiana",
        "alpha-2": "gf"
      },
      {
        name: "French Polynesia",
        "alpha-2": "pf"
      },
      {
        name: "French Southern Territories",
        "alpha-2": "tf"
      },
      {
        name: "Gabon",
        "alpha-2": "ga"
      },
      {
        name: "Gambia",
        "alpha-2": "gm"
      },
      {
        name: "Georgia",
        "alpha-2": "ge"
      },
      {
        name: "Germany",
        "alpha-2": "de"
      },
      {
        name: "Ghana",
        "alpha-2": "gh"
      },
      {
        name: "Gibraltar",
        "alpha-2": "gi"
      },
      {
        name: "Greece",
        "alpha-2": "gr"
      },
      {
        name: "Greenland",
        "alpha-2": "gl"
      },
      {
        name: "Grenada",
        "alpha-2": "gd"
      },
      {
        name: "Guadeloupe",
        "alpha-2": "gp"
      },
      {
        name: "Guam",
        "alpha-2": "gu"
      },
      {
        name: "Guatemala",
        "alpha-2": "gt"
      },
      {
        name: "Guernsey",
        "alpha-2": "gg"
      },
      {
        name: "Guinea",
        "alpha-2": "gn"
      },
      {
        name: "Guinea-Bissau",
        "alpha-2": "gw"
      },
      {
        name: "Guyana",
        "alpha-2": "gy"
      },
      {
        name: "Haiti",
        "alpha-2": "ht"
      },
      {
        name: "Heard Island and McDonald Islands",
        "alpha-2": "hm"
      },
      {
        name: "Holy See",
        "alpha-2": "va"
      },
      {
        name: "Honduras",
        "alpha-2": "hn"
      },
      {
        name: "Hungary",
        "alpha-2": "hu"
      },
      {
        name: "Iceland",
        "alpha-2": "is"
      },
      {
        name: "India",
        "alpha-2": "in"
      },
      {
        name: "Indonesia",
        "alpha-2": "id"
      },
      {
        name: "Iran (Islamic Republic of)",
        "alpha-2": "ir"
      },
      {
        name: "Iraq",
        "alpha-2": "iq"
      },
      {
        name: "Ireland",
        "alpha-2": "ie"
      },
      {
        name: "Isle of Man",
        "alpha-2": "im"
      },
      {
        name: "Israel",
        "alpha-2": "il"
      },
      {
        name: "Italy",
        "alpha-2": "it"
      },
      {
        name: "Jamaica",
        "alpha-2": "jm"
      },
      {
        name: "Japan",
        "alpha-2": "jp"
      },
      {
        name: "Jersey",
        "alpha-2": "je"
      },
      {
        name: "Jordan",
        "alpha-2": "jo"
      },
      {
        name: "Kazakhstan",
        "alpha-2": "kz"
      },
      {
        name: "Kenya",
        "alpha-2": "ke"
      },
      {
        name: "Kiribati",
        "alpha-2": "ki"
      },
      {
        name: "Korea (Democratic People's Republic of)",
        "alpha-2": "kp"
      },
      {
        name: "Korea, Republic of",
        "alpha-2": "kr"
      },
      {
        name: "Kuwait",
        "alpha-2": "kw"
      },
      {
        name: "Kyrgyzstan",
        "alpha-2": "kg"
      },
      {
        name: "Lao People's Democratic Republic",
        "alpha-2": "la"
      },
      {
        name: "Latvia",
        "alpha-2": "lv"
      },
      {
        name: "Lebanon",
        "alpha-2": "lb"
      },
      {
        name: "Lesotho",
        "alpha-2": "ls"
      },
      {
        name: "Liberia",
        "alpha-2": "lr"
      },
      {
        name: "Libya",
        "alpha-2": "ly"
      },
      {
        name: "Liechtenstein",
        "alpha-2": "li"
      },
      {
        name: "Lithuania",
        "alpha-2": "lt"
      },
      {
        name: "Luxembourg",
        "alpha-2": "lu"
      },
      {
        name: "North Macedonia",
        "alpha-2": "mk"
      },
      {
        name: "Madagascar",
        "alpha-2": "mg"
      },
      {
        name: "Malawi",
        "alpha-2": "mw"
      },
      {
        name: "Malaysia",
        "alpha-2": "my"
      },
      {
        name: "Maldives",
        "alpha-2": "mv"
      },
      {
        name: "Mali",
        "alpha-2": "ml"
      },
      {
        name: "Malta",
        "alpha-2": "mt"
      },
      {
        name: "Marshall Islands",
        "alpha-2": "mh"
      },
      {
        name: "Martinique",
        "alpha-2": "mq"
      },
      {
        name: "Mauritania",
        "alpha-2": "mr"
      },
      {
        name: "Mauritius",
        "alpha-2": "mu"
      },
      {
        name: "Mayotte",
        "alpha-2": "yt"
      },
      {
        name: "Mexico",
        "alpha-2": "mx"
      },
      {
        name: "Micronesia (Federated States of)",
        "alpha-2": "fm"
      },
      {
        name: "Moldova, Republic of",
        "alpha-2": "md"
      },
      {
        name: "Monaco",
        "alpha-2": "mc"
      },
      {
        name: "Mongolia",
        "alpha-2": "mn"
      },
      {
        name: "Montenegro",
        "alpha-2": "me"
      },
      {
        name: "Montserrat",
        "alpha-2": "ms"
      },
      {
        name: "Morocco",
        "alpha-2": "ma"
      },
      {
        name: "Mozambique",
        "alpha-2": "mz"
      },
      {
        name: "Myanmar",
        "alpha-2": "mm"
      },
      {
        name: "Namibia",
        "alpha-2": "na"
      },
      {
        name: "Nauru",
        "alpha-2": "nr"
      },
      {
        name: "Nepal",
        "alpha-2": "np"
      },
      {
        name: "Netherlands",
        "alpha-2": "nl"
      },
      {
        name: "New Caledonia",
        "alpha-2": "nc"
      },
      {
        name: "New Zealand",
        "alpha-2": "nz"
      },
      {
        name: "Nicaragua",
        "alpha-2": "ni"
      },
      {
        name: "Niger",
        "alpha-2": "ne"
      },
      {
        name: "Nigeria",
        "alpha-2": "ng"
      },
      {
        name: "Niue",
        "alpha-2": "nu"
      },
      {
        name: "Norfolk Island",
        "alpha-2": "nf"
      },
      {
        name: "Northern Mariana Islands",
        "alpha-2": "mp"
      },
      {
        name: "Norway",
        "alpha-2": "no"
      },
      {
        name: "Oman",
        "alpha-2": "om"
      },
      {
        name: "Pakistan",
        "alpha-2": "pk"
      },
      {
        name: "Palau",
        "alpha-2": "pw"
      },
      {
        name: "Palestine, State of",
        "alpha-2": "ps"
      },
      {
        name: "Panama",
        "alpha-2": "pa"
      },
      {
        name: "Papua New Guinea",
        "alpha-2": "pg"
      },
      {
        name: "Paraguay",
        "alpha-2": "py"
      },
      {
        name: "Peru",
        "alpha-2": "pe"
      },
      {
        name: "Philippines",
        "alpha-2": "ph"
      },
      {
        name: "Pitcairn",
        "alpha-2": "pn"
      },
      {
        name: "Poland",
        "alpha-2": "pl"
      },
      {
        name: "Portugal",
        "alpha-2": "pt"
      },
      {
        name: "Puerto Rico",
        "alpha-2": "pr"
      },
      {
        name: "Qatar",
        "alpha-2": "qa"
      },
      {
        name: "Réunion",
        "alpha-2": "re"
      },
      {
        name: "Romania",
        "alpha-2": "ro"
      },
      {
        name: "Russian Federation",
        "alpha-2": "ru"
      },
      {
        name: "Rwanda",
        "alpha-2": "rw"
      },
      {
        name: "Saint Barthélemy",
        "alpha-2": "bl"
      },
      {
        name: "Saint Helena, Ascension and Tristan da Cunha",
        "alpha-2": "sh"
      },
      {
        name: "Saint Kitts and Nevis",
        "alpha-2": "kn"
      },
      {
        name: "Saint Lucia",
        "alpha-2": "lc"
      },
      {
        name: "Saint Martin (French part)",
        "alpha-2": "mf"
      },
      {
        name: "Saint Pierre and Miquelon",
        "alpha-2": "pm"
      },
      {
        name: "Saint Vincent and the Grenadines",
        "alpha-2": "vc"
      },
      {
        name: "Samoa",
        "alpha-2": "ws"
      },
      {
        name: "San Marino",
        "alpha-2": "sm"
      },
      {
        name: "Sao Tome and Principe",
        "alpha-2": "st"
      },
      {
        name: "Saudi Arabia",
        "alpha-2": "sa"
      },
      {
        name: "Senegal",
        "alpha-2": "sn"
      },
      {
        name: "Serbia",
        "alpha-2": "rs"
      },
      {
        name: "Seychelles",
        "alpha-2": "sc"
      },
      {
        name: "Sierra Leone",
        "alpha-2": "sl"
      },
      {
        name: "Singapore",
        "alpha-2": "sg"
      },
      {
        name: "Sint Maarten (Dutch part)",
        "alpha-2": "sx"
      },
      {
        name: "Slovakia",
        "alpha-2": "sk"
      },
      {
        name: "Slovenia",
        "alpha-2": "si"
      },
      {
        name: "Solomon Islands",
        "alpha-2": "sb"
      },
      {
        name: "Somalia",
        "alpha-2": "so"
      },
      {
        name: "South Africa",
        "alpha-2": "za"
      },
      {
        name: "South Georgia and the South Sandwich Islands",
        "alpha-2": "gs"
      },
      {
        name: "South Sudan",
        "alpha-2": "ss"
      },
      {
        name: "Soviet Union",
        "alpha-2": "su"
      },
      {
        name: "Spain",
        "alpha-2": "es"
      },
      {
        name: "Sri Lanka",
        "alpha-2": "lk"
      },
      {
        name: "Sudan",
        "alpha-2": "sd"
      },
      {
        name: "Suriname",
        "alpha-2": "sr"
      },
      {
        name: "Svalbard and Jan Mayen",
        "alpha-2": "sj"
      },
      {
        name: "Eswatini",
        "alpha-2": "sz"
      },
      {
        name: "Sweden",
        "alpha-2": "se"
      },
      {
        name: "Switzerland",
        "alpha-2": "ch"
      },
      {
        name: "Syrian Arab Republic",
        "alpha-2": "sy"
      },
      {
        name: "Taiwan, Province of China",
        "alpha-2": "tw"
      },
      {
        name: "Tajikistan",
        "alpha-2": "tj"
      },
      {
        name: "Tanzania, United Republic of",
        "alpha-2": "tz"
      },
      {
        name: "Thailand",
        "alpha-2": "th"
      },
      {
        name: "Timor-Leste",
        "alpha-2": "tl"
      },
      {
        name: "Togo",
        "alpha-2": "tg"
      },
      {
        name: "Tokelau",
        "alpha-2": "tk"
      },
      {
        name: "Tonga",
        "alpha-2": "to"
      },
      {
        name: "Trinidad and Tobago",
        "alpha-2": "tt"
      },
      {
        name: "Tunisia",
        "alpha-2": "tn"
      },
      {
        name: "Turkey",
        "alpha-2": "tr"
      },
      {
        name: "Turkmenistan",
        "alpha-2": "tm"
      },
      {
        name: "Turks and Caicos Islands",
        "alpha-2": "tc"
      },
      {
        name: "Tuvalu",
        "alpha-2": "tv"
      },
      {
        name: "Uganda",
        "alpha-2": "ug"
      },
      {
        name: "Ukraine",
        "alpha-2": "ua"
      },
      {
        name: "United Arab Emirates",
        "alpha-2": "ae"
      },
      {
        name: "United Kingdom of Great Britain and Northern Ireland",
        "alpha-2": "gb"
      },
      {
        name: "United States of America",
        "alpha-2": "us"
      },
      {
        name: "United States Minor Outlying Islands",
        "alpha-2": "um"
      },
      {
        name: "Uruguay",
        "alpha-2": "uy"
      },
      {
        name: "Uzbekistan",
        "alpha-2": "uz"
      },
      {
        name: "Vanuatu",
        "alpha-2": "vu"
      },
      {
        name: "Venezuela (Bolivarian Republic of)",
        "alpha-2": "ve"
      },
      {
        name: "Viet Nam",
        "alpha-2": "vn"
      },
      {
        name: "Virgin Islands (U.S.)",
        "alpha-2": "vi"
      },
      {
        name: "Wallis and Futuna",
        "alpha-2": "wf"
      },
      {
        name: "Western Sahara",
        "alpha-2": "eh"
      },
      {
        name: "Yemen",
        "alpha-2": "ye"
      },
      {
        name: "Zambia",
        "alpha-2": "zm"
      },
      {
        name: "Zimbabwe",
        "alpha-2": "zw"
      }
    ]
  }),
  methods: {
    ...mapActions(["fetchJobs", "addProfile"]),
    async handleProfileCVUpload() {
      const fullName = `${this.form.firstName} ${this.form.lastName}`;
      this.selectedFile.fullName = fullName;
      this.selectedFile.entryId = uuidv4();
      this.selectedFile.description = this.description;
      this.$store
        .dispatch("uploadProfileAsset", this.selectedFile)
        .then(asset => {
          this.form.uploadedCvAsset = asset;
          this.isUploading = false;
          this.uploaded = true;
        });
    },
    async handleSubmit(e) {
      const result = await this.$validator.validateAll();
      if (result) {
        if (this.uploaded) {
          this.isProfileAssetUploading = true;
          await this.handleAddProfile();
          this.isProfileAssetUploading = false;
          this.handleNetlifyForm();
          this.applicationCompleted();
        } else {
          this.uploadRequired();
        }
      }
    },
    async handleAddProfile() {
      const profile = {
        ...this.form,
        country: this.countryInfo,
        teachingExperience: parseInt(this.form.teachingExperience),
        yearsInTaiwan: parseInt(this.form.yearsInTaiwan),
        entryId: uuidv4(),
        hasCertificate: this.form.hasCertificate === "true" ? true : false
      };
      await this.addProfile(profile);
    },
    handleNetlifyForm() {
      const netlifyForm = {}
      netlifyForm.name = this.fullName
      netlifyForm.email = this.form.email
      netlifyForm.message = this.message
      netlifyForm.subject = this.subject
      fetch("/", {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "profile-applications",
          ...netlifyForm
        })
      });
    },
    applicationCompleted() {
      this.$swal({
        title: "Profile application sent",
        text: "You will recieve email for your profile has been published",
        icon: "success",
        confirmButtonText: "Okay"
      }).then(result => {
        if (result.value) {
          this.$router.push({ name: "landing" });
        }
      });
    },
    uploadRequired() {
      this.$swal({
        title: "Application Error",
        text: "Please upload your latest CV",
        icon: "error",
        confirmButtonText: "Okay"
      });
    },
    fileChangedHandler(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.selectedFile = event.target.files[0];
          this.isUploading = true;
          this.description = this.formatDescription();
          this.handleProfileCVUpload();
        }
      });
    },
    profilePictureChangedHandler(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.selectedProfilePictureFile = event.target.files[0];
          this.isProfilePictureUploading = true;
          this.description = this.formatDescription();
          this.handleProfilePictureUpload();
        }
      });
    },
    async handleProfilePictureUpload() {
      const fullName = `${this.form.firstName} ${this.form.lastName}`;
      this.selectedProfilePictureFile.fullName = fullName;
      this.selectedProfilePictureFile.entryId = uuidv4();
      this.selectedProfilePictureFile.description = this.description;
      this.$store
        .dispatch("uploadProfileAsset", this.selectedProfilePictureFile)
        .then(asset => {
          this.form.uploadedProfilePictureAsset = asset;
          this.isProfilePictureUploading = false;
          this.profilePictureUploaded = true;
        });
    },
    formatDescription() {
      return JSON.stringify({
        fullName: `${this.form.firstName} ${this.form.lastName}`,
        country: `${this.form.country}`,
        email: `${this.form.email}`,
        gender: `${this.form.gender}`,
        birthDate: `${this.form.birthDate}`,
        lisence: `${this.form.license === "true" ? "yes" : "no"}`
      });
    },
    handleTime(fullTime) {
      return fullTime ? "Full Time" : "Sub";
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    formatDate(date) {
      if (date) {
        date = new Date(date);
        date = date.toISOString().substring(0, 10);
      }
      return date;
    }
  }
};
</script>
<style>
.small-flag {
  margin: -0.9em -1.2em -1.1em -1.2em !important;
}

.desc-textarea {
  border: 1px solid #e3e3e3 !important;
  border-radius: 12px !important;
}
</style>
