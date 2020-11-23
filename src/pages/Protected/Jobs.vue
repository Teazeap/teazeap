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
      <div class="container text-center">
        <div class="button-container">
          <n-button  @click="logOut" class="btn btn-primary btn-round btn-lg">Log Out</n-button>
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
        <div class="row">
          <JobCard  v-for="job in allJobs.slice(start,end)" :key="job.id" :job="job"/>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row justify-content-end">
          <div class="col align-self-end offset-xl-9 offset-md-9 offset-sm-9">
            <Pagination
              type="primary"
              :total="pagination.total"
              :page-count="pagination.pageCount"
              :per-page="pagination.perPage"
              @input="changePage"
              v-model="pagination.simple"
            />
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { Pagination, Button } from '@/components';
import JobCard from '@/pages/Protected/JobCard'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'adminJobs',
  bodyClass: 'landing-page',
  components: {
    JobCard,
    [Button.name]: Button,
    Pagination,
  },
  computed: {
    ...mapGetters(['allJobs'])
  },
  watch: {
    allJobs () {
      this.handlePagination()
    }
  },
  created() {
    this.fetchJobs()
  },
   data() {
    return {
      pagination: {
        simple: 1,
        default: 2,
        full: 3,
        pageCount: 1,
        total: 0,
        perPage: 6
      },
      jobs: [],
      start: 6,
      end: 12
    };
  },
  methods: {
    ...mapActions(['fetchJobs']),
    handlePagination () {
      this.pagination.total = this.allJobs.length 
      this.pagination.pageCount = Math.ceil(this.allJobs.length / 6)
    },
    changePage (value) {
      this.start = (this.pagination.perPage * value) - this.pagination.perPage
      this.end = this.pagination.perPage * value
    },
    logOut () {
      this.$store.dispatch('logout')
      this.$router.push({name: 'landing'})
    }
  },
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
