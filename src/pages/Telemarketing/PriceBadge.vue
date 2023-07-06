<template>
  <div :id="plan.id" class="pt-0" :style="commonMarginClass">
    <div class="container price-badge-container">
      <div class="row">
        <v-col cols="12">
          <div class="card-container">
            <h1 class="card-title">{{$t(plan.name)}}</h1>
            <p class="card-description">{{$t('telemarketingPage.singleAgent.avatarPlan.what-get')}}</p>
            <ul class="card-get_list">
              <li v-for="p,index in plan.points" :key="index" class="card-get_list__item">{{$t(p)}}</li>
            </ul>
            <div class="card-price">
              <h2>${{plan.price}}</h2>
              /<span class="card-price_month">{{$t('telemarketingPage.singleAgent.avatarPlan.hour')}}</span>
            </div>
            <button @click="$emit('get-plan')" class="card-main_button">{{$t('telemarketingPage.singleAgent.avatarPlan.get-plan')}}</button>
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import sizeMixin from "@/plugins/sizeMixin.js";

export default {
  name: "PriceBadge",
  mixins: [sizeMixin],
   components: {
  },
  props: {
    plan: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data () {
    return {
      openDialog: false
    }
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext");

$font-family-main: "Poppins", sans-serif;
$main-color: #f96332;

@mixin transition($time, $property) {
  -webkit-transition: $time $property ease;
  -ms-transition: $time $property ease;
  transition: $time $property ease;
}

.card-container {
  z-index: 5;
  position: relative;
  font-family: $font-family-main;
  max-width: 350px;
  height: auto;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 23px 20px;
  box-shadow: 0 0 5px 5px $main-color;
  animation: shadow-box 2s linear infinite;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s;
  }
}

.card:hover {
  animation-play-state: paused;
}

.card-title {
  font-size: 27px;
  font-weight: 600;
}

.card-description {
  margin-top: 23px;
  font-size: 18px;
  opacity: 0.5;
}

.card-get_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 23px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
  padding-bottom: 15px;
}

.card-get_list__item {
  list-style: none;
  display: flex;
  align-items: center;
}
.card-get_list__item::before {
  content: "";
  display: inline-block;
  height: 20px;
  margin-right: 10px;
  width: 20px;
  background-image: url("../../assets/img/checkmark-1.svg");
  background-size: cover;
}


.card-price {
  display: flex;
  width: max-content;
  height: max-content;
  align-items: center;
  margin-top: 43px;
  font-size: 18px;
}

.card-price_month {
  font-size: 16px;
}

.card-main_button {
  width: 100%;
  margin-top: 15px;
  height: 55px;
  font-size: larger;
  font-weight: 500;
  font-family: $font-family-main;
  color: #fff;
  border: none;
  cursor: pointer;
  background: linear-gradient(90deg, #bd8f8f, $main-color);
  border-radius: 8px;
  /* box-shadow: 5px 5px 10px var($main-color), -10px -5px 15px #66edff; */
  letter-spacing: 1px;
  text-shadow: 0px 0px 5px #34343430;
  transition: all 0.3s ease-in-out;
}

.card-main_button:hover {
  box-shadow: none;
}

.price-badge-container {
  max-width: 350px !important;
  margin-top: 3rem;
}
</style>
