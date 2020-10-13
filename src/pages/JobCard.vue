<template>
  <div class="col-md-6 col-lg-4">
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="img/avatar.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <router-link :to="{name: 'JobInfo', params: {id:3}}" tag="button" class="btn btn-primary">View Job</router-link>
        <!-- <router-link :to="{name: 'JobInfo', params: {id:3}}" tag="button" class="btn btn-primary">add share button</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'job-card',
  bodyClass: 'profile-page',
  components: {
  }
}
</script>
