<template>
  <div>
    <PageHeader />
    <div class="section section-about-us" style="padding-bottom: 10px">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">{{ $t("schools.find") }}</h2>
            <h5 class="description text-justify">
              {{ $t("schools.success") }}
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
      </div>
    </div>
    <div class="section" style="padding-top: 10px">
      <div class="container text-center">
        <div class="row justify-content-center">
          <JobCard
            :isLink="false"
            v-for="job in allJobs.slice(start, end)"
            :key="job.id"
            :job="job"
          />
        </div>
      </div>
    </div>
    <Contact v-if="noJobs" />
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
import { Pagination } from "@/components";
import JobCard from "@/pages/Jobs/JobCard";
import Contact from "@/pages/Services/Contact";
import { mapGetters, mapActions } from "vuex";
import PageHeader from '../PageHeader.vue';

export default {
  name: "jobs",
  bodyClass: "landing-page",
  components: {
    Contact,
    JobCard,
    Pagination,
    PageHeader
  },
  computed: {
    ...mapGetters(["allJobs"])
  },
  watch: {
    allJobs() {
      this.handlePagination();
      this.checkJobs();
    }
  },
  created() {
    this.fetchJobs();
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
      noJobs: false,
      start: 6,
      end: 12
    };
  },
  methods: {
    ...mapActions(["fetchJobs"]),
    handlePagination() {
      this.pagination.total = this.allJobs.length;
      this.pagination.pageCount = Math.ceil(this.allJobs.length / 6);
    },
    changePage(value) {
      this.start = this.pagination.perPage * value - this.pagination.perPage;
      this.end = this.pagination.perPage * value;
    },
    checkJobs() {
      this.noJobs = this.allJobs.length === 0;
    }
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
