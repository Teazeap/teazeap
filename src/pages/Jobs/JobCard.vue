<template>
  <!-- <div class="col-md-6 col-lg-4 col-xl-4  py-2">
      <div class="card h-100">
        <div>
          <img class="card-img-top " :src="job.imageUrl[0]" alt="Card image cap" style="width:100%; height: 230px">
        </div>
        <div class="card-body" style="margin-bottom: -15px">
          <h4 class="card-title">{{ job.school }}</h4>
           <div class="row">
            <div class="col-6">
              <h6>
                <i class="now-ui-icons location_pin"></i> {{ job.city }}
              </h6>
            </div>
            <div class="col-6">
              <h6>
                <img src="img/eye.png" style="width:12%; height: 12%"> {{ job.views + 4 }}
              </h6>
            </div>
          </div>
          <div class="row mb-n3">
            <div class="col-5 text-success">{{ job.resumes.length + 4}} applicants</div>
            <div class="col-7" style="color: #f96332">posted: {{ postedAt(job.createdAt) }}</div>
          </div>
        </div>
        <div class="card-footer mt-7" v-if="isLink">
          <router-link :to="{name: 'JobInfo', params: {id:job.id}}" tag="button" class="btn btn-primary stretched-link">View Job</router-link>
        </div>
      </div>
    </div> -->
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
        <!--
        <v-card-text>
          <v-row align="center" class="mx-0">
            <div>
              {{ profile.country[0].name }}
            </div>

            <div class="grey--text ml-1">
              <country-flag :country="profile.country[0]['alpha-2']" size="small"
              />
            </div>
          </v-row>
        </v-card-text>

        <v-card-text class="d-flex justify-end justify-space-between pt-2 pb-2">
          <div class="d-flex">
            <div class="mr-2 font-weight-medium">
              Teaching Experience:
            </div>
            <div>
              {{ profile.teachingExperience }}
            </div>
          </div>

          <div class="d-flex">
            <div class="mr-2 font-weight-medium">
              Years In Taiwan:
            </div>
            <div>
              {{ profile.yearsInTaiwan }}
            </div>
          </div>
        </v-card-text> -->

        <v-card-actions class="pt-0 d-flex justify-content-center">
          <router-link
            :to="{ name: 'JobInfo', params: { id: job.id } }"
            tag="button"
            class="btn btn-primary view-job stretched-link"
            >View Job</router-link
          >
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
