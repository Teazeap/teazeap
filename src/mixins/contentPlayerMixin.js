import $ from "jquery";

export default {
  methods: {
    handleContentPipelie() {

        $("audio").on("play", function () {
          $("audio")
            .not(this)
            .each(function (index, audio) {
              audio.pause();
            });

          //   pause all videos when audio is playing

          $("video").each(function (index, video) {
            video.pause();
          });
        });

        $("video").on("play", function () {
          $("video")
            .not(this)
            .each(function (index, video) {
              video.pause();
            });

          //   pause all audio when audio is playing
          $("audio")
            .not(this)
            .each(function (index, audio) {
              audio.pause();
            });
        });
    },
  },
};
