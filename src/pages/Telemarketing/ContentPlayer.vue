<template>
  <div class="col-md-6 col-lg-4 col-xl-4">
    <v-app id="inspire">
      <v-card
        outlined
        class="mx-auto profile-card"
        :elevation="4"
        :height="450"
        :min-height="450"
        :max-height="450"
      >
        <span v-if="content.isAudio">
          <v-img
            :src="content.picUrl"
            height="224"
            class="audio-picture"
            @loadstart="handleLoadStart"
            @load="handleLoadEnd"
          ></v-img>

          <v-card-title
            class="d-flex team-name text-primary justify-content-center"
          >
            {{ $t(content.name) }}
          </v-card-title>

          <v-card-text class="font-italic team-quote">
            {{ $t(content.message) }}
          </v-card-text>

          <v-card-text
            v-if="content.audioFileUrl"
            class="d-flex justify-center"
          >
            <audio controls>
              <source :src="content.audioFileUrl" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </v-card-text>
        </span>

        <span v-else>
          <video
            width="100%"
            height="100%"
            controls
            class="video-frame"
            ref="video"
            @canplaythrough="handleVideoLoad"
            :poster="content.poster"
          >
            <source :src="content.videoFileUrl" type="video/mp4" />
          </video>

          <v-card-title
            class="d-flex team-name text-primary justify-content-center"
          >
            {{ $t(content.name) }}
          </v-card-title>

          <v-card-text class="font-italic team-quote">
            {{ $t(content.message) }}
          </v-card-text>
        </span>
      </v-card>
      <ContentPlaceholder :loading="loading && content.isAudio" />
    </v-app>
  </div>
</template>

<script>
import ContentPlaceholder from "@/components/ContentPlaceholder.vue";
export default {
  name: "testimonial-card",
  bodyClass: "audio-player",
  components: { ContentPlaceholder },
  props: {
    content: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  computed: {},
  data() {
    return {
      loading: true,
    };
  },
  beforeUnmount() {
    const videoElement = this.$refs.video;
    videoElement.removeEventListener("canplaythrough", this.handleVideoLoad);
  },
  mounted() {
    const videoElement = this.$refs.video;
    if (videoElement) {
      videoElement.addEventListener("canplaythrough", this.handleVideoLoad);
    }
  },
  methods: {
    handleVideoLoad() {
      this.loading = false;
    },
    handleLoadStart() {
      this.loading = true;
    },
    handleLoadEnd() {
      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
.v-application--wrap {
  height: 620px !important;
  min-height: 100%;
  font-family: "Montserr" !important;

  a {
    color: white !important;
  }
}

.profile-card {
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 24px !important;
  height: 100% !important;
}

.profile-card:hover {
  transform: translateY(-2px);
  cursor: pointer;
}
.team-quote {
  font-size: 16px;
  min-height: 82px;
}
.team-name {
  font-size: 24px;
  font-weight: 500;
}

audio {
  border-radius: 12px;
  width: 100%;
}

.audio-picture {
  border-radius: 24px 24px 0px 0px;
}

.video-frame {
  border-radius: 24px 24px 0px 0px;
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 12px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  height: 225px;
  object-fit: cover;
}

.video-frame :hover {
  transform: translateY(-2px);
  cursor: pointer;
}
</style>
