<template>
  <component
    class="dropdown"
    :is="tag"
    :class="[
      { show: isOpen },
      { dropdown: direction === 'down' },
      { dropup: direction === 'up' }
    ]"
    aria-haspopup="true"
    :aria-expanded="isOpen"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    <slot name="title">
      <a
        class="dropdown-toggle nav-link"
        :class="{ 'no-caret': hideArrow, 'highlight': isHighlighted }"
        data-toggle="dropdown"
      >
        <font-awesome-icon :icon="icon" v-if="isFa" class="mr-1" />
        <i :class="icon" v-else></i>
        <span class="no-icon">{{ title }}</span>
      </a>
    </slot>
    <ul
      class="dropdown-menu"
      :class="[
        { 'dropdown-menu-right': position === 'right' },
        { show: isOpen }
      ]"
    >
      <slot></slot>
    </ul>
  </component>
</template>
<script>
export default {
  name: 'drop-down',
  props: {
    direction: {
      type: String,
      default: 'down'
    },
    title: String,
    icon: String,
    position: String,
    isFa:  {
      type: Boolean,
      default: false
    },
    hideArrow: Boolean,
    isHighlighted: Boolean,
    tag: {
      type: String,
      default: 'li'
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  provide() {
    return {
      closeDropDown: this.closeDropDown
    }
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit('change', this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit('change', this.isOpen);
    }
  }
};
</script>
<style>
.dropdown {
  list-style-type: none;
}

.dropdown .dropdown-toggle {
  cursor: pointer;
}
.highlight {
  background-color: #f96332;
  border-radius: 8px;
}

.highlight:hover{
  border-radius: 8px;
  background-color: #f96332 !important;
}

.dropdown-toggle::after {
  margin-bottom: -2px;
}
</style>
