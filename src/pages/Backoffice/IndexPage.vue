<template>
  <q-page class="page-container"> TESTE </q-page>
</template>

<script setup>
import { onMounted } from "vue";

import userMainLayoutStore from "src/stores/Layout/MainLayout";
const mainLayoutStore = userMainLayoutStore();

defineOptions({
  name: "IndexPage",
});
onMounted(() => {
  mainLayoutStore.disableSearchAndCategory();
  mainLayoutStore.enableHeaderBackgroundColor();
});
</script>

<style scoped></style>
