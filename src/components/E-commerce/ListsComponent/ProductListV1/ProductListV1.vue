<template>
  <section class="section">
    <div class="row q-my-md q-mx-sm">
      <q-icon size="22px" class="mr-1 grey-text" :name="iconTitle"></q-icon>
      <span
        style="font-weight: 500"
        class="text-subtitle2text-grey-9 font-langa-vivo"
        >{{ title }}</span
      >
    </div>
    <div class="row">
      <div class="form-wrapper justify-center">
        <ProductCardV1
          v-for="product in products"
          :key="product.id"
          v-bind="product"
        ></ProductCardV1>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductCardV1 from "src/components/E-commerce/CardComponent/ProductCardV1/ProductCardV1.vue";
import { computed, onMounted, ref } from "vue";
import userEcommerceStore from "src/stores/Components/ecommerce";

defineOptions({
  name: "ProductListV1",
});

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
