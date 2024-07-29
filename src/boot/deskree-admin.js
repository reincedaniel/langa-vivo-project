import createClient from "@deskree/deskree-js";
import axios from "axios";
import { boot } from "quasar/wrappers";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const convertJsonToObject = (data) => {
  if (data) {
    return JSON.parse(data);
  } else {
    return "";
  }
};

const options = {
  projectId: process.env.VUE_PROJECT_ID,
  axios: axios,
  adminToken: process.env.VUE_ADMIN_TOKEN,
  userToken: convertJsonToObject(localStorage.getItem("ut"))?.idToken || null,
};

const adminDeskree = createClient(options);

export default boot(({ app }) => {
  app.config.globalProperties.$adminDeskree = adminDeskree;
});

export { adminDeskree, options };
