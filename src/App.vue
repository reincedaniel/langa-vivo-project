<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();

$q.loadingBar.setDefaults({
  color: "yellow-8",
  size: "5px",
  position: "bottom",
});
defineOptions({
  name: "App",
});
</script>

<style lang="scss">
body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-thumb {
  background: rgba(131, 58, 180, 0.678);
  background: linear-gradient(
    30deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(242, 62, 62, 0.692) 35%,
    rgba(252, 176, 69, 0.692) 100%
  );
  border-radius: 10px;
}

.curve-surve {
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
}
</style>
