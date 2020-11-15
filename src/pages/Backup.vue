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
          </div>
      </div>
    </div>
    <div>
        <div class="container-fluid">
          <div class="row-fluid">
            <div class="col-md-12 col-lg-6 ml-auto col-xl-6 mr-auto">
              <p class="category">Apply for this Job</p>
              <!-- Nav tabs -->
              <card>
                <tabs
                  slot="raw-content"
                  data-background-color="orange"
                  tab-content-classes="tab-content-padding text-center"
                  class="nav-fill list-content"
                >
                  <tab-pane>
                    <template slot="label">
                      <i class="now-ui-icons objects_umbrella-13"></i> Personal Details
                    </template>
                    <p class="text-left">
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that things
                      could be at. So when you get something that has the name Kanye
                      West on it, it’s supposed to be pushing the furthest
                      possibilities. I will be the leader of a company that ends up
                      being worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus.
                    </p>
                  </tab-pane>
                  <tab-pane>
                    <template slot="label">
                      <i class="now-ui-icons shopping_cart-simple"></i> Upload CV
                    </template>
                    <input type="file" @change="fileChangedHandler">
                      <n-button type="primary" round icon @click="handleDownload">
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                  </tab-pane>
                  <tab-pane>
                    <template slot="label">
                      <i class="now-ui-icons shopping_shop"></i> Upload Video (Optional)
                    </template>
                    <p>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that things
                      could be at. So when you get something that has the name Kanye
                      West on it, it’s supposed to be pushing the furthest
                      possibilities. I will be the leader of a company that ends up
                      being worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus.
                    </p>
                  </tab-pane>
                  <tab-pane>
                    <template slot="label">
                      <i class="now-ui-icons ui-2_settings-90"></i> Settings
                    </template>
                    <p>
                      "I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I understand
                      culture. I am the nucleus. I think that’s a responsibility
                      that I have, to push possibilities, to show people, this is
                      the level that things could be at."
                    </p>
                  </tab-pane>
                </tabs>
              </card>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Card, Tabs, TabPane, Button } from '@/components';

export default {
  name: 'JobInfo',
  bodyClass: 'profile-page',
   components: {
    Card,
    Tabs,
    [Button.name]: Button,
    TabPane
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
    selectedFile: null,
    id: ''
  }),
  methods: {
    ...mapActions(['fetchJobs']),
    async handleDownload (e) {
      e.preventDefault()
      this.$store.dispatch('uploadCv', this.selectedFile).then( () => {
        // this.$store.dispatch('updateEntry', this.asset.sys.id)
      })
    },
    fileChangedHandler (e) {
      this.selectedFile = event.target.files[0]
    }
  },
  async created() {
    await this.fetchJobs()
    let job = this.allJobs.filter(item => item.id === this.$route.params.id)
    this.currentJob = job[0]
  }
};
</script>



 






    // client.getSpace('dr15y1pi2yc9')
    // .then((space) => space.getEnvironment('master-2020-10-14'))
    // .then((environment) => environment.getAsset('57brVeyY6Yhp079YoS5TnK'))
    // .then((asset) => {
    //   console.log(asset);
    // })

    // client.getSpace('dr15y1pi2yc9')
    // .then((space) => space.getEnvironment('master-2020-10-14'))
    // .then((environment) => environment.getEntry('1PsCdpZP2rb2YuTOSrsEFY'))
    // .then((asset) => {
    //   console.log(asset);
    // })

    // client.getSpace('dr15y1pi2yc9')
    // .then((space) => space.getEnvironment('master-2020-10-14'))
    // .then((environment) => environment.getEntry('1PsCdpZP2rb2YuTOSrsEFY'))
    // .then((entry) => {
    //   console.log(entry.fields["resumes"]);
    // })

    // client.getSpace('dr15y1pi2yc9')
    //   .then((space) => space.getEntry('1PsCdpZP2rb2YuTOSrsEFY'))
    //   .then((entry) => {
    //     console.log(entry);
    //   })