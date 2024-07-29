import useUserStore from "src/stores/Users";

export default async (to, _from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.isAuthenticated;
  const userRole = userStore.roles;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ path: "/sign" });
  } /* else if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    next({ path: "/" }); // ou outra página de erro/autorização
  } */ else {
    next();
  }
};
