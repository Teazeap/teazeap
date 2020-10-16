<template>
  <div>
     <div class="page-header page-header-medium">
        <parallax
          class="page-header-image"
          style="background-image: url('img/bg5.jpg')"
        >
        </parallax>
        <div class="row mt-lg-5">
          <div class="container">
            <h1 class="title">TeaZeaP Recruiting Agency</h1>
            <p class="category">Join our ever expanding clientele</p>
              <div class="content">
                <div class="social-description">
                  <h2>{{allJobs.length}}</h2>
                  <p>Current Jobs</p>
                </div>
                <div class="social-description">
                  <h2>26</h2>
                  <p>Clients</p>
                </div>
                <div class="social-description">
                  <h2>48</h2>
                  <p>Schools</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    <div class="section">
      <div class="container-fluid text-center">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg">Follow</a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="card-deck row-fluid no-gutters">
          <JobCard  v-for="job in allJobs" :key="job.id" :job="job"/>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row justify-content-end">
          <div class="col align-self-end">
            <Pagination
              type="primary"
              :page-count="10"
              v-model="pagination.simple"
            />
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { Pagination } from '@/components';
import JobCard from '@/pages/JobCard'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'jobs',
  bodyClass: 'landing-page',
  components: {
    JobCard,
    Pagination,
  },
  computed: {
    ...mapGetters(['allJobs']),
  },
  methods: {
    ...mapActions(['fetchJobs'])
  },
  created() {
    this.fetchJobs()
  },
   data() {
    return {
      pagination: {
        simple: 1,
        default: 2,
        full: 3
      }
    };
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
