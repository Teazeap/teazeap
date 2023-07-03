<template>
  <div class="col-md-6 col-lg-4 col-xl-4  py-2">
    <v-app id="inspire">
      <v-card class="mx-auto profile-card" width="350" :elevation="4">
        <v-img :src="job.imageUrl[0]" height="350px"></v-img>

        <v-card-title class="d-flex  team-name justify-content-center"
          >{{ job.school }}
        </v-card-title>
        <v-card-text class="d-flex justify-end justify-space-between pt-2 pb-2">
          <div class="d-flex">
            <div class="mr-2 font-weight-medium">
              <h6><i class="now-ui-icons location_pin"></i> {{ job.city }}</h6>
            </div>
          </div>

          <div class="d-flex">
            <div class="mr-2 font-weight-medium">
              <h6>
                <img src="img/eye.png" style="width:50%; height: 50%" />
                {{ job.views + 4 }}
              </h6>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="pt-0 d-flex justify-content-center">
          <router-link
            :to="{ name: 'JobInfo', params: { id: job.id } }"
            tag="button"
            class="btn btn-primary view-job stretched-link"
          >
            {{$t("viewJob")}}
          </router-link>
        </v-card-actions>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "job-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    job: {
      type: Object,
      required: true,
      default: () => {}
    },
    isLink: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    postedAt(date) {
      const createdAt = moment(new Date(date));
      const now = moment(new Date());
      return createdAt.from(now);
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
}

.team-name {
  font-size: 24px;
}

.view-job {
  border-radius: 24px !important;
}
</style>
