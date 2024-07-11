<template>
  <q-page padding>
    <q-list bordered>
      <q-item v-for="product in products" :key="product.id" clickable>
        <q-item-section avatar>
          <q-img :src="product.image" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ product.name }}</q-item-label>
          <q-item-label caption>{{ product.price }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);

onMounted(async () => {
  // Simulando uma chamada à API
  products.value = await fetchProducts();
});

async function fetchProducts() {
  return [
    {
      id: 1,
      name: "Produto 1",
      price: "$10.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Produto 2",
      price: "$20.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Produto 3",
      price: "$30.00",
      image: "https://via.placeholder.com/150",
    },
  ];
}
</script>

<style scoped>
.q-page {
  max-width: 800px;
  margin: auto;
}

.q-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
