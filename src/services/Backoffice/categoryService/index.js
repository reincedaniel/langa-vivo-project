import UseApi from "src/composables/generics/UseApi";

export default function userService() {
  const { list, post, remove, update, patch } = UseApi(
    "/api/v1/rest/collections/productAndServiceCategories"
  );

  return { list, post, update, patch, remove };
}
