<template>
  <q-page class="page-container">
    <SignComponent
      title="Iniciar Sessão"
      description="Ganhe desconto veja mais"
    ></SignComponent>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import SignComponent from "src/components/Generic/SignComponent/SignComponent.vue";

import userMainLayoutStore from "src/stores/Layout/MainLayout";

const mainLayoutStore = userMainLayoutStore();

defineOptions({
  name: "SignUser",
});

onMounted(() => {
  mainLayoutStore.disableSearchAndCategory();
  mainLayoutStore.enableHeaderBackgroundColor();
});
</script>

<style scoped></style>
