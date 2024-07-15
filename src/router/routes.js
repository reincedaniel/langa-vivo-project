const routes = [
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
