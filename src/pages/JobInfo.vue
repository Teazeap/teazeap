<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg5.jpg')"
      >
      </parallax>
      <div class="container">
        <h1 class="title">Teazeap's Record Infobdbdbdb</h1>
        <p class="category">Join our ever expanding clientele</p>
        <div class="content">
          <div class="social-description">
            <h2>26</h2>
            <p>Current Jobs</p>
          </div>
          <div class="social-description">
            <h2>26</h2>
            <p>Clients</p>
          </div>
          <div class="social-description">
            <h2>48</h2>
            <p>Schools</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
        <div class="button-container">
          <a href="#button" class="btn btn-primary btn-round btn-lg">Follow</a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Twitter"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="#button"
            class="btn btn-default btn-round btn-lg btn-icon"
            rel="tooltip"
            title="Follow me on Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="row">
          Details for a single job
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from '@/components';

export default {
  name: 'JobInfo',
  bodyClass: 'profile-page',
  components: {
  }
};
</script>
<style></style>
