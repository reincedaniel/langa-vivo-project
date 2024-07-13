<template>
  <q-page class="page-container">
    <!--  <SignComponent
      title="Iniciar Sessão/Registrar"
      description="Ganhe desconto veja mais"
    ></SignComponent> -->

    <SignComponent
      be-langa
      title="Área do Empreendedor"
      description="Ser um Langa.Vivo / Já sou Um Langa.Vivo"
    ></SignComponent>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import SignComponent from "src/components/Generic/SignComponent/SignComponent.vue";

import userMainLayoutStore from "src/stores/Layout/MainLayout";

const mainLayoutStore = userMainLayoutStore();

defineOptions({
  name: "SignClient",
});

onMounted(() => {
  mainLayoutStore.disableSearchAndCategory();
  mainLayoutStore.changeHeaderBackgroundColor();
});
</script>

<style scoped></style>
