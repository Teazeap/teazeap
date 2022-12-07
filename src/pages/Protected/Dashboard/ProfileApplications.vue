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
          <v-icon small class="mr-2" @click="editItem(item)"  v-if="false">
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
import SendEmailMixin from "@/mixins/SendEmailMixin";

export default {
  name: "dashboard-profile-applications",
  computed: {
    ...mapGetters(["allProfiles", "allPreviewProfiles"])
  },
  mixins: [SendEmailMixin],
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
    this.unwatch = this.$store.watch(
      (state, getters) => getters.allPreviewProfiles,
      (newValue, oldValue) => {
        this.handleProfiles();
      }
    );
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
    handleAlert({ title, text, icon }) {
      this.$swal({
        title,
        text,
        icon,
        confirmButtonText: "Okay"
      }).then(result => {
        this.loading = false;
      });
    },
    handleEmailNotification(item) {
      const fullName = `${item.firstName} ${item.lastName}`;
      const email = {};
      email.message = `<div> Dear ${fullName} </div> <div> <p> The Teazeap team is pleased to inform you that the profile you created on ${this.formatDate( item.createdAt, 'DD MMMM YYYY' )} has been approved and published on the Teazeap website. </p> </div> <div> <p> You can follow this <a href='https://www.teazeap.com/#/create-profile'>link</a> to verify. </p> </div> <div> <p> Furthermore, please contact us if you wish to stop your profile subscription to our list via teazearecruitingagency@gmail.com with titled <span style='font-weight: bold'> Unsubscribe Profile </span> </p> </div> <div> <p> If you are not the intended recipient, please ignore this email. </p> </div> <div> <p> Again, we are honored to have you with us. </p> </div>`;
      email.subject = "Your profile has been approved";
      email.address = item.email
      email.regards = "Warm regards,";
      this.sendEmail(email);
    },
    async publishItem(item) {

      try {
        this.loading = true;
        await this.publishProfile(item.id);
        this.handleEmailNotification(item);
        this.handleAlert({
          title: "Teacher's Profile Published Successfully",
          text: "View it in the profile page",
          icon: "success"
        });
      } catch (e) {
        this.handleAlert({
          title: "Teacher's Profile Not Published",
          text: "Please try again",
          icon: "error"
        });
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
