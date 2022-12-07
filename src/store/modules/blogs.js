import * as contentful from "contentful-management";
import { createClient } from "contentful";
const ContentfulConfig = require("../../contentful-config");

const contentType = "application/pdf";
let config = ContentfulConfig.getConfig(true);
var client = contentful.createClient({
  accessToken: process.env.VUE_APP_ACCESS_TOKEN
});

// cdn.contentful.com
config = ContentfulConfig.getConfig(false);
const Client = createClient(config);

// preview.contentful.com
config = ContentfulConfig.getConfig(true);
const PreviewClient = createClient(config);

const state = {
  blogPosts: [],
  previewBlogPosts: [],
  asset: {},
  assets: []
};
const getters = {
  allBlogPosts: state => state.blogPosts,
  allPreviewBlogPosts: state => state.previewBlogPosts
};
const actions = {
  async fetchBlogPosts({ commit, dispatch }) {
    const response = await Client.getEntries({
      content_type: "blogPosts"
    });
    let formattedBlogPosts = response.items.map(post => {
      let authorAvatarUrl = post.fields.authorAvatar.fields.file.url;
      let blogPostImageUrl = post.fields.blogPostImage.fields.file.url;
      let formattedBlogPost = {
        ...post.fields,
        ...post.sys,
        authorAvatarUrl,
        blogPostImageUrl
      };
      return formattedBlogPost;
    });

    commit("setBlogPosts", formattedBlogPosts);
  },
  async fetchPreviewBlogPosts({ commit, dispatch }) {
    const response = await PreviewClient.getEntries({
      content_type: "blogPosts"
    });

    let formattedBlogPosts = response.items.map(post => {
      let authorAvatarUrl = post.fields.authorAvatar.fields.file.url;
      let blogPostImageUrl = post.fields.blogPostImage.fields.file.url;
      let formattedBlogPost = {
        ...post.fields,
        ...post.sys,
        authorAvatarUrl,
        blogPostImageUrl
      };
      return formattedBlogPost;
    });

    commit("setPreviewBlogPosts", formattedBlogPosts);
  },
  async addBlog({ commit, dispatch }, blog) {
    // Create blog
    const {
      title,
      author,
      category,
      youtubeLink,
      description,
      authorAvatarAsset,
      blogPostImageAsset,
      entryId,
      publishDate
    } = blog;

    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment =>
          environment.createEntryWithId("blogPosts", entryId, {
            fields: {
              title: {
                "en-US": title
              },
              author: {
                "en-US": author
              },
              category: {
                "en-US": category
              },
              description: {
                "en-US": description
              },
              youtubeLink: {
                "en-US": youtubeLink
              },
              youtubeLink: {
                "en-US": youtubeLink
              },
              publishDate: {
                "en-US": publishDate
              },
              authorAvatar: {
                "en-US": {
                  sys: {
                    id: authorAvatarAsset.sys.id,
                    linkType: "Asset",
                    type: "Link"
                  }
                }
              },
              blogPostImage: {
                "en-US": {
                  sys: {
                    id: blogPostImageAsset.sys.id,
                    linkType: "Asset",
                    type: "Link"
                  }
                }
              }
            }
          })
        )
        .then(asset => asset.publish())
        .then(asset => {
          dispatch("fetchBlogPosts");
          dispatch("fetchPreviewBlogPosts");
          resolve(asset);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async publishBlog({ commit, dispatch }, entryId) {
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment => environment.getEntry(entryId))
        .then(entry => entry.publish())
        .then(entry => {
          dispatch("fetchBlogPosts");
          dispatch("fetchPreviewBlogPosts");
          resolve(entry);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async unPublishBlog({ commit, dispatch }, entryId) {
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment => environment.getEntry(entryId))
        .then(entry => entry.unpublish())
        .then(entry => {
          dispatch("fetchBlogPosts");
          dispatch("fetchPreviewBlogPosts");
          resolve(entry);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  async fetchAssets({ commit }) {
    const response = await Client.getAssets();
    commit("setAssets", response.items);
  },
  async uploadBlogAsset({ commit, dispatch }, payload) {
    const { image, blog, type } = payload;
    return new Promise((resolve, reject) => {
      client
        .getSpace(process.env.VUE_APP_SPACE)
        .then(space => space.getEnvironment(config.environment))
        .then(environment =>
          environment.createAssetFromFiles({
            fields: {
              title: {
                "en-US": image.name
              },
              description: {
                "en-US": `${type} for ${blog.title}`
              },
              file: {
                "en-US": {
                  contentType: "image/jpeg",
                  fileName: image.name,
                  file: image
                }
              }
            }
          })
        )
        .then(asset => asset.processForAllLocales())
        .then(asset => asset.publish())
        .then(asset => {
          resolve(asset);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateView({ commit, dispatch }, entryId) {
    client
      .getSpace(process.env.VUE_APP_SPACE)
      .then(space => space.getEnvironment(config.environment))
      .then(environment => environment.getEntry(entryId))
      .then(entry => {
        // assign uploaded image as an entry field
        let currentViews = entry.fields["views"]["en-US"];
        entry.fields["views"]["en-US"] = currentViews + 1;
        return entry.update();
      })
      .then(entry => {
        entry.publish();
        dispatch("fetchJobs");
        resolve(entry);
      });
  }
};
const mutations = {
  setBlogPosts: (state, blogPosts) => (state.blogPosts = blogPosts),
  setPreviewBlogPosts: (state, previewBlogPosts) =>
    (state.previewBlogPosts = previewBlogPosts)
};

export default {
  state,
  getters,
  actions,
  mutations
};
