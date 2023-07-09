<template>
  <v-card
    outlined
    :class="['mx-auto', 'card', loading ? 'show' : 'hide']"
    :style="marginStyle"
    :elevation="4"
    :height="height"
    :min-height="height"
    :max-height="height"
  >
    <div class="image-placeholder placeholder"></div>
    <div class="title-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
    <div class="text-placeholder placeholder"></div>
  </v-card>
</template>

<script>
export default {
  name: "ContentPlaceholder",
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: () => true,
    },
    height: {
      type: Number,
      default: () => 450,
    },
    margin: {
      type: Number,
      default: () => 450,
    },
  },
  computed: {
    marginStyle() {
      return { margin: `-${this.margin}px auto 0 auto !important` };
    },
  },
};
</script>

<style scoped>
.card {
  aspect-ratio: 4 / 5;
  background: #fff;
  padding: 1rem;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 24px !important;
  height: 100% !important;
  margin: -450px auto 0 auto !important;
  width: 100%;
  overflow: hidden
}

.hide {
  opacity: 0;
  z-index: -4
}

.show {
  opacity: 1;
}
.placeholder {
  background: #eee;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.placeholder:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, #eee, #f4f4f4, #eee);
  animation: gradient 1s infinite ease-in-out;
}
.image-placeholder {
  aspect-ratio: 16 / 12;
  margin-bottom: 1rem;
}
.title-placeholder {
  aspect-ratio: 16 / 1.5;
  margin-bottom: 2rem;
}
.text-placeholder {
  aspect-ratio: 16 / 1;
  margin-top: 1rem;
  margin-bottom: 0;
}
@keyframes gradient {
  form {
    left: 0%;
  }

  to {
    left: 100%;
  }
}
</style>
