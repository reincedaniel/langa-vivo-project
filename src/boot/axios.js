import { boot } from "quasar/wrappers";
import axios from "axios";
import useUserStore from "src/stores/Users";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const userStore = useUserStore();
const configHeader = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "*",
    Authorization: `Bearer ${userStore.idToken}`,
  },
};

const api = axios.create({
  baseURL: process.env.VUE_APP_API,
});
const apiBase = axios.create({
  baseURL: process.env.VUE_API_BASE,
});
const apiDeskee = axios.create({
  baseURL: process.env.VUE_API_BASE_FULL,
  configHeader,
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$apiBase = apiBase;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api, apiBase, apiDeskee };
