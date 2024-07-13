import axios from "axios";

export default {
  getGeoInfo() {
    return new Promise((resolve, reject) => {
      axios
        .get(process.env.VUE_IPAPI_API)
        .then((response) => {
          this.country = (response && response.data) || {
            country_name: "--",
            city: "",
            country_code: "",
          };

          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
