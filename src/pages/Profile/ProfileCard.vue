<template>
  <div class="col-md-6 col-lg-4 col-xl-4 py-2">
    <v-app id="inspire">
      <v-card class="mx-auto profile-card" width="350" :elevation="4">
        <v-img
          :src="profilePicUrl"
          height="350px"
          @loadstart="loading = true"
          @load="loading = false"
        ></v-img>

        <v-card-title>
          {{ profile.firstName }} {{ profile.lastName }}
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <div>
              {{ profile.country[0].name }}
            </div>

            <div class="grey--text ml-1">
              <country-flag
                :country="profile.country[0]['alpha-2']"
                size="small"
              />
            </div>
          </v-row>
        </v-card-text>

        <v-card-text class="d-flex justify-end justify-space-between pt-2 pb-2">
          <div class="d-flex">
            <div class="mr-2 font-weight-medium">Teaching Experience:</div>
            <div>
              {{ profile.teachingExperience }}
            </div>
          </div>

          <div class="d-flex">
            <div class="mr-2 font-weight-medium">Years In Taiwan:</div>
            <div>
              {{ profile.yearsInTaiwan }}
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn style="color: #f96332" text @click="show = !show">
            View more
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text class="text-justify">
              {{ profile.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <ContentPlaceholder :loading="loading" :height="510" :margin="510" />
    </v-app>
  </div>
</template>

<script>
import moment from "moment";
import ContentPlaceholder from "../../components/ContentPlaceholder.vue";

export default {
  name: "profile-card",
  bodyClass: "profile-page",
  components: { ContentPlaceholder },
  props: {
    profile: {
      type: Object,
      required: true,
      default: () => {},
    },
    isLink: {
      type: Boolean,
      default: () => true,
    },
  },
  computed: {
    profilePicUrl() {
      return `https:${this.profile.imageUrl}`;
    },
  },
  data: () => ({
    show: false,
    loading: true,
  }),
  methods: {
    postedAt(date) {
      const createdAt = moment(new Date(date));
      const now = moment(new Date());
      return createdAt.from(now);
    },
  },
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
}
</style>
