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
      <div class="form-wrapper justify-evenly">
        <ProductCardV2
          v-for="product in paginatedProducts"
          :key="product.id"
          v-bind="product"
        ></ProductCardV2>
      </div>
    </div>
    <div v-if="products.length > 20" class="row pagination-controls">
      <q-btn
        color="grey-9"
        dense
        flat
        icon="fa-solid fa-angles-left"
        @click="prevPage"
        :disabled="currentPage === 1"
      />
      <span>Pág. {{ currentPage }} de {{ totalPages }}</span>

      <q-btn
        color="grey-9"
        dense
        flat
        icon="fa-solid fa-angles-right"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCardV2 from "src/components/E-commerce/CardComponent/ProductCardV2/ProductCardV2.vue";
import { computed, onMounted, ref } from "vue";
import userEcommerceStore from "src/stores/Components/ecommerce";

defineOptions({
  name: "ProductListV2",
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

const title = computed(() => props.title);
const iconTitle = computed(() => props.iconTitle);
const products = computed(
  () => props.products || ecommerceStore.products || []
);

const itemsPerPage = 20;
const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage);
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const getProducts = async () => {
  loading.value = true;
  const res = await ecommerceStore.getProducts();
  loading.value = false;
  if (res && res.status === 200) {
    currentPage.value = 1; // Reset to first page when products are fetched
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

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.pagination-controls button {
  margin: 0 8px;
  padding: 8px 16px;
  font-size: 14px;
}

.pagination-controls span {
  font-size: 14px;
}
</style>
