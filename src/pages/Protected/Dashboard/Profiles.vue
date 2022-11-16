<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        Profiles
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allProfiles"
        :search="search"
        item-key="id"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        show-expand
      >
        <template v-slot:item.country="{ item }">
          {{ item.country[0].name }}
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <h4 class="font-weight-black">Description</h4>
            <p>{{ item.description }}</p>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "dashboard-profiles",
  computed: {
    ...mapGetters(["allProfiles"])
  },
  watch: {
    allProfiles() {
      this.handleProfiles();
    }
  },
  created() {
    this.fetchProfiles();
  },
  methods: {
    ...mapActions(["fetchProfiles"]),
    handleProfiles() {}
  },
  data() {
    return {
      search: "",
      expanded: [],
      singleExpand: false,
      headers: [
        {
          text: "First Name",
          align: "start",
          value: "firstName"
        },
        { text: "Last Name", value: "lastName" },
        { text: "Country", value: "country" },
        { text: "Email", value: "email" },
        { text: "Gender", value: "gender" },
        { text: "Teaching Experience", value: "teachingExperience" },
        { text: "Years In Taiwan", value: "yearsInTaiwan" },
        { text: "Birth Date", value: "birthDate" }
      ]
    };
  }
};
</script>
<style lang="scss">
.v-application--wrap {
  height: 100%;
  min-height: 100%;
}
</style>
