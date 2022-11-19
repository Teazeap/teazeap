export const getConfig = previewMode => {
    let accessToken = "";
    let environment = "";

    if (process.env.NODE_ENV === "development") {
      environment = "staging";
    } else {
      environment =
        process.env.VUE_APP_TEAZEAP_CONTEXT === "branch-deploy"
          ? "staging"
          : "master";
    }

    if (environment === "staging") {
      if (previewMode) {
        accessToken = process.env.VUE_APP_STAGING_CONTENT_PREVIEW_ACCESSTOKEN;
      } else {
        accessToken = process.env.VUE_APP_STAGING_CONTENT_DELIVERY_ACCESSTOKEN;
      }
    } else {
      if (previewMode) {
        accessToken = process.env.VUE_APP_CONTENT_PREVIEW_ACCESSTOKEN;
      } else {
        accessToken = process.env.VUE_APP_CONTENT_DELIVERY_ACCESSTOKEN;
      }
    }

    return {
      accessToken,
      space: process.env.VUE_APP_SPACE,
      environment,
      host: previewMode ? "preview.contentful.com" : "cdn.contentful.com"
    };
  };

  module.export = {
    getConfig: getConfig
  };
