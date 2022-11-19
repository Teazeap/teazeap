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
    <div class="section profile-section" id="referenceSection">
      <span v-if="!noProfiles" style="textAlign: center">
        <h2 class="title">Meet Our Teachers</h2>
        <p class="description">Your teaching career is very important to us.</p>
        <div class="container">
          <ProfileSearch @search="handleSearch" />
          <div class="row justify-content-center">
            <ProfileCard
              v-for="profile in filteredProfiles.slice(start, end)"
              :key="profile.id"
              :profile="profile"
            />
          </div>
          <h4 v-if="noProfiles" class="card-title text-primary">
            {{ $t("profiles.no-profiles") }}
          </h4>
        </div>
        <div class="row justify-content-end mt-2">
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
      </span>
      <AddProfile />
    </div>
  </div>
</template>
<script>
import { Pagination } from "@/components";
import ProfileCard from "@/pages/Profile/ProfileCard";
import { Button, FormGroupInput, Radio } from "@/components";
import { mapGetters, mapActions } from "vuex";
import AddProfile from "./AddProfile.vue";
import ProfileSearch from "./ProfileSearch.vue";

export default {
  name: "profiles",
  bodyClass: "landing-page",
  components: {
    ProfileCard,
    Pagination,
    AddProfile,
    ProfileSearch,
    [Radio.name]: Radio,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  computed: {
    ...mapGetters(["allProfiles"])
  },
  watch: {
    allProfiles() {
      this.handleSearch({});
      this.checkProfiles();
      this.handlePagination();
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
      search: {
        name: ""
      },
      jobs: [],
      start: 6,
      noProfiles: false,
      filteredProfiles: [],
      end: 12,
    };
  },
  beforeDestroy() {
    this.clearHash();
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
    handlePagination() {
      this.pagination.total = this.filteredProfiles.length;
      this.pagination.pageCount = Math.ceil(this.filteredProfiles.length / 6);
    },
    changePage(value) {
      this.start = this.pagination.perPage * value - this.pagination.perPage;
      this.end = this.pagination.perPage * value;
    },
    clearHash() {
      window.location.hash = "";
    },
    checkProfiles() {
      this.noProfiles = this.filteredProfiles.length === 0;
    },
    handleSearch(searchParams) {
      let filteredProfiles = [];
      filteredProfiles = this.allProfiles;

      if (Object.keys(searchParams).length === 0) {
        this.filteredProfiles = this.allProfiles;
        this.handlePagination();
        return;
      }

      const { name, country, teachingExperience } = searchParams;

      // search by fullName
      if (name) {
        const searchRegex = new RegExp(`${name}`, "i");
        filteredProfiles = this.allProfiles.filter(profile => {
          const fullName = `${profile.firstName} ${profile.lastName}`;
          const searchResult = fullName.match(searchRegex);
          return !!searchResult;
        });
      }

      // filfter by nationality
      if (country) {
        filteredProfiles = filteredProfiles.filter(
          profile => profile.country[0].name === country
        );
      }

      // filfter by teachingExperience
      if (teachingExperience) {
        filteredProfiles = filteredProfiles.filter(
          profile => profile.teachingExperience === parseInt(teachingExperience)
        );
      }

      // no search results with search params
      if (
        filteredProfiles.length === 0 &&
        (name || country || teachingExperience)
      ) {
        if (this.allProfiles.length > 6) {
          // get 6 random profiles
          const randomIndex = this.getRandomArbitrary(this.allProfiles.length);
          this.filteredProfiles = this.allProfiles.filter((profile, index) => {
            return randomIndex.includes(index);
          });
        } else {
          this.filteredProfiles = this.allProfiles;
        }
        this.handlePagination();
        return;
      }

      this.filteredProfiles = filteredProfiles;
      this.handlePagination();
    },
    getRandomArbitrary(max) {
      const randomIntsSet = new Set();
      while (randomIntsSet.size < 6) {
        const randomInt = Math.floor(Math.random() * max);
        randomIntsSet.add(randomInt);
      }
      return [...randomIntsSet];
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
