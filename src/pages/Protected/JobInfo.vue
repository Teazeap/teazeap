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
      <div class="container text-center">
        <div class="button-container">
          <router-link :to="{name: 'JobsAdminMain'}" tag="button" class="btn btn-primary btn-round btn-lg">Back To Jobs</router-link>
        </div>
           <h2 class="title">Applications</h2>
         <div class="card-deck row no-gutters" v-if="resumes.length > 1">
            <div class="card col-12 col-xs-12  col-sm-12 col-md-12 col-lg-4 col-xl-6" v-for="(applicant, index) in resumes" :key="index" >
              <div class="card-body text-center">
                <h5 class="card-title font-weight-bold">{{ applicant.fields.title  }}</h5>
                <h6 class="card-subtitle mb-2 text-muted text-lowercase font-italic">{{ formatDescription(applicant.fields.description, 'email')  }}</h6>
                <div class="row mb-3">
                  <div class="col-6">
                    <i class="now-ui-icons business_globe"></i> {{ formatDescription(applicant.fields.description, 'country') }}
                  </div>
                  <div class="col-6" >
                    <i class="now-ui-icons users_single-02"></i> {{ formatDescription(applicant.fields.description, 'gender') }}
                  </div>
                </div>
                <a :href="getURL(applicant.fields.file.url)" class="card-link" :download="applicant.fields.file.fileName" target="_blank" >Download CV</a>
              </div>
            </div>
          </div>
          <h4 v-else class="card-title text-primary">No applications yet</h4>
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
      return job[0].resumes.filter((item, index) => index > 0)
    },
    job () {
      let job = this.allJobs.filter(item => item.id === this.$route.params.id)
      return job[0]
    },
    computedAsset () {
      return this.asset
    }
  },
  methods: {
    ...mapActions(['fetchJobs']),
    formatDescription (description, key) {
      const applicantDetails = JSON.parse(description)
      return applicantDetails[key]
    },
    getURL (url) {
      return `https://${url}`
    }
  }
};
</script>
