<template>
  <drop-down
    tag="li"
    icon="now-ui-icons business_globe"
    :class="['nav-item',  'nav-ul', buttonClass]"
  >
    <nav-link text="en" @onLanguageChange="onLanguageChange">
      <country-flag country="gb" size="small" /> English
    </nav-link>
    <nav-link text="zh" @onLanguageChange="onLanguageChange">
      <country-flag country="cn" size="small" />
      中文
    </nav-link>
  </drop-down>
</template>
<script>
import { DropDown, NavLink } from "@/components";
export default {
  name: "language-switcher",
   props: {
    buttonClass: {
      type: String,
      default: () => ""
    },
  },
    components: {
    DropDown,
    NavLink,
  },
  computed: {
    language() {
      return this.$t("nav.language");
    },
  },
  methods: {
    onLanguageChange(language) {
      this.$i18n.locale = language === "en" ? "en" : "zh";
      localStorage.setItem("teapZeapLang", this.$i18n.locale);
    },
  }
};
</script>
