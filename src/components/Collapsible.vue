<template>
    <div class="col-12">
      <div v-for="(process, index) in processes" :key="index" :class="{open: index === 0}" class="collapsible-container">
        <button class="collapsible" :class="{active: index === 0}">{{`${index + 1}. ${process.title}`}}</button>
        <div class="text">
        <p>{{process.content}}</p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "Collapsible",
    mounted() {
      let coll = document.getElementsByClassName("collapsible");
      let i;

      coll[0].nextElementSibling.style.maxHeight = coll[0].nextElementSibling.scrollHeight + "px";

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("open");
          let content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    },
    data: () => ({
      processes: [
        {
          id: 1,
          title: "CHOOSE YOUR TEAM",
          content: "Interview and select your telemarketers. All college educated, non-accented, and rigorously trained in sales skills."
        },
        {
          id: 2,
          title: "USE OUR TOOLS",
          content: "You just provide the script, call list, and schedule. New to lead gen? No problem! We'll help you establish best practices for success."
        },
        {
          id: 3,
          title: "USE OUR TOOLS",
          content: "We reduce costs and hassle. You manage your telemarketers directly. Stop wasting money. Start getting results"
        }
      ]
  })
}
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
    content: '\2212';
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
  content: '\002B';
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.collapsible:after {
  content: '\002B';
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
  transition: max-height 0.2s ease-out;
}
</style>