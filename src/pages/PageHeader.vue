<template>
   <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title company-name">TeaZeaP Recruiting Agency</h1>
          <div class="text-center row">
            <div class="col-12">
              <router-link
                  :to="{ name: 'JobsMain' }"
                  tag="button"
                  class="btn btn-primary btn-round btn-md"
                  >{{ $t("nav.apply-now") }}</router-link
                >
            </div>
            <div class="col-12">
              <a
                href="https://www.facebook.com/teazeap"
                target="_blank"
                class="btn btn-primary btn-icon btn-round mx-2"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/teazeap/"
                class="btn btn-primary btn-icon btn-round"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
   name: "page-header"
}
</script>