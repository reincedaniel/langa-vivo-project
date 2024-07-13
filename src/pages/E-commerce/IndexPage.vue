<template>
  <q-page class="page-container">
    <ProductBannerV1 />
    <ProductListCarouselV1
      title="Baseado nas suas tendências de compra:"
      iconTitle="bookmark"
      class="bg-red-2"
    ></ProductListCarouselV1>
    <ProductListV2
      title="Baseado nas suas tendências de compra:"
      iconTitle="bookmark"
      class="bg-red-2"
    ></ProductListV2>
    <ProductListV1
      title="Baseado nas suas tendências de compra:"
      iconTitle="bookmark"
      class="bg-red-2"
    ></ProductListV1>
    <ProductListV1
      title="As suas reomendações:"
      iconTitle="star"
      class="bg-red-2"
    ></ProductListV1>
  </q-page>
</template>

<script setup>
import ProductBannerV1 from "src/components/E-commerce/BannerComponent/ProductBannerV1/ProductBannerV1.vue";
import ProductListCarouselV1 from "src/components/E-commerce/ListsComponent/ProductListCarouselV1/ProductListCarouselV1.vue";
import ProductListV1 from "src/components/E-commerce/ListsComponent/ProductListV1/ProductListV1.vue";
import ProductListV2 from "src/components/E-commerce/ListsComponent/ProductListV2/ProductListV2.vue";

defineOptions({
  name: "IndexPage",
});
</script>

<style scoped></style>
