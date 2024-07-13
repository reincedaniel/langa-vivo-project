<template>
  <section class="section">
    <div class="row q-mt-md">
      <span
        style="font-weight: 500"
        class="text-subtitle2text-grey-9 font-langa-vivo"
      >
        <q-icon size="22px" class="mr-1 grey-text" :name="iconTitle"></q-icon
        >{{ title }}</span
      >
    </div>
    <div class="row">
      <div class="row">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="white"
          control-text-color="grey"
          padding
          autoplay=""
          arrows
          class="bg-transparent"
          height="300px"
        >
          <q-carousel-slide
            v-for="(product, index) in products"
            :key="index"
            :name="index"
            class=""
          >
            <ProductCardV2 v-bind="product"></ProductCardV2>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCardV2 from "src/components/E-commerce/CardComponent/ProductCardV2/ProductCardV2.vue";
import { computed, onMounted, ref } from "vue";
import userEcommerceStore from "src/stores/Components/ecommerce";

defineOptions({
  name: "ProductListCarouselV1",
});

const slide = ref(0);
const ecommerceStore = userEcommerceStore();
const loading = ref(false);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  iconTitle: {
    type: String,
    default: "",
  },
  products: {
    type: Array,
  },
});

const title = computed(() => {
  return props.title;
});
const iconTitle = computed(() => {
  return props.iconTitle;
});
const products = computed(() => {
  return props.products || ecommerceStore.products;
});
const getProducts = async () => {
  loading.value = true;
  const res = await ecommerceStore.getProducts();
  if (res && res.status === 200) {
    loading.value = false;
  } else {
    loading.value = false;
  }
};

onMounted(() => {
  getProducts();
});
</script>

<style scoped>
.section {
  flex: 1;
}
.form-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.form-wrapper-new {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.my-card {
  width: 180px;
}

@media (max-width: 768px) {
  .my-card {
    width: 100%;
  }
}
</style>
