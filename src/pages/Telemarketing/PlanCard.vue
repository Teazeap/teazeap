<template>
  <v-app>
    <v-card
      outlined
      class="mx-auto  plan-card d-flex flex-column"
      :elevation="4"
      :min-height="460"
      :width="300"
      :style="vcardStyles"
      :to="to"
    >
      <v-card-title
        :style="textStyles"
        class="d-flex  team-name justify-content-center mb-2"
      >
        <h5 class="font-weight-bold plan-title" style="word-break: break-word">{{$t(plan.title)  }}</h5>
      </v-card-title>

      <v-card-text :style="textStyles" class="mt-n2 plan-text">
        {{  $t(plan.subtitle) }}
      </v-card-text>
      <v-card-text :style="textStyles" class="mt-n6 plan-text">
        <ul>
          <li
            v-for="(keyPoint, index) in plan.keyPoints"
            :key="index"
            class="my-2 plan-text"
          >
            {{  $t(keyPoint) }}
          </li>
        </ul>
      </v-card-text>
      <v-card-actions class="mt-auto mb-4 justify-center">
        <button :style="actionButtonStyle">
            {{  $t(plan.actionButton.text) }}
        </button>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "plan-card",
  bodyClass: "profile-page",
  components: {},
  props: {
    cardStyles: {
      type: Object,
      required: true,
      default: () => {}
    },
    plan: {
      type: Object,
      required: true,
      default: () => {}
    },
    to: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    vcardStyles() {
      return { backgroundColor: this.cardStyles.backgroundColor };
    },
    textStyles() {
      return { color: this.cardStyles.textColor };
    },
    actionButtonStyle() {
      return {
        color: this.cardStyles.actionButtonColor,
        padding: "11px 23px",
        background: this.cardStyles.actionButtonBackground,
        fontWeight: "bolder",
        borderRadius: "8px"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.v-application--wrap {
  height: 100% !important;
  min-height: 100% !important;
  font-family: "Montserr" !important;

  a {
    color: white !important;
  }
}

.plan-card {
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  transition: 0.3s;
  border-radius: 24px !important;
}

.plan-card:hover {
  transform: translateY(-2px);
  cursor: pointer;
  text-decoration: none;
}
.plan-text {
  font-size: 18px;
}
.plan-title {
  font-size: 26px;
}
.team-name {
  font-size: 24px;
  font-weight: 500;
}

.action-button {
  padding: 15px 35px;
  background: #f96332;
  color: white;
  font-weight: bolder;
  border-radius: 8px;
}
</style>
