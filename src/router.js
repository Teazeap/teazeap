import Vue from "vue";
import Router from "vue-router";
import Landing from "./pages/Landing.vue";
import Telemarketing from "./pages/Telemarketing.vue";
import RecruitmentAgency from "./pages/RecruitmentAgency.vue";
import TelemarketingIndex from "./pages/Telemarketing/index.vue";
import SingleAgent from "./pages/Telemarketing/SingleAgent.vue";
import MultipleAgent from "./pages/Telemarketing/MultipleAgent.vue";
import TelemarketingBundle from "./pages/Telemarketing/Bundle.vue";
import CallCenter from "./pages/CallCenter/CallCenter.vue"
import Schools from "./pages/Services/Schools.vue";
import Teachers from "./pages/Services/Teachers.vue";
import Process from "./pages/Procedure/ApplicationProcess.vue";
import Qualification from "./pages/Procedure/Qualification.vue";
import Login from "./pages/Login.vue";
import Profiles from "./pages/Profile/Profiles.vue";
import Blogs from "./pages/Blog/Blogs.vue";
import Jobs from "./pages/Jobs/Jobs.vue";
import JobInfo from "./pages/Jobs/JobInfo.vue";
import BlogInfo from "./pages/Blog/BlogInfo.vue";
import LandingNavbar from "./layout/LandingNavbar.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import RecruitmentAgencyNavbar from "./layout/RecruitmentAgencyNavbar.vue";
import TelemarketingNavbar from "./layout/TelemarketingNavbar.vue";
import CallCenterNavbar from "./layout/CallCenterNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import store from "@/store";
import Dashboard from "./pages/Protected/Dashboard/index.vue";
import DashboardJobs from "./pages/Protected/Dashboard/AllJobs.vue";
import DashboardJobsApplications from "./pages/Protected/Dashboard/JobApplications.vue";
import DashboardProfiles from "./pages/Protected/Dashboard/Profiles.vue";
import DashboardProfileApplications from "./pages/Protected/Dashboard/ProfileApplications.vue";
import DashboardBlogPosts from "./pages/Protected/Dashboard/BlogPosts.vue";

Vue.use(Router);

 const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    // dashboard
    {
      path: "/admin/login",
      name: "login",
      components: { default: Login, header: MainNavbar },
      props: {
        header: { colorOnScroll: 400 },
      },
    },
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      redirect: { name: "DashboardJobs" },
      components: {
        default: Dashboard,
      },
      props: {
        header: { colorOnScroll: 400 },
      },
      children: [
        {
          path: "jobs",
          name: "DashboardJobs",
          components: {
            default: DashboardJobs,
          },
          props: {
            header: { colorOnScroll: 400 },
          },
          beforeEnter: (to, from, next) => {
            const isAuthenticated = store.getters.user;
            if (!isAuthenticated) next({ name: "login" });
            else next();
          },
        },
        {
          path: "jobs-applications",
          name: "DashboardJobsApplications",
          components: {
            default: DashboardJobsApplications,
          },
          props: {
            header: { colorOnScroll: 400 },
          },
          beforeEnter: (to, from, next) => {
            const isAuthenticated = store.getters.user;
            if (!isAuthenticated) next({ name: "login" });
            else next();
          },
        },
        {
          path: "profiles",
          name: "DashboardProfiles",
          components: {
            default: DashboardProfiles,
          },
          props: {
            header: { colorOnScroll: 400 },
          },
          beforeEnter: (to, from, next) => {
            const isAuthenticated = store.getters.user;
            if (!isAuthenticated) next({ name: "login" });
            else next();
          },
        },
        {
          path: "profile-applications",
          name: "DashboardProfileApplications",
          components: {
            default: DashboardProfileApplications,
          },
          props: {
            header: { colorOnScroll: 400 },
          },
          beforeEnter: (to, from, next) => {
            const isAuthenticated = store.getters.user;
            if (!isAuthenticated) next({ name: "login" });
            else next();
          },
        },
        {
          path: "blog-posts",
          name: "DashboardBlogPosts",
          components: {
            default: DashboardBlogPosts,
          },
          props: {
            header: { colorOnScroll: 400 },
          },
          beforeEnter: (to, from, next) => {
            const isAuthenticated = store.getters.user;
            if (!isAuthenticated) next({ name: "login" });
            else next();
          },
        },
      ],
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters.user;
        if (to.name == "Dashboard" && !isAuthenticated) next({ name: "login" });
        else next();
      },
    },
    {
      path: "/",
      name: "landing",
      components: {
        default: Landing,
        header: LandingNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/recruitment-agency",
      name: "RecruitmentAgency",
      components: {
        default: RecruitmentAgency,
        header: RecruitmentAgencyNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/call-center",
      name: "CallCenter",
      components: {
        default: CallCenter,
        header: CallCenterNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/telemarketing",
      name: "TelemarketingIndex",
      components: {
        default: TelemarketingIndex,
        header: TelemarketingNavbar,
        footer: MainFooter,
      },
      redirect: { name: "TelemarketingIndex" },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      children: [
        {
          path: "/",
          name: "Telemarketing",
          component: Telemarketing,
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: "black" },
          },
        },
        {
          path: "single-agent",
          name: "SingleAgent",
          component: SingleAgent,
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: "black" },
          },
        },
        {
          path: "multiple-agent",
          name: "MultipleAgent",
          component: MultipleAgent,
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: "black" },
          },
        },
        {
          path: "bundle",
          name: "TelemarketingBundle",
          component: TelemarketingBundle,
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: "black" },
          },
        },
      ],
    },
    {
      path: "/our-services/schools",
      name: "schools",
      components: { default: Schools, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/process",
      name: "process",
      components: { default: Process, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/qualification",
      name: "qualification",
      components: {
        default: Qualification,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/our-services/teachers",
      name: "teachers",
      components: { default: Teachers, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/jobs",
      name: "JobsMain",
      components: { default: Jobs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/jobs/:id",
      name: "Jobs",
      components: { default: JobInfo, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      children: [
        {
          path: "info",
          name: "JobInfo",
          components: {
            default: JobInfo,
            header: MainNavbar,
            footer: MainFooter,
          },
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: "black" },
          },
        },
      ],
    },
    {
      path: "/create-profile",
      name: "Profiles",
      components: { default: Profiles, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      },
    },
    {
      path: "/blog",
      name: "BlogsMain",
      components: { default: Blogs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/blog/:id",
      name: "Blogs",
      components: {
        default: BlogInfo,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
      children: [
        {
          path: "info",
          name: "BlogInfo",
          components: {
            default: BlogInfo,
            header: MainNavbar,
            footer: MainFooter,
          },
          props: {
            header: { colorOnScroll: 400 },
            footer: { backgroundColor: "black" },
          },
        },
      ],
    },
    { path: "*", redirect: "/" },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth', offset: { x: 0, y: 10 } };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  store.dispatch('closeNav')
  next();
})

export default router
