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
              <h2 class="mb-2">{{ allBlogPosts.length }}</h2>
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
    <!-- blog post -->
    <div class="section profile-section" id="referenceSection">
      <span style="textAlign: center">
        <h2 class="title mb-0">Blog Posts</h2>
        <p class="description pt-0">Follow our journey....</p>
        <div class="container mt-4">
          <BlogSearch @search="handleSearch" v-if="!noBlogPosts" />
          <div class="row justify-content-center">
            <BlogCard
              v-for="blogPost in filteredBlogPosts.slice(start, end)"
              :key="blogPost.id"
              :blogPost="blogPost"
            />
          </div>
          <h4 v-if="noBlogPosts" class="card-title">
            {{ $t("blog.no-blogs") }}
          </h4>
        </div>
        <div
          class="row justify-content-end mt-2"
          v-show="pagination.pageCount > 1"
        >
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
      <div class="container text-center mt-16" v-if="blogPostsLoading">
        <img
          v-lazy="'img/Ellipsis-3s-128px.svg'"
          alt="Rounded Image"
          style="width:30px; height: 30px"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { Pagination } from "@/components";
import BlogCard from "@/pages/Blog/BlogCard";
import { Button, FormGroupInput, Radio } from "@/components";
import { mapGetters, mapActions } from "vuex";
import BlogSearch from "./BlogSearch.vue";
import moment from "moment";

export default {
  name: "BlogPosts",
  bodyClass: "landing-page",
  components: {
    BlogCard,
    Pagination,
    BlogSearch,
    [Radio.name]: Radio,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  computed: {
    ...mapGetters(["allBlogPosts"])
  },
  watch: {
    allBlogPosts() {
      this.handleSearch({});
      this.checkBlogPosts();
      this.handlePagination();
    }
  },
  async created() {
    this.blogPostsLoading = true;
    await this.fetchBlogPosts();
    this.blogPostsLoading = false;
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
      blogPostsLoading: true,
      jobs: [],
      start: 6,
      noBlogPosts: false,
      filteredBlogPosts: [],
      end: 12
    };
  },
  beforeDestroy() {
    this.clearHash();
  },
  methods: {
    ...mapActions(["fetchBlogPosts"]),
    handlePagination() {
      this.pagination.total = this.filteredBlogPosts.length;
      this.pagination.pageCount = Math.ceil(this.filteredBlogPosts.length / 6);
    },
    changePage(value) {
      this.start = this.pagination.perPage * value - this.pagination.perPage;
      this.end = this.pagination.perPage * value;
    },
    clearHash() {
      window.location.hash = "";
    },
    checkBlogPosts() {
      this.noBlogPosts = this.filteredBlogPosts.length === 0;
    },
    handleSearch(searchParams) {
      let filteredBlogPosts = [];
      filteredBlogPosts = this.allBlogPosts;

      if (Object.keys(searchParams).length === 0) {
        this.filteredBlogPosts = this.allBlogPosts;
        this.handlePagination();
        return;
      }

      const { text, category } = searchParams;

      // search by fullName
      if (text) {
        const searchRegex = new RegExp(`${text}`, "i");
        filteredBlogPosts = this.allBlogPosts.filter(blog => {
          const { title, description } = blog;
          const searchResult =
            title.match(searchRegex) || description.match(searchRegex);
          return !!searchResult;
        });
      }
      // filfter by category
      if (category) {
        filteredBlogPosts = filteredBlogPosts.filter(
          blog => blog.category === category
        );
      }

      // no search results with search params
      if (filteredBlogPosts.length === 0 && (text || category)) {
        if (this.allBlogPosts.length > 6) {
          // get 6 random profiles
          const randomIndex = this.getRandomArbitrary(this.allBlogPosts.length);
          this.filteredBlogPosts = this.allBlogPosts.filter(
            (profile, index) => {
              return randomIndex.includes(index);
            }
          );
        } else {
          this.filteredBlogPosts = this.allBlogPosts;
        }
        this.handlePagination();
        return;
      }

      this.filteredBlogPosts = filteredBlogPosts;
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
