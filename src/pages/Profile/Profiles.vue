<template>
  <div>
    <!-- prallex -->
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg5.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title company-name">TeaZeaP Recruiting Agency</h1>
          <div class="text-center row">
            <div class="col-4">
              <h2 class="mb-2">{{ allProfiles.length }}</h2>
              <p>{{ $t("schools.jobs") }}</p>
            </div>
            <div class="col-4">
              <h2 class="mb-2">26</h2>
              <p>{{ $t("schools.clients") }}</p>
            </div>
            <div class="col-4">
              <h2 class="mb-2">48</h2>
              <p>{{ $t("schools.schools") }}</p>
            </div>
            <div class="col-12">
              <a
                href="https://www.facebook.com/teazeap"
                target="_blank"
                class="btn btn-primary btn-icon btn-round"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/teazeap/"
                class="btn btn-primary btn-icon btn-round"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- profiles -->
    <div class="section profile-section">
      <span v-if="!noProfiles">
        <h2 class="title">Meet Our Teachers</h2>
        <p class="description">Your teaching career is very important to us.</p>
        <div class="container text-center">
          <div class="row justify-content-center">
            <ProfileCard
              v-for="profile in allProfiles.slice(start, end)"
              :key="profile.id"
              :profile="profile"
            />
          </div>
          <h4 v-if="noProfiles" class="card-title text-primary">
            {{ $t("profiles.no-profiles") }}
          </h4>
        </div>
      </span>
      <AddProfile />
      <Contact v-if="noProfiles" />
    </div>
    <div class="container" v-if="!noProfiles">
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
import ProfileCard from "@/pages/Profile/ProfileCard";
import { mapGetters, mapActions } from "vuex";
import Contact from "@/pages/Services/Contact";
import AddProfile from "./AddProfile.vue";

export default {
  name: "profiles",
  bodyClass: "landing-page",
  components: {
    Contact,
    ProfileCard,
    Pagination,
    AddProfile
  },
  computed: {
    ...mapGetters(["allProfiles"])
  },
  watch: {
    allProfiles() {
      this.handlePagination();
      this.checkProfiles();
    }
  },
  created() {
    this.fetchProfiles();
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
      noProfiles: false,
      end: 12
    };
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
    handlePagination() {
      this.pagination.total = this.allProfiles.length;
      this.pagination.pageCount = Math.ceil(this.allProfiles.length / 6);
    },
    changePage(value) {
      this.start = this.pagination.perPage * value - this.pagination.perPage;
      this.end = this.pagination.perPage * value;
    },
    checkProfiles() {
      this.noProfiles = this.allProfiles.length === 0;
    }
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}

.profile-section {
  padding: 20px 0px 70px 0 !important;
}
</style>
