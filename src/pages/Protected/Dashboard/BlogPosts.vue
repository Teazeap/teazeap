<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        Blog Posts
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="combinedBlogPosts"
        :loading="loading"
        :search="search"
        item-key="id"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        show-expand
      >
        <template v-slot:item.updatedAt="{ item }">
          {{ formatDate(item.updatedAt, "DD MMM YYYY") }}
        </template>
        <template v-slot:item.publishDate="{ item }">
          {{ formatDate(item.publishDate, "DD MMM YYYY") }}
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <h4 class="font-weight-black">Description</h4>
            <p>{{ item.description }}</p>
          </td>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-btn
            class="text-capitalize"
            v-if="item.isPublished"
            small
            rounded
            color="red"
            dark
            @click="handleItemUnPublish(item)"
          >
            Unpublish
          </v-btn>
          <v-btn
            class="text-capitalize"
            v-else
            small
            rounded
            color="success"
            dark
            @click="handleItemPublish(item)"
          >
            Publish
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
import SendEmailMixin from "@/mixins/SendEmailMixin";

export default {
  name: "dashboard-blog-posts",
  computed: {
    ...mapGetters(["allBlogPosts", "allPreviewBlogPosts"])
  },
  mixins: [SendEmailMixin],
  watch: {
    allPreviewBlogPosts: {
      handler() {
        this.handleBlogPosts();
      },
      deep: true
    },
    allBlogPosts: {
      handler() {
        this.handleBlogPosts();
      },
      deep: true
    }
  },
  created() {
    this.fetchPreviewBlogPosts();
    this.fetchBlogPosts();
    this.unwatch = this.$store.watch(
      (state, getters) => getters.allPreviewBlogPosts,
      (newValue, oldValue) => {
        this.handleBlogPosts();
      }
    );
  },
  methods: {
    ...mapActions([
      "fetchBlogPosts",
      "fetchPreviewBlogPosts",
      "publishBlog",
      "unPublishBlog"
    ]),
    handleBlogPosts() {
      const allBlogPostsIds = this.allBlogPosts.map(p => p.id);
      this.combinedBlogPosts = this.allPreviewBlogPosts.map(blog => {
        const isPublished = allBlogPostsIds.includes(blog.id);
        return { isPublished, ...blog };
      });
    },
    formatDate(date, format = "llll") {
      const createdAt = moment(new Date(date));
      return createdAt.format(format);
    },
    editItem(item) {},
    async handleItemPublish(item) {
      this.sendEmail("email");
      try {
        this.loading = true;
        await this.publishBlog(item.id);
        this.handleAlert({
          title: "Blog Post Published Successfully",
          text: "View it in Blog Post Page",
          icon: "success"
        });
      } catch (e) {
        this.handleAlert({
          title: "Blog Post Not Published",
          text: "Please try again",
          icon: "error"
        });
      }
    },
    async handleItemUnPublish(item) {
      try {
        this.loading = true;
        await this.unPublishBlog(item.id);
        this.handleAlert({
          title: "Unpublished Successfully",
          text: "",
          icon: "success"
        });
      } catch (e) {
        this.handleAlert({
          title: "Blog Post Not Unpublished",
          text: "Please try again",
          icon: "error"
        });
      }
    },
    handleAlert({ title, text, icon }) {
      this.$swal({
        title,
        text,
        icon,
        confirmButtonText: "Okay"
      }).then(result => {
        this.loading = false;
      });
    }
  },
  data() {
    return {
      search: "",
      expanded: [],
      singleExpand: false,
      loading: false,
      combinedBlogPosts: [],
      headers: [
        {
          text: "Author",
          align: "start",
          value: "author"
        },
        { text: "Category", value: "category" },
        { text: "title", value: "title" },
        { text: "Publish Date", value: "publishDate" },
        { text: "Updated At", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  }
};
</script>
<style lang="scss">
.v-application--wrap {
  height: 100%;
  min-height: 100%;
}
</style>
