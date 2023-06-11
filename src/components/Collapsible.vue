<template>
  <div class="col-12">
    <el-collapse v-model="activeNames">
      <el-collapse-item
        :title="handleTitle(index, process.title)"
        :name="handleName(index)"
        v-for="(process, index) in processes"
        :key="index"
      >
        <div>
          <span class="item-content" v-html="process.content"></span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  name: "Collapsible",
  props: {
    processes: {
      type: Array,
      required: true,
      default: () => [],
    },
    selectorId: {
      type: String,
      default: () => "collapsible-default",
    },
  },
  methods: {
    handleTitle(index, title) {
      return `${index + 1}. ${title}`;
    },
    handleName(index) {
      return `${index + 1}`;
    },
  },
  data() {
    return {
      activeNames: ["1"],
    };
  },
};
</script>
<style lang="scss" scoped>

.el-collapse {
  border: none;
}

.el-collapse-item {
  border-width: 1px;
  border-style: solid;
  border-color: rgb(243, 202, 189);
  border-image: initial;
  border-radius: 12px;
  padding: 0px 8px 0px 8px;
  margin: 8px 0px;
}

::v-deep(.el-collapse-item__header) {
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
}

.item-content {
  font-size: 13px;
}

.text {
  max-height: 0;
  overflow: hidden;
  padding: 0 18px;
  text-align: justify;
  transition: max-height 0.2s ease-out;

  span {
    font-size: 16.8px;
  }

  ul {
    margin-left: 2rem;
  }
}
</style>
