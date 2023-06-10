<template>
  <div class="col-12">
    <el-collapse v-model="activeNames">
  <el-collapse-item :title="handleTitle(index, process.title)" :name="handleName(index)" v-for="(process, index) in processes" :key="index">
    <div>
      <span v-html="process.content"></span>
    </div>
  </el-collapse-item>
</el-collapse>
    <!-- <div
      v-for="(process, index) in processes"
      :key="index"
      :class="{ open: index === 0 }"
      class="collapsible-container"
    >
      <button class="collapsible" :class="[{ active: index === 0}, selectorId]">
        {{ `${index + 1}. ${process.title}` }}
      </button>
      <div class="text">
        <span v-html="process.content"></span>
      </div>
    </div> -->
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
      default: () => 'collapsible-default',
    }
  },
  mounted() {
    // console.log(this.processes[0].title);
    // let coll = document.getElementsByClassName(this.selectorId);
    // let i;

    // coll[0].nextElementSibling.style.maxHeight =
    //   coll[0].nextElementSibling.scrollHeight + "px";

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function () {
    //     this.classList.toggle("active");
    //     this.parentElement.classList.toggle("open");
    //     let content = this.nextElementSibling;
    //     if (content.style.maxHeight) {
    //       content.style.maxHeight = null;
    //     } else {
    //       content.style.maxHeight = content.scrollHeight + "px";
    //     }
    //   });
    // }
  },
  methods: {
    handleTitle (index, title) {
      return `${index + 1}. ${title}`
    },
    handleName (index) {
      return `${index + 1}`
    }
  },
  data() {
    return {
      activeNames: ['1']
    }
  }
};
</script>
<style lang="scss" scoped>
.collapsible {
  background-color: #fafcff;
  color: #333;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: 1px solid #f3cabd;
  border-radius: 12px;
  text-align: left;
  outline: none;
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 700;

  &.active {
    border: none;
    background-color: white;
  }

  &.active:hover {
    border: none;
    background-color: white;
    color: #333;
  }

  &.active:hover:after {
    content: "\2212";
    color: #333;
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }
}

.collapsible:hover {
  background-color: #f96332;
  color: white;
}

.collapsible:hover:after {
  content: "\002B";
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.collapsible:after {
  content: "\002B";
  color: #333;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.collapsible-container {
  &.open {
    border: 1px solid #f3cabd;
    border-radius: 12px;
    margin-bottom: 10px;
  }
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
