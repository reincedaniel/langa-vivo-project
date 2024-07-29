const convertJsonToObject = (data) => {
  if (data) {
    return JSON.parse(data);
  } else {
    return "";
  }
};

export default () => ({
  idToken: convertJsonToObject(localStorage.getItem("ut"))?.idToken || null,
  refreshToken: localStorage.getItem("ut")?.refreshToken || null,
  user: convertJsonToObject(localStorage.getItem("ut")) || null,
  roles: [],
});
