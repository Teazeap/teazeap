<template>
  <component
    :is="componentType"
    :to="to"
    :text="text"
    class="dropdown-item"
    @click="onLanguageChange"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: "nav-link",
  inject: ["closeNavbar"],
  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "link",
    }
  },
  computed: {
    componentType() {
      return this.to ? "router-link" : "a";
    },
  },
  methods: {
    closeNav() {
      if (this.closeNavbar) {
        this.closeNavbar();
      }
      if (this.closeDropDown) {
        this.closeDropDown();
      }
    },
    onLanguageChange() {
      if (this.text) {
        this.$emit("onLanguageChange", this.text);
      }

      if (this.type === "phone-number")
      this.$emit("onPhoneNumberClicked");
    },
  },
};
</script>
<style></style>
