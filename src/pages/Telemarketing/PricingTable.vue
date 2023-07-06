<template>
  <div class="pt-0" :style="commonMarginClass">
    <div class="container section-card">
      <h2 class="title text-center">{{$t("telemarketingPage.singleAgent.pricingTableHeader")}}</h2>
      <div class="row plan-container">
        <div
          v-for="(
            { isPopular, planName, planCost, planDetails, className }, id
          ) in plans"
          :key="id"
          :class="['pricing-card', `${className}`]"
        >
          <div v-if="isPopular" class="popular">POPULAR</div>
          <div class="pricing-header">
            <span class="plan-title">{{ planName }}</span>
            <div class="price-circle">
              <span class="price-title">
                <small>$</small><span>{{ planCost }}</span>
              </span>
              <span class="info">/ Hour</span>
            </div>
          </div>
          <div class="badge-box"></div>
          <ul>
            <li v-for="(point, id) in planDetails" :key="id">
              <span v-html="point"></span>
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="#" :class="['buy-now', `${className}`]" @click="$emit('get-plan')">GET PLAN</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sizeMixin from "@/plugins/sizeMixin.js";
export default {
  name: "PricingTable",
  mixins: [sizeMixin],
  props: {
    plans: {
      type: Array,
      default: () => [
        {
          isPopular: false,
          planName: "CALL CENTER",
          planCost: 9.5,
          planDetails: [
            "<strong> 3/more</strong> Agents and <strong>1</strong> Manager",
            "Multichannel",
            "Call Recording",
            "Quality Assurance",
            "Analytics",
          ],
          className: "pro",
        },
        {
          isPopular: false,
          planName: "FILTERING AVATAR",
          planCost: 9.5,
          planDetails: [
            "<strong>3</strong> Agents and <strong>1</strong> Manager",
            "Lead Management",
            "Reporting",
            "",
            "",
          ],
          className: "basic",
        },
        {
          isPopular: false,
          planName: "FILTERING SPECIALS",
          planCost: 10.5,
          planDetails: [
            "<strong>5/more</strong> Agents and <strong>1</strong> Manager",
            "Scripting",
            "CRM Integration",
            "Dialer",
            "Performance Metrics",
          ],
          className: "echo",
        },
        {
          isPopular: true,
          planName: "BUNDLE",
          planCost: 12,
          planDetails: [
            "Everything in <strong>Filtering Avatar </strong> ",
            "Everything in <strong>Filtering Specials</strong>",
            "Team Collaboration Features",
            "Lead Database Management",
            "Performance Tracking Tools",
          ],
          className: "business",
        },
      ],
    },
  },
};
</script>
<style scoped lang="scss">
$body-background: linear-gradient(to left, #a55eea, #45aaf2);
$radius: 20px;
$table-padding: 20px;
$break-small: 320px;
$break-large: 1200px;

$primary: #4b7bec;
$echo: #f7b731;
$pro: #26de81;
$business: #a55eea;

@mixin transition($time, $property) {
  -webkit-transition: $time $property ease;
  -ms-transition: $time $property ease;
  transition: $time $property ease;
}

.basic {
  border: 1px solid $primary;
  .pricing-header {
    background-color: $primary;
  }
  .price-circle {
    border: 10px solid $primary;
    transition: all 0.4s;
  }
  &:hover {
    .price-circle {
      border-width: 5px;
    }
  }
  .buy-now {
    &:hover {
      background-image: none !important;
      background-color: $primary !important;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    }
  }
}
.echo {
  border: 1px solid $echo;
  .pricing-header {
    background-color: $echo;
  }
  .price-circle {
    border: 10px solid $echo;
    transition: all 0.4s;
  }
  &:hover {
    .price-circle {
      border-width: 5px;
    }
  }
  .buy-now {
    &:hover {
      background-image: none !important;
      background-color: $echo !important;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    }
  }
}
.pro {
  border: 1px solid $pro;
  .pricing-header {
    background-color: $pro;
  }
  .price-circle {
    border: 10px solid $pro;
    transition: all 0.4s;
  }
  &:hover {
    .price-circle {
      border-width: 5px;
    }
  }
  .buy-now {
    &:hover {
      background-image: none !important;
      background-color: $pro !important;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    }
  }
}
.business {
  border: 1px solid $business;
  .pricing-header {
    background-color: $business;
  }
  .price-circle {
    border: 10px solid $business;
    transition: all 0.4s;
  }
  &:hover {
    .price-circle {
      border-width: 5px;
    }
  }
  .buy-now {
    &:hover {
      background-image: none !important;
      background-color: $business !important;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.4);
    }
  }
}
/* Card Themes - End */

body {
  background-image: url(https://pngimage.net/wp-content/uploads/2018/06/flat-design-background-png-3.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 20px;
}

.plan-container {
  max-width: 1200px;
  height: auto;
  margin-top: 3rem !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  grid-gap: 10px;
  padding: 24px 16px;
}

.pricing-card {
  @include transition(0.4s, background-color);
  height: 450px;
  width: 250px;
  background-color: white;
  -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
  border-radius: $radius;
  position: relative;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
  }

  .popular {
    position: absolute;
    top: 0;
    right: 5%;
    width: auto;
    padding: 10px;
    border-bottom-left-radius: $radius;
    border-bottom-right-radius: $radius;
    background-color: #eb3b5a;
    color: white;
    font-size: 12px;
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .badge-box {
    padding: 0 40px;
    margin-top: 80px;
    span {
      display: inline-block;
      border: 1px solid $primary;
      padding: 4px 12px;
      border-radius: 25px;
      overflow: hidden;
      color: $primary;
    }
  }

  .pricing-header {
    width: 100%;
    height: 150px;
    position: relative;
    border-radius: $radius $radius 0 0;
    -webkit-border-radius: $radius $radius 0 0;
    -moz-border-radius: $radius $radius 0 0;
    /*border-bottom: 20px solid $primary;*/
    /*
    border-radius: $radius $radius 150px 150px;
    -webkit-border-radius: $radius $radius 150px 150px;
    -moz-border-radius: $radius $radius 150px 150px;
    */

    .plan-title {
      font-size: 24px;
      color: white;
      position: relative;
      top: 25%;
    }

    .price-circle {
      width: calc(33.3% - 30px);
      width: 120px;
      height: 120px;
      border-radius: 100%;
      left: calc(50% - 60px);
      top: 60%;
      background-color: white;
      position: absolute;
      //box-shadow: 1px 3px 5px rgba(0, 0, 0, .4);
      .info {
        display: block;
        font-size: 12px;
        font-weight: bold;
        color: gray;
      }

      .price-title {
        display: block;
        font-size: 28px;
        padding: 28px 0 0;
        font-weight: bold;
        small {
          font-size: 18px;
        }
      }
    }
    h2 {
      position: relative;
      top: 40%;
      color: #fff;
    }
  }

  ul {
    margin: 10px 0 0 0;
    padding: 0;

    li:first-child {
      border-top: 1px solid #f2f2f2;
    }

    li {
      list-style-type: none;
      display: block;
      padding: 0;
      margin: 0;
      border-bottom: 1px solid #f2f2f2;
      height: 30px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }
  .buy-button-box {
    width: 100%;
    float: left;
    margin-top: 20px;

    .buy-now {
      &.basic {
        background-color: $primary;
      }
      &.echo {
        background-color: $echo;
      }
      &.pro {
        background-color: $pro;
      }
      &.business {
        background-color: $business;
      }
      text-decoration: none;
      color: white;
      padding: 10px 30px;
      border-radius: $radius;
      margin-top: 20px;
    }
  }
}
</style>
