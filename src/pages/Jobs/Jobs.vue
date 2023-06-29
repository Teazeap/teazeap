<template>
  <div>
    <Header header="Teaching Jobs" sub-header="We highly value your teaching career and its significance to us." :show-button="false" />
    <div class="section" :style="commonMarginClass">
      <div class="container text-center mt-16" v-if="jobsLoading">
        <img
          v-lazy="'img/Ellipsis-3s-128px.svg'"
          alt="Rounded Image"
          style="width:30px; height: 30px"
        />
      </div>
      <div class="container text-center mt-16">
        <div class="row justify-content-center">
          <JobCard
            v-for="job in allJobs.slice(start, end)"
            :key="job.id"
            :job="job"
          />
        </div>
        <h4 v-if="noJobs" class="card-title text-primary">
          {{ $t("schools.no-jobs") }}
        </h4>
      </div>
      <Contact v-if="noJobs" />
    </div>
    <div class="container" v-if="!noJobs" :style="commonMarginClass">
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
import { mapGetters, mapActions } from "vuex";
import Contact from "@/pages/Services/Contact";
import Header from "@/pages/Recruitment/Header.vue";
import sizeMixin from "@/plugins/sizeMixin.js";

export default {
  name: "jobs",
  bodyClass: "landing-page",
  mixins: [sizeMixin],
  components: {
    Contact,
    Header,
    JobCard,
    Pagination
  },
  computed: {
    ...mapGetters(["allJobs"]),
  },
  watch: {
    allJobs() {
      this.handlePagination();
      this.checkJobs();
    }
  },
  async created() {
    this.jobsLoading = true;
    await this.fetchJobs();
    this.jobsLoading = false;
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
      end: 12,
      jobsLoading: true
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
