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
        <q-form
          @submit="register()"
          class="row justify-center items-center full-height"
        >
          <div
            class="column col-12 col-sm-8 col-md-6 col-lg-4 justify-center full-height"
          >
            <div class="row">
              <div class="col-12 justify-center text-center">
                <span class="text-bold text-h6">
                  <span>Crie sua conta e faça compras</span>
                </span>
              </div>
              <div
                style="font-weight: 600"
                class="text-grey-7 col-12 justify-center text-center text-caption"
              >
                <span>É rápido e fácil.</span>
              </div>
              <div class="col-12 justify-center q-py-md">
                <q-input
                  stack-label
                  v-model="email"
                  square
                  outlined
                  :rules="[(val) => !!val || '']"
                  dense
                  type="text"
                  color="grey-9"
                  label="Número de telemóvel ou E-mail:"
                />
              </div>
              <div class="col-12 justify-center q-py-xs">
                <q-input
                  stack-label
                  v-model="password"
                  square
                  outlined
                  :rules="[(val) => !!val || '']"
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
                  type="submit"
                  square
                />
              </div>
              <pre>{{ email }}</pre>
              <q-space />
              <pre>{{ password }}</pre>

              <PoliticsComponent></PoliticsComponent>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref, computed, reactive } from "vue";
import PoliticsComponent from "src/components/Generic/PoliticsComponent/PoliticsComponent.vue";
import useUserStore from "src/stores/Users";
import { useQuasar } from "quasar";
const userStore = useUserStore();

const email = ref(null);
const password = ref(null);

const $q = useQuasar();

defineOptions({
  name: "RegisterDialog",
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

const options = [
  {
    label: "seller",
    value: "seller",
  },
  {
    label: "buyer",
    value: "buyer",
  },
  {
    label: "admin",
    value: "admin",
  },
];
const right = ref(false);
const accepted = ref([]);
const emit = defineEmits(["update:modelValue"]);

const dialog = computed(() => {
  return props.modelValue;
});

const closeDialog = (event) => {
  emit("update:modelValue", false);
};
const register = async () => {
  try {
    const result = await userStore.signUp({
      email: email.value,
      password: password.value,
      roles: [accepted.value],
    });
    console.log("Result: ", result);
    $q.notify({
      message: "Operação realizada com sucesso!",
      type: "positive",
    });
  } catch (error) {
    $q.notify({
      message: "Erro ao realizar esta operação.",
      type: "negative",
    });
  }
};

onMounted(() => {});
</script>

<style scoped></style>
