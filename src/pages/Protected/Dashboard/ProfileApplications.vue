<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        Profile Applications
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
        :items="draftProfiles"
        :loading="loading"
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
          {{ formatDate(item.birthDate, "DD MMM YYYY") }}
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <h4 class="font-weight-black">Description</h4>
            <p>{{ item.description }}</p>
          </td>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-btn
            class="text-capitalize"
            small
            rounded
            color="success"
            dark
            @click="publishItem(item)"
          >
            Publish
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
  name: "dashboard-profile-applications",
  computed: {
    ...mapGetters(["allProfiles", "allPreviewProfiles"])
  },
  watch: {
    allPreviewProfiles: {
      handler() {
        this.handleProfiles();
      },
      deep: true
    },
    allProfiles: {
      handler() {
        this.handleProfiles();
      },
      deep: true
    }
  },
  created() {
    this.fetchPreviewProfiles();
    this.fetchProfiles();
  },
  methods: {
    ...mapActions(["fetchProfiles", "fetchPreviewProfiles", "publishProfile"]),
    handleProfiles() {
      const allProfileIds = this.allProfiles.map(p => p.id);
      this.draftProfiles = this.allPreviewProfiles.filter(p => {
        return !allProfileIds.includes(p.id);
      });
    },
    formatDate(date, format = "llll") {
      const createdAt = moment(new Date(date));
      return createdAt.format(format);
    },
    editItem(item) {},
    async publishItem(item) {
      try {
        this.loading = true;
        await this.publishProfile(item.id);
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
      singleExpand: false,
      loading: false,
      draftProfiles: [],
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
