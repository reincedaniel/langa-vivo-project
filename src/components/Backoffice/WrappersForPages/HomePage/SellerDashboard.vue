<template>
  <q-page class="personal-center-page">
    <!-- Breadcrumbs -->
    <q-breadcrumbs class="q-my-md q-mx-xs">
      <q-breadcrumbs-el label="Início" />
      <q-breadcrumbs-el label="Centro pessoal" />
    </q-breadcrumbs>

    <!-- Main Content -->
    <div class="q-layout row">
      <div
        v-if="$q.screen.gt.md"
        class="sidebar left-sidebar col-12 col-lg-2 q-mb-md shadow-0 q-pr-sm"
      >
        <q-card class="shadow-0" square>
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
        <MenuComponent menu></MenuComponent>
      </div>

      <div class="col-12 col-lg-10 shadow-0">
        <q-card class="shadow-0 q-pb-xs q-mb-md" bordered square>
          <q-card-section class="">
            <div class="row">
              <span class="text-body1 text-weight-bold"
                >{{ user?.email }}
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
                <q-btn flat rounded :icon="item.icon" no-caps
                  ><q-badge
                    v-if="item.count"
                    color="red"
                    :label="item.count"
                    rounded
                    floating
                /></q-btn>
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
          <div v-if="false" class="text-center q-ma-xs">
            <q-banner
              icon="sentiment_very_dissatisfied"
              dense
              class="q-py-xl bg-grey-2"
            >
              Está vazio aqui
            </q-banner>
          </div></q-card
        >
        <q-card-section
          class="row justify-between bg-red-1 no-padding q-py-xl bg-grey-2"
        >
          <categoryComponent></categoryComponent>
        </q-card-section>
      </div>
    </div>

    <q-dialog
      v-model="showMenu"
      maximized
      class="full-height"
      position="left"
      backdrop-filter="none"
    >
      <q-card class="bg-white row content-start" :style="cardStyle">
        <q-scroll-area class="row full-width fitx">
          <div class="sticky">
            <div class="row col-12 close-dialog-row bg-white">
              <span class="text-body1 text-bold q-mt-sm">MENU</span>
              <q-space />
              <q-btn
                dense
                flat
                round
                class="q-mb-sm"
                icon="clear"
                color="black"
                @click="showMenu = false"
              />
            </div>
            <q-separator></q-separator>
          </div>
          <MenuComponent defaultOpened></MenuComponent>
        </q-scroll-area>
      </q-card>
    </q-dialog>
    <q-page-sticky
      v-if="!$q.screen.gt.md"
      position="bottom-left"
      :offset="[18, 18]"
    >
      <q-btn @click="showMenu = true" fab icon="menu" color="black" />
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { Screen, useQuasar } from "quasar";
import { ref, onMounted, computed } from "vue";
import MenuComponent from "src/components/E-commerce/MenuComponent/MenuComponent.vue";
import CategoryComponent from "src/components/Backoffice/CategoryComponent/CategoryComponent.vue";
import useUserStore from "src/stores/Users";

const showMenu = ref(false);
const screenWidth = ref(window.innerWidth);
import userMainLayoutStore from "src/stores/Layout/MainLayout";
const userStore = useUserStore();

const mainLayoutStore = userMainLayoutStore();
defineOptions({
  name: "SellerDashboard",
});
window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});

const user = computed(() => {
  return userStore.user || { email: "default" };
});

const cardStyle = computed(() => {
  const width = Screen.width;
  if (Screen.lt.sm) {
    return `width:${width}px;`;
  } else {
    return "width:414px;";
  }
});
const items = ref([
  { icon: "store", label: "Lojas", count: "1" },
  { icon: "mail", label: "Mensagens", count: "5" },
  /* { icon: "support_agent", label: "Suporte" }, */
  { icon: "conveyor_belt", label: "Vendas" },
  { icon: "bubble_chart", label: "Geral" },
]);

const itemsOrders = ref([
  { icon: "money_off", label: "Não pago" },
  /* { icon: "hourglass_bottom", label: "Processando" }, */
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
.close-dialog-row {
  padding: 4px 12px;
}
.fitx {
  height: 100vh;

  overflow-y: auto;
}

.personal-center-page {
  min-height: fit-content !important;
  margin: 5px;
}

.q-layout {
  /* display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 20px; */
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

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  font-size: 25px;
  z-index: 1;
}
</style>
