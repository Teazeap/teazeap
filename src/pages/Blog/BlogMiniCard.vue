<template>
  <div class="col-md-6 col-lg-4 col-xl-4  py-2">
    <v-app id="inspire">
      <v-card
        class="mx-auto blog-mini-card"
        max-width="444"
        min-width="444"
        outlined
        link
        :to="{ name: 'BlogInfo', params: { id: blogPost.id } }"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="mb-1 blog-title">
              {{ blogPost.title }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              stripHtml (blogPost.description)
            }}</v-list-item-subtitle>
            <div>
              <v-chip
                class="mt-2"
                small
                text-color="white"
                :color="getCatagoryColor(blogPost.category)"
              >
                {{ blogPost.category }}
              </v-chip>
            </div>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
            style="border-radius: 12px !important"
          >
            <img :src="blogPostImageUrl" alt="John" />
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import moment from "moment";
import { Switch } from "element-ui";

export default {
  name: "blog-mini-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    blogPost: {
      type: Object,
      required: true,
      default: () => {}
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
    stripHtml(html) {
      let tmp = document.createElement("div");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
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

.blog-mini-card {
  transition: 0.3s;
  border-radius: 24px !important;
}

.blog-mini-card:hover {
  transform: translateY(-2px);
  cursor: pointer;
  text-decoration: none;
}

.blog-title {
  font-size: 18px;
  font-weight: 600;
  word-wrap: break-word;
  text-overflow: unset !important;
  white-space: inherit !important;
}
</style>
