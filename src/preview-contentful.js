import { createClient } from "contentful";

export default createClient ({
  space: process.env.VUE_APP_SPACE,
  accessToken: process.env.VUE_APP_CONTENT_PREVIEW_ACCESSTOKEN,
  host: "preview.contentful.com"
});