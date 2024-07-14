<template>
  <q-dialog v-model="dialog" position="bottom" persistent>
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
                <span class="text-bold text-h6">
                  <span> Registra-se e começa a vender</span>
                </span>
              </div>
              <div
                style="font-weight: 600"
                class="text-grey-7 col-12 justify-center text-center text-caption"
              >
                <span>Comércio digital.</span>
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
                  label="Número de telemóvel ou E-mail:"
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

              <div class="q-pt-sm text-grey-8 text-caption">
                <span>Preferência:</span>
                <q-option-group
                  class="q-mt-sm text-caption"
                  name="accepted_genres"
                  v-model="accepted"
                  :options="options"
                  type="checkbox"
                  color="black"
                  inline
                  dense
                />
              </div>

              <div class="col-12 justify-center q-pt-md">
                <q-separator spaced inset color="grey-3" />
              </div>

              <div class="q-pt-sm text-grey-8 text-caption">
                <q-checkbox
                  v-model="right"
                  dense
                  class="text-caption q-pb-md"
                  label="Gostaria de receber ofertas exclusivas e as últimas notícias por e-mail."
                />
              </div>

              <div class="row col-12 justify-center">
                <q-btn
                  class="col-12"
                  color="black"
                  label="Registrar"
                  @click="
                    () => {
                      showDetail = true;
                    }
                  "
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

const showSignup = ref(false);

const text = ref(null);

const accepted = ref([]);
const right = ref(false);

const options = [
  {
    label: "Mulher",
    value: "rock",
  },
  {
    label: "Homem",
    value: "funk",
  },
  {
    label: "Tamanhos grandes",
    value: "pop",
  },
  {
    label: "Crianças",
    value: "popd",
  },
  {
    label: "Casa & Sala",
    value: "popwd",
  },
  {
    label: "Artigos para animais",
    value: "popqwd",
  },
];
defineOptions({
  name: "SignupDialog",
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
