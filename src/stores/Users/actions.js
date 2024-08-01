import { clientDeskree } from "src/boot/deskree-client";
import { adminDeskree } from "src/boot/deskree-admin";
import api from "axios";

const convertJsonToObject = (data) => {
  if (data) {
    return JSON.parse(data);
  } else {
    return "";
  }
};
const convertJsonToStringify = (data) => {
  if (data) {
    return JSON.stringify(data);
  } else {
    return "";
  }
};

export default {
  async signUp(payload) {
    try {
      const { data } = await clientDeskree
        .auth()
        .signUpEmail(payload.email, payload.password);

      this.user = data;
      this.idToken = data.idToken;
      this.refreshToken = data.refreshToken;
      localStorage.setItem("ut", convertJsonToStringify(data));
      /* const userProfile = await client.database().from("userProfiles").create({
        userId: data.uid,
      }); */

      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async signInEmail(payload) {
    try {
      const { data } = await clientDeskree
        .auth()
        .signInEmail(payload.email, payload.password);

      this.user = data;
      this.idToken = data.idToken;
      this.refreshToken = data.refreshToken;
      localStorage.setItem("ut", convertJsonToStringify(data));

      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async signInOAuth(payload) {
    try {
      const { data } = await clientDeskree
        .auth()
        .signInOAuth(
          "google.com",
          "kasdoa0123-012sdasd",
          "http://localhost/sign-in-oauth",
          "asdkmaskdsadmapoin0i",
          "0aksd09d0jd091ij0"
        );

      this.user = data;
      this.idToken = data.idToken;
      this.refreshToken = data.refreshToken;
      localStorage.setItem("ut", convertJsonToStringify(data));

      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async refreshToken() {
    try {
      const { data } = await clientDeskree
        .auth()
        .refreshToken(this.refreshToken);

      this.user.user_id = data.user_id;
      this.idToken = data.idToken;
      this.user.idToken = data.idToken;
      this.refreshToken = data.refreshToken;
      this.user.refreshToken = data.refreshToken;

      localStorage.setItem("ut", convertJsonToStringify(this.user));

      return { done: true };
    } catch (error) {
      const message = error?.response?.data?.errors;

      return { done: false, message, error };
    }
  },
  async resetPassword(payload) {
    try {
      await clientDeskree.auth().resetPassword(payload.email);
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async verifyPasswordReset(payload) {
    try {
      await clientDeskree
        .auth()
        .verifyPasswordReset(payload.obbCode, payload.password);
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async verifyEmail(payload) {
    try {
      await clientDeskree.auth().verifyEmail(payload.email);
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async updateEmail(payload) {
    try {
      await clientDeskree.auth().updateEmail(payload.email);
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async updatePassword(payload) {
    try {
      await clientDeskree
        .auth()
        .updatePassword(payload.oldPassword, payload.newPassword);
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async getRoles() {
    try {
      const { data } = await adminDeskree.auth().getRoles();

      this.roles = data;
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  getUserById() {
    const configHeader = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "*",
        Authorization: `Bearer ${this.idToken}`,
      },
    };
    return new Promise((resolve, reject) => {
      api
        .get(`${process.env.VUE_API_BASE_FULL}/users`, configHeader)
        .then(({ data, status }) => {
          resolve({ data, status });
        })
        .catch((error) => {
          var err = error.toString().split("code");
          reject(err[1].toString().trim());
        });
    });
  },
  async getRolesOthers() {
    try {
      const { data } = await clientDeskree
        .database()
        .from("users")
        .getByUID(this.user.uid);

      this.roles = data;
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
  async deleteAccount() {
    try {
      await adminDeskree.auth().deleteAccount();
      return { done: true };
    } catch (error) {
      return { done: false, error };
    }
  },
};
