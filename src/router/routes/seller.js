// src/router/routes/seller.js
/* import SellerDashboard from "../../pages/seller/SellerDashboard.vue";*/
/* import SellerDashboardPage from "src/pages/Backoffice/SellerDashboardPage.vue"; */

const sellerRoutes = [
  {
    path: "/seller/dashboard",
    meta: { requiresAuth: true, roles: ["seller"] },
    component: () => import("layouts/UserLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/Backoffice/SellerDashboardPage.vue"),
      },
    ],
  },
];

export default sellerRoutes;
