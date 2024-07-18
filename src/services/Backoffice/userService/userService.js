import UseApi from "src/composables/generics/UseApi";

export default function userService() {
  const { list, post, remove, update } = UseApi("backoffice/user");

  return { list, post, update, remove };
}
