export default {
    data() {
      return {
        windowWidth: window.innerWidth,
        margin: null,
        breadCrumMargin: null,
        headerMargin: null,
        footerMargin: null,
        width: null,
        maxWidth: null
      };
    },
    watch: {
      windowWidth: {
        handler(windowWidth) {
          this.$emit("onWindowWidthChange", windowWidth);
        }
      }
    },
    computed: {
      isMobile() {
        return this.windowWidth <= 800;
      },
      isXS() {
        return this.windowWidth <= 768;
      },
      isSM() {
        return this.windowWidth > 768 && this.windowWidth <= 991;
      },
      isMD() {
        return this.windowWidth > 992 && this.windowWidth <= 1199;
      },
      isLG() {
        return this.windowWidth > 1200 && this.windowWidth <= 1919;
      },
      isXL() {
        return this.windowWidth >= 1920;
      },
      commonMarginClass() {
        return {
          marginLeft: `${this.headerMargin}px`,
          marginRight: `${this.headerMargin}px`,
        };
      }
    },
    created() {
      this.$on("onWindowWidthChange", windowWidth => {
        this.handlescreenWidthChange(windowWidth);
      });
    },
    mounted() {
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
      this.handlescreenWidthChange(this.windowWidth);
    },
    methods: {
      handlescreenWidthChange(windowWidth) {
        this.width = null;
        this.maxWidth = null;

        if (windowWidth >= 1350) {
          let offset = (windowWidth - 1080) / 2;
          this.margin = offset;
          this.breadCrumMargin = this.margin;
          this.headerMargin = this.margin;
          this.footerMargin = this.margin;
          this.width = "100%";
          this.maxWidth = "1080px";
        }

        // When 981px ≤ width < 1,350px, the main content has 100px margin on the left and the right.

        if (windowWidth >= 981 && windowWidth < 1350) {
          this.margin = 100;
          this.headerMargin = this.margin;
          this.footerMargin = this.margin;
          this.breadCrumMargin = this.margin;
        }

        // When width < 981px, the main content has 5% margin on the left and the right. 5% here means 5% of the entire width of the page.

        if (windowWidth < 981) {
          this.margin = windowWidth * 0.05;
          this.headerMargin = this.margin;
          this.footerMargin = this.margin;
          this.breadCrumMargin = this.margin;
        }
      },
    },
    destroy() {
      window.removeEventListener("resize");
    }
  };
