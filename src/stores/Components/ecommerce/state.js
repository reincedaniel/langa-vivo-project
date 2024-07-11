export default () => ({
  products: null,
  favoriteProducts: localStorage.getItem("favoritos")
    ? JSON.parse(localStorage.getItem("favoritos"))
    : [],
  cartProducts: localStorage.getItem("carrinho")
    ? JSON.parse(localStorage.getItem("carrinho"))
    : [],
  detailsProduct: null,
});
