<template>
  <q-page class="personal-center-page">
    <!-- Breadcrumbs -->
    <q-breadcrumbs class="q-my-md q-mx-xs">
      <q-breadcrumbs-el label="Início" />
      <q-breadcrumbs-el label="Centro pessoal" />
    </q-breadcrumbs>

    <!-- Main Content -->
    <div class="q-layout">
      <div
        v-if="$q.screen.gt.sm"
        class="sidebar left-sidebar col-12 col-md-2 q-mb-md shadow-0"
      >
        <q-card class="shadow-0" bordered square>
          <q-card-section>
            <div class="row">
              <span class="text-body1 text-weight-bold">Centro Pessoal</span>
            </div>
          </q-card-section>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="xs" name="redeem" />
            </q-item-section>

            <q-item-section>Desejos</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="xs" name="fa-solid fa-eye" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Seguindo</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
        <MenuComponent></MenuComponent>
      </div>

      <div class="col-12 col-md-8 shadow-0">
        <q-card class="shadow-0 q-pb-xs q-mb-md" bordered square>
          <q-card-section class="">
            <div class="row">
              <span class="text-body1 text-weight-bold"
                >Olá, lourenco.carlos2022
                <q-badge color="grey" rounded>
                  <q-icon
                    name="fa-solid fa-crown"
                    color="white"
                    class="q-pa-xs"
                  />
                  S0</q-badge
                >
              </span>
            </div>
          </q-card-section>

          <q-card-section class="row justify-between">
            <div
              v-for="item in items"
              :key="item.name"
              class="text-center cursor-pointer"
            >
              <div>
                <q-btn flat rounded :icon="item.icon" no-caps></q-btn>
              </div>
              <div class="text-caption">{{ item.label }}</div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="shadow-0" bordered square>
          <q-card-section>
            <div class="row">
              <span class="text-body1 text-weight-bold">Meus Pedidos</span>
              <q-space />

              <span
                ><q-btn
                  color="grey-6"
                  flat
                  rounded
                  dense
                  label="Veja tudo"
                  no-caps
                  class="text-caption q-pl-md"
                >
                  <q-icon size="xs" name="fa-solid fa-chevron-right" /></q-btn
              ></span>
            </div>
          </q-card-section>

          <q-card-section class="row justify-between">
            <div
              v-for="item in itemsOrders"
              :key="item.name"
              class="text-center cursor-pointer"
            >
              <div>
                <q-btn flat rounded :icon="item.icon" no-caps></q-btn>
              </div>
              <div class="text-caption">{{ item.label }}</div>
            </div>
          </q-card-section>

          <!-- Conteúdo principal -->
          <div class="text-center q-ma-xs">
            <q-banner
              icon="sentiment_very_dissatisfied"
              dense
              class="q-py-xl bg-grey-2"
            >
              Está vazio aqui
            </q-banner>
          </div></q-card
        >
      </div>

      <div class="sidebar right-sidebar col-12 col-md-2 q-mb-md shadow-0">
        <q-card class="shadow-0" bordered square>
          <q-card-section>
            <div class="row">
              <span class="text-body1 text-weight-bold"
                >Serviço Ao Cliente</span
              >
            </div>
          </q-card-section>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="xs" name="email" />
            </q-item-section>

            <q-item-section>Mensagens</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon size="xs" name="support_agent" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Suporte</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MenuComponent from "src/components/E-commerce/MenuComponent/MenuComponent.vue";

const screenWidth = ref(window.innerWidth);
import userMainLayoutStore from "src/stores/Layout/MainLayout";

const mainLayoutStore = userMainLayoutStore();
defineOptions({
  name: "UserProfile",
});
window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});
const items = ref([
  { icon: "receipt", label: "Cupons" },
  { icon: "star", label: "Pontos" },
  { icon: "account_balance_wallet", label: "Carteira" },
  { icon: "card_giftcard", label: "Cartão Presente" },
]);

const itemsOrders = ref([
  { icon: "money_off", label: "Não pago" },
  { icon: "hourglass_bottom", label: "Processando" },
  { icon: "local_shipping", label: "Enviado" },
  { icon: "rate_review", label: "Revisados" },
  { icon: "assignment_return", label: "Devolução" },
]);

onMounted(() => {
  mainLayoutStore.disableSearchAndCategory();
  mainLayoutStore.enableHeaderBackgroundColor();
});
</script>

<style scoped>
.personal-center-page {
  margin: 5px;
}

.q-layout {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr; /* Aumentando a coluna do meio */
  gap: 20px;
}

.q-layout .q-card {
  width: 100%;
}

.left-sidebar {
  grid-column: 1;
}

.main-content {
  grid-column: 2;
  padding: 20px;
}

.right-sidebar {
  grid-column: 3;
}

.order-status-buttons .q-btn {
  margin-right: 8px;
}

@media (max-width: 1023px) {
  .q-layout {
    grid-template-columns: 1fr;
  }

  .left-sidebar,
  .main-content,
  .right-sidebar {
    grid-column: auto;
  }
}
</style>
