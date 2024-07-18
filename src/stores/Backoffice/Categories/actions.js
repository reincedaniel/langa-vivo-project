import toolsCategoryService from "src/services/Backoffice/categoryService";
const { list, post, patch, remove } = toolsCategoryService();

export default {
  async getCategories() {
    try {
      const data = await list();
      this.categories = data;
      return { done: true, data };
    } catch (error) {
      return { done: false, error };
    }
  },
  async postCategory(payload) {
    try {
      const data = await post(payload);
      await this.getCategories();
      return { done: true, data };
    } catch (error) {
      return { done: false, error };
    }
  },
  async updateCategory(uid, payload) {
    try {
      const data = await patch(uid, payload);
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
