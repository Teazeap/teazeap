<template>
  <v-app id="inspire">
    <v-card>
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
        <template v-slot:top>
          <v-toolbar flat class="mt-2">
            <v-row>
              <v-col>
                <v-toolbar-title>Jobs</v-toolbar-title>
              </v-col>
              <v-col cols="6" md="2">
                <v-dialog v-model="dialog" max-width="700px" persistent>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      New Item
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form ref="form" v-model="valid" lazy-validation>
                          <v-row>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="editedBlog.author"
                                :rules="authorRules"
                                label="Author"
                                outlined
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="editedBlog.title"
                                :rules="titleRules"
                                label="Title"
                                outlined
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-select
                                v-model="editedBlog.category"
                                :items="catergories"
                                chips
                                label="category"
                                :rules="[v => !!v || 'Category is required']"
                                required
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                v-model="editedBlog.youtubeLink"
                                :rules="youtubeLinkRules"
                                label="Youtube Link"
                                outlined
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-textarea
                                v-model="editedBlog.description"
                                :rules="descriptionRules"
                                label="Description"
                                outlined
                                required
                              ></v-textarea>
                            </v-col>

                            <v-col cols="12" md="6" class="mt-3">
                              <v-row>
                                <!-- :value="editedBlog.authorAvatar" -->
                                <v-file-input
                                  label="Author Avatar"
                                  :rules="authorAvatarRules"
                                  accept="image/png, image/jpeg, image/bmp"
                                  required
                                  outlined
                                  dense
                                  @change="authorAvatarChangeHandler"
                                  @click:clear="editedBlog.authorAvatar = ''"
                                ></v-file-input>
                              </v-row>
                              <v-row>
                                <!-- :value="editedBlog.blogPostImage" -->
                                <v-file-input
                                  label="Blog Post Image"
                                  :rules="blogPostImageRules"
                                  accept="image/png, image/jpeg, image/bmp"
                                  outlined
                                  dense
                                  @change="blogPostImageChangeHandler"
                                  @click:clear="editedBlog.blogPostImage = ''"
                                ></v-file-input>
                              </v-row>
                            </v-col>
                          </v-row>

                          <v-card-actions>
                            <v-btn
                              :disabled="!valid || dialogLoading"
                              :loading="dialogLoading"
                              color="success"
                              class="mr-4"
                              @click="submit"
                            >
                              Submit
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                              :disabled="dialogLoading"
                              color="primary"
                              @click="closeDialog"
                            >
                              Close
                            </v-btn>
                          </v-card-actions>
                        </v-form>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="6" md="2">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  outlined
                  dense
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-toolbar>
        </template>
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
          <v-icon small class="mr-2" @click="editItem(item)" v-if="false">
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
import { v4 as uuidv4 } from "uuid";

export default {
  name: "dashboard-jobs",
  computed: {
    ...mapGetters(["allBlogPosts", "allPreviewBlogPosts", "allJobs", "allPreviewJobs"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Blog" : "Edit Blog";
    }
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

    this.fetchJobs();
    this.fetchPreviewJobs();

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
      "unPublishBlog",
      "uploadBlogAsset",
      "addBlog",

      "fetchJobs",
      "fetchPreviewJobs"
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
    },
    async submit() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.dialogLoading = true;
        try {
          const authorAvatarAsset = await this.uploadBlogAsset({
            image: this.editedBlog.authorAvatar,
            type: "author avatar",
            blog: this.editedBlog
          });

          const blogPostImageAsset = await this.uploadBlogAsset({
            image: this.editedBlog.authorAvatar,
            type: "blog post image",
            blog: this.editedBlog
          });

          await this.addBlog({
            ...this.editedBlog,
            authorAvatarAsset,
            blogPostImageAsset,
            entryId: uuidv4(),
            publishDate: moment().format()
          });
          this.dialogLoading = false;

          this.handleAlert({
            title: "Blog Post Created Successfully",
            text: "",
            icon: "success"
          });
          this.closeDialog();
        } catch (error) {
          this.dialogLoading = false;
          this.handleAlert({
            title: "Blog Post Not Created",
            text: "Please try again",
            icon: "error"
          });
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    closeDialog() {
      this.$refs.form.resetValidation();
      this.dialog = false;
    },
    editItem(item) {
      this.editedIndex = this.combinedBlogPosts.indexOf(item);
      this.editedBlog = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedBlog = Object.assign({}, this.defaultBlog);
        this.editedIndex = -1;
      });
    },
    blogPostImageChangeHandler(event) {
      this.editedBlog.blogPostImage = event;
    },
    authorAvatarChangeHandler(event) {
      this.editedBlog.authorAvatar = event;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  data: () => ({
    search: "",
    expanded: [],
    singleExpand: false,
    loading: false,
    dialogLoading: false,
    combinedBlogPosts: [],
    dialog: false,
    editedIndex: -1,
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
    ],
    valid: true,
    defaultBlog: {
      title: "",
      author: "",
      youtubeLink: "",
      category: null,
      description: "",
      authorAvatar: null,
      blogPostImage: null
    },
    editedBlog: {
      title: "",
      author: "",
      youtubeLink: "",
      category: null,
      description: "",
      authorAvatar: "",
      blogPostImage: ""
    },
    // author: '',
    authorRules: [v => !!v || "Author is required"],
    // title: '',
    titleRules: [v => !!v || "Title is required"],
    // youtubeLink: '',
    // category: null,
    youtubeLinkRules: [v => !!v || "Youtube Link is required"],
    authorAvatarRules: [v => !!v || "Author Avatar  is required"],
    blogPostImageRules: [v => !!v || "Blog Post Image  is required"],
    // description: '',
    descriptionRules: [v => !!v || "Description is required"],
    select: null,
    catergories: [
      "Immigration",
      "Work Culture",
      "Social Life",
      "Travel",
      "Housing"
    ],
    checkbox: false
  })
};
</script>
<style lang="scss">
.v-application--wrap {
  height: 100%;
  min-height: 100%;
}
</style>
