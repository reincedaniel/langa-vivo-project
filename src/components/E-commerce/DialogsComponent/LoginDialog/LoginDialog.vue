<template>
  <q-dialog v-model="dialog" position="top" persistent>
    <q-card style="width: 1000px; max-width: 100vw">
      <q-linear-progress :value="1" color="grey-8" />
      <q-card-section class="row items-center no-wrap">
        <div>
          <div class="text-weight-bold">{{ title }}</div>
          <div class="text-grey">Preencha os campos abaixo</div>
        </div>

        <q-space />

        <q-btn flat round icon="close" @click="closeDialog" />
      </q-card-section>
      <q-card-section class="row col">
        <div class="row justify-center items-center full-height">
          <div
            class="column col-12 col-sm-8 col-md-6 col-lg-4 justify-center full-height"
          >
            <div class="row">
              <div class="col-12 justify-center text-center">
                <span class="text-bold text-h6"> Entre com sua conta</span>
              </div>
              <div class="col-12 justify-center q-py-md">
                <q-input
                  stack-label
                  v-model="text"
                  square
                  outlined
                  dense
                  type="text"
                  color="grey-9"
                  label="E-mail:"
                />
              </div>
              <div class="col-12 justify-center q-py-xs">
                <q-input
                  stack-label
                  v-model="text"
                  square
                  outlined
                  dense
                  type="password"
                  color="grey-9"
                  label="Palavra-Passe"
                />
              </div>

              <div
                class="row col-12 q-py-sm text-grey-8 text-caption cursor-pointer"
              >
                <q-space></q-space>
                <span>Esqueceu a palavra-passe</span>
              </div>

              <div class="row col-12 justify-center">
                <q-btn
                  class="col-12"
                  color="black"
                  label="Iniciar Sessão"
                  to="/user"
                  square
                />
              </div>

              <PoliticsComponent></PoliticsComponent>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import PoliticsComponent from "src/components/Generic/PoliticsComponent/PoliticsComponent.vue";

const text = ref(null);

defineOptions({
  name: "LoginDialog",
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: () => "",
  },
  description: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);

const dialog = computed(() => {
  return props.modelValue;
});

const closeDialog = (event) => {
  emit("update:modelValue", false);
};

onMounted(() => {});
</script>

<style scoped></style>
