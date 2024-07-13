export default {
  disableSearchAndCategory() {
    this.showSearch = false;
    this.showCategory = false;
    this.showMenuBottom = false;
    this.showDrawerLeft = false;
    this.showDrawerRight = false;
  },
  enableSearchAndCategory() {
    this.showSearch = true;
    this.showCategory = true;
    this.showMenuBottom = true;
    this.showDrawerLeft = true;
    this.showDrawerRight = true;
  },
  changeHeaderBackgroundColor() {
    this.isHeaderBackgroundColor = !this.isHeaderBackgroundColor;
  },
  enableHeaderBackgroundColor() {
    this.isHeaderBackgroundColor = true;
  },
  disableHeaderBackgroundColor() {
    this.isHeaderBackgroundColor = false;
  },
};
