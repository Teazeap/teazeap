<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="'img/jake_2.jpg'" position="top"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Jake</v-list-item-title>
      </v-list-item>

      <v-divider class="mt-2"></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="handleRoute(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block class="red--text" @click="logOut">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="handleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main class="ma-1">
      <router-view />
    </v-main>
    <v-footer dark padless v-bind="localAttrs">
      <v-card
        flat
        tile
        class="grey lighten-5 red--text text-center"
        style="width: 100%; height:60px"
      >
        <v-card-text class="red--text">
          {{ new Date().getFullYear() }} — <strong>TeaZeaP</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    localAttrs() {
      const attrs = {};
      attrs["fixed"] = true;
      return attrs;
    }
  },
  data: () => ({
    drawer: true,
    items: [
      { title: "Jobs", icon: "mdi-notebook", route: "DashboardJobs" },
      {
        title: "Jobs Aplications",
        icon: "mdi-book-search",
        route: "DashboardJobsApplications"
      },
      {
        title: "Profiles",
        icon: "mdi-account-group",
        route: "DashboardProfiles"
      },
      {
        title: "Profiles Applications",
        icon: "mdi-notebook-edit",
        route: "DashboardProfileApplications"
      },
      {
        title: "Blog Posts",
        icon: "mdi-message-bulleted",
        route: "DashboardBlogPosts"
      }
    ],
    mini: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  }),
  methods: {
    handleDrawer() {
      this.drawer = !this.drawer;
    },
    handleRoute(item) {
      if (this.$router.history.current.name === item.route) return;
      this.$router.push({ name: item.route });
    },
    logOut() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "landing" });
    }
  }
};
</script>
<style lang="scss">
.v-application--wrap {
  height: 100%;
  min-height: 100%;
}
.v-main {
  height: 100vh;
}

.v-list-item__icon {
  margin-right: 20px;
}
</style>
