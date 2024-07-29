<template>
  <div class="row justify-center items-center full-height q-pt-xl q-px-md">
    <div
      class="column col-12 col-sm-8 col-md-4 col-lg-3 justify-center full-height"
    >
      <div class="row">
        <div class="col-12 justify-center text-center">
          <q-icon name="fa-solid fa-gears" size="35px" class="q-mr-sm"></q-icon>
          <span class="text-bold text-h6"> {{ title }}</span>
        </div>
        <div
          style="font-weight: 600"
          class="text-grey-7 col-12 justify-center q-py-md text-center text-caption"
        >
          <span>{{ description }}</span>
        </div>
        <div class="col-12 justify-center q-py-md">
          <q-input
            stack-label
            v-model="email"
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

        <div class="row col-12 q-py-sm text-grey-8 text-caption cursor-pointer">
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
        <!-- ------------ -->
        <div class="col-12 justify-center q-py-md">
          <q-separator spaced inset color="grey-3" />
        </div>
        <div class="row col-12 justify-center q-py-md">
          <q-btn
            class="col-12"
            color="black"
            icon="fa-solid fa-square-envelope"
            outline
            label="Criar nova conta"
            no-caps
            @click="checkContinue()"
            square
          />
        </div>
        <div class="row col-12 justify-center q-py-md">
          <q-btn
            class="col-12"
            color="red-6"
            icon="fa-brands fa-google"
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
            label="Continuar com Facebook"
            no-caps
            @click="onClick"
            square
          />
        </div>
        <countryComponent></countryComponent>
        <PoliticsComponent></PoliticsComponent>
      </div>
    </div>
  </div>

  <SignupDialog v-model:model-value="showSignup" :title="title"></SignupDialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import PoliticsComponent from "src/components/Generic/PoliticsComponent/PoliticsComponent.vue";
import countryComponent from "src/components/Generic/countryComponent/countryComponent.vue";
import SignupDialog from "src/components/Backoffice/DialogsComponent/SignupDialog/SignupDialog.vue";

const showSignup = ref(false);
const showLogin = ref(false);
const email = ref(null);
const right = ref(false);
const accepted = ref([]);
const text = ref(null);
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
  name: "SignClientComponent",
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
});

const checkContinue = () => {
  showSignup.value = true;
  /* if (text.value && text.value.toLowerCase() === "tem") {
    showLogin.value = true;
  } else {
    showSignup.value = true;
  } */
};

onMounted(() => {});
</script>

<style scoped></style>
