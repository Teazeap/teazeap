<template>
  <div class="col-12">
    <div
      v-for="(process, index) in processes"
      :key="index"
      :class="{ open: index === 0 }"
      class="collapsible-container"
    >
      <button class="collapsible" :class="{ active: index === 0 }">
        {{ `${index + 1}. ${process.title}` }}
      </button>
      <div class="text">
        <span v-html="process.content"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collapsible",
  props: {
    processes: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    coll[0].nextElementSibling.style.maxHeight =
      coll[0].nextElementSibling.scrollHeight + "px";

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("open");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  },
  // data: () => ({
  //   processes: [
  //     {
  //       id: 1,
  //       title: "UNDERSTAND CUSTOMER NEEDS",
  //       content:
  //         "Teazeap would start by understanding the customer's business requirements, target audience, and sales goals. Based on this information, we would recommend the most appropriate virtual telemarketing service to meet the customer's needs.",
  //     },
  //     {
  //       id: 2,
  //       title: "CONFIGURE INFRASTRUCTURE",
  //       content:
  //         "Once the service is chosen, Teazeap would configure the necessary infrastructure, including software, hardware, and network components. This would ensure that the virtual telemarketing service is set up correctly and functions optimally.",
  //     },
  //     {
  //       id: 3,
  //       title: "TRAIN AGENTS",
  //       content:
  //         "Teazeap would provide comprehensive training to agents on how to use the virtual telemarketing service effectively, including best practices for managing calls, handling objections, and closing sales. This training would help agents to provide top-quality service to customers and achieve the customer's sales goals.",
  //     },
  //   ],
  // }),
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
