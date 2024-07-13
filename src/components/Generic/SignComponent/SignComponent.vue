<template>
  <div class="row justify-center items-center full-height q-pt-xl q-px-md">
    <div
      class="column col-12 col-sm-8 col-md-4 col-lg-3 justify-center full-height"
    >
      <div class="row">
        <div class="col-12 justify-center text-center">
          <span class="text-bold text-h6">
            <q-icon
              v-if="beLanga"
              name="fa-solid fa-gears"
              size="35px"
              class="q-mr-sm"
            ></q-icon>
            {{ title }}</span
          >
        </div>
        <div
          style="font-weight: 600"
          class="text-grey-7 col-12 justify-center q-py-md text-center text-caption"
        >
          <span>{{ description }}</span>
        </div>
        <div class="col-12 justify-center q-py-md">
          <q-input
            v-model="text"
            square
            outlined
            dense
            type="text"
            label="Número de telemóvel ou E-mail:"
          />
        </div>
        <div class="row col-12 justify-center q-py-md">
          <q-btn
            class="col-12"
            color="black"
            label="Continuar"
            @click="onClick"
            square
            :outline="beLanga"
            :icon="beLanga ? 'fa-solid fa-hammer' : ''"
          />
        </div>
        <div class="col-12 justify-center q-py-md">
          <q-separator spaced inset color="grey-3" />
        </div>
        <div class="row col-12 justify-center q-py-md">
          <q-btn
            class="col-12"
            color="red-6"
            icon="fa-brands fa-google"
            :outline="!beLanga"
            label="Continuar com Google"
            no-caps
            @click="onClick"
            square
          />
        </div>
        <div class="row col-12 justify-center q-py-md">
          <q-btn
            class="col-12"
            color="blue-8"
            icon="fa-brands fa-facebook"
            :outline="!beLanga"
            label="Continuar com Facebook"
            no-caps
            @click="onClick"
            square
          />
        </div>
        <div class="row col-12 justify-center q-py-md">
          <q-badge
            color="grey-8"
            rounded
            class="q-px-md q-py-xs"
            text-color="{2:black}"
            :label="`${myCountry.country_name}`"
          />
        </div>
        <div class="row col-12 justify-center q-py-md text-center">
          <span
            >Ao continuar, você concorda com nossa
            <span class="text-blue"
              >Política de Privacidade e Cookies e Termos e condições.</span
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";

import userExternStore from "src/stores/Utils/Extern";

const externStore = userExternStore();

defineOptions({
  name: "SignComponent",
});

const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
  description: {
    type: String,
    default: "",
  },
  beLanga: {
    type: Boolean,
    default: false,
  },
});

const myCountry = computed(() => {
  return externStore.country;
});

onMounted(() => {
  externStore.getGeoInfo();
});
</script>

<style scoped></style>
