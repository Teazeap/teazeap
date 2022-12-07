<template>
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        Jobs Applications
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
        :items="allJobs"
        :loading="loading"
        :search="search"
        item-key="id"
        :single-expand="singleExpand"
        :expanded.sync="expanded"
        show-expand
      >
        <template v-slot:item.partTime="{ item }">
          {{ item.partTime ? "Yes" : "No" }}
        </template>
        <template v-slot:item.fullTime="{ item }">
          {{ item.fullTime ? "Yes" : "No" }}
        </template>
        <template v-slot:item.resumes="{ item }">
          {{ item.resumes.length }}
        </template>
        <template v-slot:item.updatedAt="{ item }">
          {{ formatDate(item.updatedAt) }}
        </template>
        <template v-slot:item.resumes="{ item }">
          <v-chip :color="getColor(item.resumes.length)" dark>
            {{ item.resumes.slice(1).length }}
          </v-chip>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <h4 class="font-weight-black">Applicants</h4>
            <v-simple-table v-if="item.resumes.length > 1">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      #
                    </th>
                    <th class="text-left">
                      Full Name
                    </th>
                    <th class="text-left">
                      Country
                    </th>
                    <th class="text-left">
                      Email
                    </th>
                    <th class="text-left">
                      Gender
                    </th>
                    <th class="text-left">
                      License
                    </th>
                    <th class="text-left">
                      Resume
                    </th>
                    <th class="text-left">
                      Birth Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(applicant, index) in item.resumes.slice(1)"
                    :key="index"
                  >
                    <td>{{ index + 1 }}.</td>
                    <td>
                      {{
                        formatDescription(
                          applicant.fields.description,
                          "fullName"
                        )
                      }}
                    </td>
                    <td>
                      {{
                        formatDescription(
                          applicant.fields.description,
                          "country"
                        )
                      }}
                    </td>
                    <td>
                      {{
                        formatDescription(applicant.fields.description, "email")
                      }}
                    </td>
                    <td>
                      {{
                        formatDescription(
                          applicant.fields.description,
                          "gender"
                        )
                      }}
                    </td>
                    <td>
                      {{
                        formatDescription(
                          applicant.fields.description,
                          "lisence"
                        )
                      }}
                    </td>
                    <td>
                      <a
                        :href="getURL(applicant.fields.file.url)"
                        class="card-link"
                        :download="applicant.fields.file.fileName"
                        target="_blank"
                        >download</a
                      >
                    </td>
                    <td>
                      {{
                        formatDate(
                          formatDescription(
                            applicant.fields.description,
                            "dob"
                          ),
                          "DD MMM YYYY"
                        )
                      }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <h6 v-else>No Applicationns</h6>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "dashboard-job-applications",
  computed: {
    ...mapGetters(["allJobs"])
  },
  watch: {
    allJobs: {
      handler() {
        // this.handleProfiles();
      },
      deep: true
    }
  },
  created() {
    this.fetchJobs();
  },
  methods: {
    ...mapActions(["fetchJobs"]),
    editItem(item) {},
    formatDate(date, format = "llll") {
      const createdAt = moment(new Date(date));
      return createdAt.format(format);
    },
    async publishItem(item) {
      try {
        this.loading = true;
        await this.publishProfile(item.id);
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
    getColor(applications) {
      if (applications > 0) return "green";
      else return "red";
    },
    formatDescription(description, key) {
      const applicantDetails = JSON.parse(description);
      return applicantDetails[key];
    },
    getURL(url) {
      return `https://${url}`;
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
          text: "School",
          align: "start",
          value: "school"
        },
        { text: "City", value: "city" },
        { text: "PartTime", value: "partTime" },
        { text: "FullTime", value: "fullTime" },
        { text: "Salary", value: "salary" },
        { text: "# of Applications", value: "resumes" },
        { text: "Updated", value: "updatedAt" }
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
