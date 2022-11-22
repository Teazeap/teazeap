import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/Index.vue";
import Landing from "./pages/Landing.vue";
import Schools from "./pages/Services/Schools.vue";
import Teachers from "./pages/Services/Teachers.vue";
import Process from "./pages/Procedure/ApplicationProcess.vue";
import Qualification from "./pages/Procedure/Qualification.vue";
import Login from "./pages/Login.vue";
// import Profile from './pages/Profile.vue';
import Profiles from "./pages/Profile/Profiles.vue";
import Blogs from "./pages/Blog/Blogs.vue";
import Jobs from "./pages/Jobs/Jobs.vue";
import JobInfo from "./pages/Jobs/JobInfo.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import AdminJobs from "./pages/Protected/Jobs";
import store from "@/store";
import AdminJobInfo from "./pages/Protected/JobInfo";
import Dashboard from "./pages/Protected/Dashboard/index.vue";
import DashboardJobs from "./pages/Protected/Dashboard/AllJobs.vue";
import DashboardJobsApplications from "./pages/Protected/Dashboard/JobApplications.vue";
import DashboardProfiles from "./pages/Protected/Dashboard/Profiles.vue";
import DashboardProfileApplications from "./pages/Protected/Dashboard/ProfileApplications.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    { path: "*", redirect: "/" },
    {
      path: "/",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/our-services/schools",
      name: "schools",
      components: { default: Schools, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/process",
      name: "process",
      components: { default: Process, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/qualification",
      name: "qualification",
      components: {
        default: Qualification,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/our-services/teachers",
      name: "teachers",
      components: { default: Teachers, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/jobs",
      name: "JobsMain",
      components: { default: Jobs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/create-profile",
      name: "Profiles",
      components: { default: Profiles, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/Blog",
      name: "Blogs",
      components: { default: Blogs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/jobs/:id",
      name: "Jobs",
      components: { default: JobInfo, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      },
      children: [
        {
          path: "info",
          name: "JobInfo",
          components: {
            default: JobInfo,
            header: MainNavbar,
            footer: MainFooter
          },
          props: {
            header: { colorOnScroll: 400 }
          }
        }
      ]
    },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   components: { default: Profile, header: MainNavbar, footer: MainFooter },
    //   props: {
    //     header: { colorOnScroll: 400 },
    //     footer: { backgroundColor: 'black' }
    //   }
    // },
    /**     admin protected pages */
    {
      path: "/admin/jobs",
      name: "JobsAdminMain",
      components: {
        default: AdminJobs,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      },
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters.user;
        if (to.name == "JobsAdminMain" && !isAuthenticated)
          next({ name: "login" });
        else next();
      }
    },
    {
      path: "/admin/jobs/:id",
      name: "AdminJobs",
      components: {
        default: AdminJobInfo,
        header: MainNavbar,
        footer: MainFooter
      },
      props: {
        header: { colorOnScroll: 400 }
      },
      children: [
        {
          path: "applications",
          name: "AdminJobInfo",
          components: {
            default: AdminJobInfo,
            header: MainNavbar,
            footer: MainFooter
          },
          props: {
            header: { colorOnScroll: 400 }
          }
        }
      ]
    },
    // dashboard
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      redirect: { name: 'DashboardJobs' },
      components: {
        default: Dashboard
      },
      props: {
        header: { colorOnScroll: 400 }
      },
      children: [
        {
          path: "jobs",
          name: "DashboardJobs",
          components: {
            default: DashboardJobs,
          },
          props: {
            header: { colorOnScroll: 400 }
          }
        },
        {
          path: "jobs-applications",
          name: "DashboardJobsApplications",
          components: {
            default: DashboardJobsApplications,
          },
          props: {
            header: { colorOnScroll: 400 }
          }
        },
        {
          path: "profiles",
          name: "DashboardProfiles",
          components: {
            default: DashboardProfiles,
          },
          props: {
            header: { colorOnScroll: 400 }
          }
        },
        {
          path: "profile-applications",
          name: "DashboardProfileApplications",
          components: {
            default: DashboardProfileApplications,
          },
          props: {
            header: { colorOnScroll: 400 }
          }
        }
      ],
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters.user;
        if (to.name == "Dashboard" && !isAuthenticated) next({ name: "login" });
        else next();
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
