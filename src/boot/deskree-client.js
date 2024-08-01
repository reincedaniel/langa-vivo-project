import createClient from "@deskree/deskree-js";
import axios from "axios";
import { boot } from "quasar/wrappers";
import useUserStore from "src/stores/Users";

let clientDeskree; // Declare clientDeskree in the outer scope
let options;

export default boot(({ app }) => {
  const userStore = useUserStore();

  options = {
    projectId: process.env.VUE_PROJECT_ID,
    axios: axios,
    // adminToken: process.env.VUE_ADMIN_TOKEN,
    userToken: userStore?.idToken || null,
  };

  clientDeskree = createClient(options);

  app.config.globalProperties.$clientDeskree = clientDeskree;
});

export { clientDeskree, options };
