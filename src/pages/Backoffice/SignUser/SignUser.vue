<template>
  <q-page class="page-container">
    <ProductBannerV1 />

    <ProductListV1
      title="Baseado nas suas tendências de compra:"
      iconTitle="bookmark"
      class="q-pt-xs q-pb-md"
    ></ProductListV1>

    <ProductListV2
      title="Baseado nas suas tendências de compra:"
      iconTitle="bookmark"
      class="bg-grey-2 q-pt-xs q-pb-md"
    ></ProductListV2>

    <ProductListV1
      title="As suas reomendações:"
      iconTitle="star"
      class="q-pt-xs q-pb-md"
    ></ProductListV1>

    <div class="row">
      <ProductListCarouselV1
        title="Baseado nas suas tendências de compra:"
        iconTitle="bookmark"
        class="bg-grey-2 q-pt-xs flex justify-around"
      ></ProductListCarouselV1>
      <ProductListCarouselV1
        title="Baseado nas suas tendências de compra:"
        iconTitle="bookmark"
        class="bg-grey-2 q-pt-xs flex justify-around"
      ></ProductListCarouselV1>
      <ProductListCarouselV1
        title="Baseado nas suas tendências de compra:"
        iconTitle="bookmark"
        class="bg-grey-2 q-pt-xs flex justify-around"
      ></ProductListCarouselV1>
      <ProductListCarouselV1
        title="Baseado nas suas tendências de compra:"
        iconTitle="bookmark"
        class="bg-grey-2 q-pt-xs flex justify-around"
      ></ProductListCarouselV1>
    </div>
  </q-page>
</template>

<script setup>
import ProductBannerV1 from "src/components/E-commerce/BannerComponent/ProductBannerV1/ProductBannerV1.vue";
import ProductListCarouselV1 from "src/components/E-commerce/ListsComponent/ProductListCarouselV1/ProductListCarouselV1.vue";
import ProductListV1 from "src/components/E-commerce/ListsComponent/ProductListV1/ProductListV1.vue";
import ProductListV2 from "src/components/E-commerce/ListsComponent/ProductListV2/ProductListV2.vue";
import { onMounted } from "vue";

import userMainLayoutStore from "src/stores/Layout/MainLayout";
const mainLayoutStore = userMainLayoutStore();

defineOptions({
  name: "IndexPage",
});

onMounted(() => {
  mainLayoutStore.disableSearchAndCategory();
});
</script>

<style scoped></style>
