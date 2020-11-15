<template>
    <div class="col-md-6 col-lg-4 col-xl-4  py-2">
      <div class="card h-100">
        <div>
          <img class="card-img-top " :src="job.imageUrl[0]" alt="Card image cap" style="width:100%; height: 230px">
        </div>
        <div class="card-body">
          <h4 class="card-title">{{ job.school }}</h4>
          <h6>
          <i class="now-ui-icons location_pin"></i> {{ job.city }}
          </h6>
        </div>
        <div class="card-footer mt-7" v-if="isLink">
          <router-link :to="{name: 'AdminJobInfo', params: {id:job.id}}" tag="button" class="btn btn-primary stretched-link">View Job</router-link>
        </div>
      </div>
    </div>
</template>    

<script>
export default {
  name: 'job-card',
  bodyClass: 'profile-page',
  components: {
  },
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
  }
}
</script>
