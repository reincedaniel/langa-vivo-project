<template>
  <q-page class="page-container">
    <SectionBanner class="section-banner" />

    <section class="section">
      <div class="row q-my-md q-mx-sm">
        <q-icon size="22px" class="mr-1 grey-text" name="bookmark"></q-icon>
        <span
          style="font-weight: 500"
          class="text-subtitle2text-grey-9 font-langa-vivo"
          >Baseado nas suas tendências de compra:</span
        >
      </div>
      <div class="row">
        <div class="form-wrapper justify-center">
          <CardProduct
            v-for="product in products"
            :key="product.id"
            v-bind="product"
          ></CardProduct>
        </div>
      </div>
    </section>
    <section class="section bg-grey-1">
      <div class="row q-my-md q-mx-sm">
        <q-icon size="22px" class="mr-1 grey-text" name="star"></q-icon>
        <span
          style="font-weight: 500"
          class="text-subtitle2text-grey-9 font-langa-vivo"
          >As suas reomendações:</span
        >
      </div>
      <div class="row">
        <div class="form-wrapper justify-center">
          <CardProduct
            v-for="product in products"
            :key="product.id"
            v-bind="product"
          ></CardProduct>
        </div>
      </div>
      <div class="row q-mb-xl"></div>
    </section>
  </q-page>
</template>

<script setup>
import SectionBanner from "src/components/E-commerce/SectionBanner/SectionBanner.vue";
import CardProduct from "src/components/E-commerce/CardProduct/CardProduct.vue";
import { computed, onMounted, ref } from "vue";
import userEcommerceStore from "src/stores/Components/ecommerce";

defineOptions({
  name: "IndexPage",
});
const ecommerceStore = userEcommerceStore();

const stars = ref(4);
const loading = ref(false);

const getProducts = async () => {
  loading.value = true;
  const res = await ecommerceStore.getProducts();
  if (res && res.status === 200) {
    loading.value = false;
  } else {
    loading.value = false;
  }
};

const products = computed(() => {
  return ecommerceStore.products;
});

onMounted(() => {
  getProducts();
});
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.section-banner {
  flex: 0 0 auto;
  height: 50vh;
}

.section {
  flex: 1;
  /* display: flex; */
  /*  padding: 10px; */
  /* min-height: 300px; */
}

.form-wrapper {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  gap: 8px;
}

.my-card {
  width: 180px; /* Ajusta a largura para incluir a margem */
  /*  margin: 5px; */ /* Adiciona espaço ao redor de cada cartão */
}

@media (max-width: 768px) {
  .my-card {
    width: 100%; /* Em telas menores, os campos ocupam toda a largura menos a margem */
    /* margin: 10px; */ /* Mantém o espaçamento ao redor dos cartões */
  }
}
</style>
