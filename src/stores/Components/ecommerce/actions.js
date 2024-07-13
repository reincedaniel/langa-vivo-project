import { api } from "src/boot/axios";

export default {
  getProducts() {
    return new Promise((resolve, reject) => {
      api
        .get(`/products`)
        .then(({ data, status }) => {
          this.products = data;

          resolve({ data, status });
        })
        .catch((error) => {
          var err = error.toString().split("code");
          reject(err[1].toString().trim());
        });
    });
  },
  addFavorite(payload) {
    this.favoriteProducts.push(payload);
    localStorage.setItem("favoritos", JSON.stringify(this.favoriteProducts));
  },
  removeFavorite(payload) {
    const result = this.favoriteProducts.filter((e) => e.id !== payload.id);
    this.favoriteProducts = result;
    localStorage.setItem("favoritos", JSON.stringify(this.favoriteProducts));
  },
  cleanFavorite() {
    this.favoriteProducts = [];
    localStorage.removeItem("favoritos");
  },
  addProductDetails(payload) {
    this.detailsProduct = payload;
  },
  addCart(payload) {
    this.cartProducts.push(payload);
    localStorage.setItem("carrinho", JSON.stringify(this.cartProducts));
  },
  removeCart(payload) {
    const result = this.cartProducts.filter((e) => e.id !== payload.id);
    this.cartProducts = result;
    localStorage.setItem("carrinho", JSON.stringify(this.cartProducts));
  },
  reloadCart(payload) {
    this.cartProducts = payload;
    localStorage.setItem("carrinho", JSON.stringify(this.cartProducts));
  },
  cleanChart() {
    this.cartProducts = [];
    localStorage.removeItem("carrinho");
  },
};
