// src/router/routes/general.js
/* import LoginPage from "../../pages/common/LoginPage.vue"; */

const commonRoutes = [
  /*   {
    path: "/sign",
    component: LoginPage,
  },
  {
    path: "/",
    redirect: "/sign",
  }, */
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/E-commerce/IndexPage.vue") },
    ],
  },
  {
    path: "/us/:clientId",
    alias: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/E-commerce/IndexPage.vue") },
    ],
  },
  {
    path: "/sign",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/E-commerce/SignUser/SignUser.vue"),
      },
    ],
  },
  {
    path: "/user",
    meta: { requiresAuth: true, roles: ["seller"] },
    component: () => import("layouts/UserLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/E-commerce/UserProfile/UserProfile.vue"),
      },
    ],
  },
  {
    path: "/sign-client",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Backoffice/SignClient/SignClient.vue"),
      },
    ],
  },
];

export default commonRoutes;
