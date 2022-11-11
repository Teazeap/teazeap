<template>
  <div class="col-md-6 col-lg-4 col-xl-4  py-2">
    <!-- <div class="card h-100">
      <div>
        <img
          class="card-img-top "
          :src="profilePicUrl"
          alt="Card image cap"
          style="width:100%; height: 230px"
        />
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
    </div> -->
    <v-app id="inspire">
      <v-card class="mx-auto" max-width="344">
        <v-img :src="profilePicUrl" height="200px"></v-img>

        <v-card-title> {{ profile.name }} {{ profile.surname }} </v-card-title>

        <v-card-subtitle>
          {{ profile.country }}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text  @click="show = !show">
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

            <v-card-text>
              {{ profile.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "profile-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    profile: {
      type: Object,
      required: true,
      default: () => {}
    },
    isLink: {
      type: Boolean,
      default: () => true
    }
  },
  computed: {
    profilePicUrl() {
      return `https:${this.profile.imageUrl}`;
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    postedAt(date) {
      const createdAt = moment(new Date(date));
      const now = moment(new Date());
      return createdAt.from(now);
    }
  }
};
</script>
