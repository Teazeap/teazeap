<template>
    <div class="card col-12 col-md-6 col-lg-4 col-xl-2 ">
      <img class="card-img-top" :src="job.imageUrl[0]" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">{{ job.school }}</h4>
        <h6>
        <i class="now-ui-icons location_pin"></i> {{ job.city }}
        </h6>
      </div>
      <div class="card-footer mt-7">
        <router-link :to="{name: 'JobInfo', params: {id:job.id}}" tag="button" class="btn btn-primary stretched-link">View Job</router-link>
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
    }
  }
}
</script>
