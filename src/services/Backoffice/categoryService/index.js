import UseDeskree from "src/composables/generics/UseDeskree";

export default function userService() {
  /* const { list, post, remove, update, patch } = UseApi(
    "/api/v1/rest/collections/productAndServiceCategories"
  ); */

  const { list, post, remove, update, patch } = UseDeskree("categories");

  return { list, post, update, patch, remove };
}
