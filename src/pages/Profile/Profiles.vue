<template>
  <div>
    <Header
      header="header.teachers"
      sub-header="header.profileSubHeader"
      :show-button="false"
      banner-src="/img/blog/blog.png"
    />
    <!-- profiles -->
    <div
      class="section profile-section"
      id="referenceSection"
      :style="commonMarginClass"
    >
      <span v-if="!noProfiles" style="textalign: center">
        <div class="section-card profile-card">
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
        </div>
      </span>
      <div class="container text-center mt-16" v-if="profilesLoading">
        <img
          v-lazy="'img/Ellipsis-3s-128px.svg'"
          alt="Rounded Image"
          style="width: 30px; height: 30px"
        />
      </div>
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
import Header from "@/pages/Recruitment/Header.vue";
import sizeMixin from "@/plugins/sizeMixin.js";

export default {
  name: "profiles",
  bodyClass: "landing-page",
  components: {
    ProfileCard,
    Header,
    Pagination,
    AddProfile,
    ProfileSearch,
    [Radio.name]: Radio,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  mixins: [sizeMixin],
  computed: {
    ...mapGetters(["allProfiles"]),
  },
  watch: {
    allProfiles() {
      this.handleSearch({});
      this.checkProfiles();
      this.handlePagination();
    },
  },
  async created() {
    this.profilesLoading = true;
    await this.fetchProfiles();
    this.profilesLoading = false;
  },
  data() {
    return {
      pagination: {
        simple: 1,
        default: 2,
        full: 3,
        pageCount: 1,
        total: 0,
        perPage: 6,
      },
      search: {
        name: "",
      },
      profilesLoading: true,
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
        filteredProfiles = this.allProfiles.filter((profile) => {
          const fullName = `${profile.firstName} ${profile.lastName}`;
          const searchResult = fullName.match(searchRegex);
          return !!searchResult;
        });
      }

      // filfter by nationality
      if (country) {
        filteredProfiles = filteredProfiles.filter(
          (profile) => profile.country[0].name === country
        );
      }

      // filfter by teachingExperience
      if (teachingExperience) {
        filteredProfiles = filteredProfiles.filter(
          (profile) =>
            profile.teachingExperience === parseInt(teachingExperience)
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
    },
  },
};
</script>
<style scoped>
.tab-content.tab-content-padding {
  padding: 20px;
}

.profile-section {
  padding: 20px 0px 70px 0 !important;
}

@media (min-width: 600px) {
  .profile-card {
    padding: 18px;
    margin-top: -8rem;
    background: white;
  }
}
</style>
