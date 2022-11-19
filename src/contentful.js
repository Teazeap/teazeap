import { createClient } from "contentful";

export default createClient ({
  space: process.env.VUE_APP_SPACE,
  accessToken: process.env.VUE_APP_CONTENT_DELIVERY_ACCESSTOKEN,
  host: "cdn.contentful.com"
});