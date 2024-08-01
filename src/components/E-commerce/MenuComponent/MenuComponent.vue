<template>
  <q-card class="shadow-0" square>
    <q-card-section v-if="menu">
      <div class="row">
        <span class="text-body1 text-weight-bold">Menu</span>
      </div>
    </q-card-section>

    <q-list class="rounded-borders q-gutter-y-md">
      <expansionComponent
        label="Minha conta"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="myAccount"
        :default-opened="defaultOpened"
      ></expansionComponent>

      <expansionComponent
        label="Meus Ativos"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="myActives"
        :default-opened="defaultOpened"
      ></expansionComponent>

      <expansionComponent
        label="Meus Pedidos"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="myOrders"
        :default-opened="defaultOpened"
      ></expansionComponent>

      <expansionComponent
        label="As Minhas Listas"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="myList"
        :default-opened="defaultOpened"
      ></expansionComponent>

      <expansionComponent
        label="Serviço Ao Cliente"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="serviceClient"
        :default-opened="defaultOpened"
      ></expansionComponent>

      <expansionComponent
        label="Outros Serviços"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="othersServices"
        :default-opened="defaultOpened"
      ></expansionComponent>

      <expansionComponent
        label="Política"
        class="q-gutter-y-md q-mb-md"
        :arrayOfItems="politics"
        :default-opened="defaultOpened"
      ></expansionComponent> </q-list
  ></q-card>
</template>

<script setup>
import expansionComponent from "src/components/Generic/expansionComponent/expansionComponent.vue";

defineOptions({
  name: "MenuComponent",
});

const props = defineProps({
  defaultOpened: {
    type: Boolean,
    default: false,
  },
  menu: {
    type: Boolean,
    default: false,
  },
});

const myAccount = [
  { label: "Meu Perfil", icon: "account_circle" },
  { label: "Livro De Endereços", icon: "book" },
  { label: "Minhas Opções De Pagamento", icon: "currency_exchange" },
  { label: "Minhas Medições", icon: "square_foot" },
  { label: "Gerenciar Minha Conta", icon: "admin_panel_settings" },
];
const myActives = [
  { label: "Meus Cupões", icon: "confirmation_number" },
  { label: "Meus Pontos", icon: "verified" },
  { label: "Minha Carteira", icon: "account_balance_wallet" },
  { label: "Cartão Presente", icon: "redeem" },
];
const myOrders = [
  { label: "Todos Os Pedidos", icon: "density_small" },
  { label: "Pedidos Não Pagos", icon: "money_off" },
  { label: "Pedidos Em Curso", icon: "local_shipping" },
  { label: "Pedidos Enviados", icon: "fa-solid fa-truck-ramp-box" },
  { label: "Pedidos Devolvidos", icon: "fa-regular fa-share-from-square" },
];
const myList = [
  { label: "Lista De Desejos", icon: "volunteer_activism" },
  { label: "Visto Recentemente", icon: "fa-solid fa-binoculars" },
  { label: "Seguir", icon: "fa-solid fa-eye" },
];
const serviceClient = [
  { label: "Minhas Mensagens", icon: "fa-solid fa-comments" },
  { label: "Serviços e Registos", icon: "fa-solid fa-server" },
];
const othersServices = [
  { label: "Meu Artigo De Teste", icon: "fa-solid fa-money-bill-wave" },
  { label: "Centro De Sondagem", icon: "hub" },
  { label: "Compartilhe e Ganhe", icon: "fa-solid fa-bullhorn" },
  { label: "Preferências De Contacto", icon: "connect_without_contact" },
];
const politics = [
  { label: "Preço De Envio", icon: "fa-solid fa-sack-dollar" },
  { label: "Política De Devolução", icon: "fa-solid fa-file-import" },
  {
    label: "Política De Privacidade e Cookies",
    icon: "fa-solid fa-scale-balanced",
  },
];
</script>

<style scoped></style>
