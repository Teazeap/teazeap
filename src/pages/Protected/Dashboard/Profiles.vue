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
        :loading="loading"
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
        <template v-slot:item.birthDate="{ item }">
          {{ formatDate(item.birthDate, "DD-MM-YYYY") }}
        </template>
         <template v-slot:item.updatedAt="{ item }">
          {{ formatDate(item.updatedAt, "DD-MM-YYYY") }}
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <h4 class="font-weight-black">Description</h4>
            <p>{{ item.description }}</p>
          </td>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn
            small
            rounded
            color="success"
            dark
            @click="unPublishItem(item)"
          >
            Unpublish
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "dashboard-profiles",
  computed: {
    ...mapGetters(["allProfiles"])
  },
  created() {
    this.fetchProfiles();
  },
  methods: {
    ...mapActions(["fetchProfiles", "unPublishProfile"]),
    formatDate(date, format = "llll") {
      const createdAt = moment(new Date(date));
      return createdAt.format(format);
    },
    async unPublishItem(item) {
      try {
        this.loading = true;
        await this.unPublishProfile(item.id);
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    }
  },
  data() {
    return {
      search: "",
      expanded: [],
      loading: false,
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
        { text: "Birth Date", value: "birthDate" },
        { text: "Update At Date", value: "updatedAt" },
        { text: "Actions", value: "actions", sortable: false }
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
