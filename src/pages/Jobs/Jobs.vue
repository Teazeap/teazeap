<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg5.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">TeaZeaP Recruiting Agency</h1>
          <div class="text-center row">
            <div class="col-4">
              <h2 class="mb-2">{{allJobs.length}}</h2>
              <p>{{$t('schools.jobs')}}</p>
            </div>
            <div class="col-4">
              <h2 class="mb-2">26</h2>
              <p>{{$t('schools.clients')}}</p>
            </div>
            <div class="col-4">
              <h2 class="mb-2">48</h2>
              <p>{{$t('schools.schools')}}</p>
            </div>
            <div class="col-12">
              <a href="https://www.facebook.com/teazeap" target="_blank" class="btn btn-primary btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/teazeap/" class="btn btn-primary btn-icon btn-round" target="_blank" >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-center">
          <JobCard  v-for="job in allJobs.slice(start,end)" :key="job.id" :job="job"/>
        </div>
        <h4 v-if="noJobs" class="card-title text-primary">{{$t('schools.no-jobs')}}</h4>
      </div>
       <Contact v-if="noJobs" />
    </div>
    <div class="container" v-if="!noJobs">
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
import { Pagination } from '@/components';
import JobCard from '@/pages/Jobs/JobCard'
import { mapGetters, mapActions } from "vuex";
import  Contact  from "@/pages/Services/Contact";

export default {
  name: 'jobs',
  bodyClass: 'landing-page',
  components: {
    Contact,
    JobCard,
    Pagination,
  },
  computed: {
    ...mapGetters(['allJobs'])
  },
  watch: {
    allJobs () {
      this.handlePagination()
      this.checkJobs()
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
      noJobs: false,
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
    checkJobs () {
      this.noJobs = this.allJobs.length === 0
    }
  },
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
