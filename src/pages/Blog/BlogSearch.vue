<template>
  <v-app>
    <div class="justify-content-end mt-4">
      <!-- search by text -->
      <form
        @submit.prevent="$emit('search', search)"
        class="row justify-content-end"
      >
        <div class="form-group col-md-6 col-lg-3">
          <label>Title</label>
          <v-text-field
            outlined
            clearable
            v-model="search.text"
            dense
            @click:clear="search.text = ''"
            placeholder="Search by title, content..."
          ></v-text-field>
        </div>
        <!-- search by category -->
        <div class="form-group col-md-6 col-lg-3">
          <label>Catergory </label>
          <v-autocomplete
            v-model="search.category"
            :items="categories"
            dense
            item-text="name"
            placeholder="Search by catergory..."
            outlined
            clearable
            @click:clear="search.category = ''"
          ></v-autocomplete>
        </div>
        <div class="form-group col-md-6 col-lg-3 mt-4">
          <button
            class="btn-round btn btn-primary"
            rounded
            @click="$emit('search', search)"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  </v-app>
</template>
<script>
import { Button, FormGroupInput, Radio } from "@/components";
import debounce from "lodash.debounce";

export default {
  name: "profile-search",
  bodyClass: "landing-page",
  components: {
    [Radio.name]: Radio,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  watch: {
    search: {
      handler(newValue) {
        this.debouncedCallback(newValue);
      },
      deep: true
    }
  },
  created() {
    this.debouncedCallback = debounce(newValue => {
      this.$emit("search", newValue);
    }, 500);
  },
  beforeUnmount() {
    this.debouncedCallback.cancel();
  },
  data() {
    return {
      search: {
        text: "",
        category: ""
      },
      categories: [
        "Immigration",
        "Work Culture",
        "Social Life",
        "Travel",
        "Housing"
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.v-application--wrap {
  height: 100%;
  min-height: 100%;
  font-family: "Montserr";
}

.tab-content.tab-content-padding {
  padding: 20px;
}

.profile-section {
  padding: 20px 0px 70px 0 !important;
}

.form-group {
  text-align: start;
}

.v-text-field__slot {
  font-size: 0.8571em;
}

.v-select__slot {
  font-size: 0.8571em;
}

.v-text-field--outlined {
  border-radius: 30px;
}

.v-list-item {
  text-align: start;
}
</style>
