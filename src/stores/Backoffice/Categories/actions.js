import toolsCategoryService from "src/services/Backoffice/categoryService";
import useUserStore from "src/stores/Users";
const userStore = useUserStore();

const { list, post, update, remove } = toolsCategoryService();

export default {
  async getCategories() {
    try {
      const data = await list({
        where: [
          {
            attribute: "userId",
            operator: "=",
            value: userStore?.user?.uid,
          },
        ],
      });
      this.categories = data;
      return { done: true, data };
    } catch (error) {
      return { done: false, error };
    }
  },
  async postCategory(payload) {
    try {
      const data = await post({ ...payload, userId: userStore?.user?.uid });
      await this.getCategories();
      return { done: true, data };
    } catch (error) {
      return { done: false, error };
    }
  },
  async updateCategory(uid, payload) {
    try {
      const data = await update(uid, payload);
      await this.getCategories();
      return { done: true, data };
    } catch (error) {
      return { done: false, error };
    }
  },
  async removeCategory(payload) {
    try {
      const data = await remove(payload);
      await this.getCategories();
      return { done: true, data };
    } catch (error) {
      return { done: false, error };
    }
  },
};
