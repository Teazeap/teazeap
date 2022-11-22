<template>
  <div class="col-md-6 col-lg-4 col-xl-4  py-2">
    <v-app id="inspire">
      <v-card
        class="mx-auto profile-card"
        width="340"
        height="510"
        :elevation="4"
        :href="blogPost.youtubeLink"
        target="_blank"
      >
        <v-img
          position="top"
          :src="blogPostImageUrl"
          height="228px"
          width="342px"
        ></v-img>

        <v-card-text class="justify-content-start mb-0 pb-0 pl-2 text-justify">
          <v-chip
            class="ma-2"
            small
            text-color="white"
            :color="getCatagoryColor(blogPost.category)"
          >
            {{ blogPost.category }}
          </v-chip>
        </v-card-text>

        <v-card-title class="justify-content-start my-1 py-0 blog-title">
          {{ blogPost.title }}
        </v-card-title>

        <v-card-text class="blog-description text-justify my-0 py-0">
          {{ blogPost.description }}
        </v-card-text>

        <v-list-item two-line class=" my-0 py-0">
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
      </v-card>
    </v-app>
  </div>
</template>

<script>
import moment from "moment";
import { Switch } from "element-ui";

export default {
  name: "blog-post-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    blogPost: {
      type: Object,
      required: true,
      default: () => {}
    },
    isLink: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {
    blogPostImageUrl() {
      return `https:${this.blogPost.blogPostImageUrl}`;
    },
    authorAvatarUrl() {
      return `https:${this.blogPost.authorAvatarUrl}`;
    }
  },
  data: () => ({
    show: false,
    catergoryColorPallete: {
      Immigration: "primary",
      "Work Culture": "purple lighten-1",
      "Social Life": "red darken-4",
      Travel: "green",
      Housing: "orange darken-4"
    }
  }),
  methods: {
    postedAt(date) {
      const createdAt = moment(new Date(date));
      const now = moment(new Date());
      return createdAt.from(now);
    },
    getCatagoryColor(catergory) {
      const color = this.catergoryColorPallete[catergory];
      return color ? color : "green";
    }
  }
};
</script>

<style scoped lang="scss">
.v-application--wrap {
  height: 100%;
  min-height: 100%;
}

.profile-card {
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 24px !important;
}

.profile-card:hover {
  transform: translateY(-2px);
  cursor: pointer;
  text-decoration: none;
}

.blog-description {
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 90px;
  min-height: 90px;
  height: 90px;
}

.blog-title {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  font-size: 24px;
  font-weight: 600;
}
</style>
