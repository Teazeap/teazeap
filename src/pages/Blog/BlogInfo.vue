<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        :style="`background-image: url(${blogPostImageUrl})`"
      >
      </parallax>
      <div class="container">
        <h1 class="title">{{ blogPost.title }}</h1>
        <div class="content"></div>
      </div>
    </div>
    <div class="section">
      <div class="container-fluid text-start">
        <div class="button-container">
          <router-link
            :to="{ name: 'Blogs' }"
            tag="button"
            class="btn btn-primary btn-round btn-lg"
            >Back To Blogs</router-link
          >
        </div>
        <v-app>
          <div class="row justify-content-start">
            <div
              class="col-12 col-xs-12  col-sm-12 col-md-12 col-lg-8 col-xl-6 py-2 offset-xl-1"
            >
              <div class="row justify-content-start">
                <div class="col-24">
                  <div class="py-2 offset-xl-1">
                    <v-list-item
                      two-line
                      class="my-0 py-0 mx-md-2 px-md-2 mx-lg-0 px-lg-0"
                    >
                      <v-list-item-avatar size="50" color="grey">
                        <img :src="authorAvatarUrl" alt="John" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="mb-1">
                          {{ blogPost.author }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{
                          postedAt(blogPost.updatedAt)
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-24">
                  <div class="py-2 mx-2 px-2 offset-xl-1">
                    <p class="card-text text-left">
                      {{ blogPost.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mt-2 hidden-md-and-down">
              <p class="pt-0 mb-4 featured-blogs">Feature Blogs</p>
              <div
                class="row"
                v-for="(blogPost, index) in otherBlogPosts.slice(0, 4)"
                :key="index"
              >
                <BlogMiniCard :blog-post="blogPost" />
              </div>
            </div>
          </div>
          <div class="row "></div>
        </v-app>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  Card,
  Tabs,
  TabPane,
  Button,
  FormGroupInput,
  Radio
} from "@/components";
import { DatePicker, Icon } from "element-ui";
import moment from "moment";
import BlogMiniCard from "./BlogMiniCard.vue";

export default {
  name: "BlogInfo",
  bodyClass: "profile-page",
  components: { BlogMiniCard },
  computed: {
    ...mapGetters(["allBlogPosts"]),
    blogPost() {
      let blogPost = this.allBlogPosts.find(
        item => item.id === this.$route.params.id
      );
      return blogPost;
    },
    blogPostImageUrl() {
      return `https:${this.blogPost.blogPostImageUrl}`;
    },
    authorAvatarUrl() {
      return `https:${this.blogPost.authorAvatarUrl}`;
    },
    otherBlogPosts() {
      let blogPost = this.allBlogPosts.filter(
        item => item.id !== this.$route.params.id
      );
      return blogPost;
    }
  },
  data: () => ({
    catergoryColorPallete: {
      Immigration: "primary",
      "Work Culture": "purple lighten-1",
      "Social Life": "red darken-4",
      Travel: "green",
      Housing: "orange darken-4"
    }
  }),
  methods: {
    ...mapActions(["fetchBlogPosts"]),
    getCatagoryColor(catergory) {
      const color = this.catergoryColorPallete[catergory];
      return color ? color : "green";
    },
    postedAt(date) {
      const createdAt = moment(new Date(date));
      const now = moment(new Date());
      return createdAt.from(now);
    }
  },
  async created() {
    await this.fetchBlogPosts();
    // let job = this.allBlogPosts.filter(item => item.id === this.$route.params.id);
    // this.currentBlogPost = job[0];
  }
};
</script>
<style scoped lang="scss">
.v-application--wrap {
  height: 100%;
  min-height: 100%;
}

.featured-blogs {
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  color: rgb(104 115 133);
}
</style>
