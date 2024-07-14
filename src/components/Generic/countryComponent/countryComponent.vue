<template>
  <div class="row col-12 justify-center q-py-md">
    <q-badge
      color="grey-8"
      rounded
      class="q-px-md q-py-xs"
      text-color="{2:black}"
      :label="`${myCountry.country_name}`"
    />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";

import userExternStore from "src/stores/Utils/Extern";
const externStore = userExternStore();

defineOptions({
  name: "PoliticsComponent",
});

const myCountry = computed(() => {
  return externStore.country;
});

onMounted(() => {
  externStore.getGeoInfo();
});
</script>

<style scoped></style>
