<template>
  <q-layout view="hHh LpR FFF">
    <q-header
      elevated
      :class="
        mainLayoutStore.isHeaderBackgroundColor
          ? 'bg-black text-white'
          : 'bg-white text-black'
      "
    >
      <q-toolbar class="my-header" v-if="!clientStore">
        <q-toolbar-title>
          <q-avatar>
            <q-icon size="22px" name="fa-solid fa-user-secret" />
          </q-avatar>
          <span class="text-bold font-langa-vivo-tl font-size-tl"
            >langa.<span
              class="text-white"
              :class="
                mainLayoutStore.isHeaderBackgroundColor
                  ? 'text-yellow-8'
                  : 'text-yellow-8'
              "
              >vivo</span
            ></span
          >
        </q-toolbar-title>

        <!-- <span class="text-bold font-langa-vivo-tl">@todos</span> -->
        <q-btn to="/" dense flat round icon="fa-solid fa-store" />
        <q-btn to="/sign" dense flat round icon="fa-solid fa-user" />
      </q-toolbar>

      <q-toolbar class="my-header" v-else>
        <q-toolbar-title>
          <q-avatar>
            <q-icon size="22px" name="fa-solid fa-store" />
          </q-avatar>
          <span class="text-bold font-langa-vivo-tl font-size-tl"
            >@{{ clientStore }}</span
          >
        </q-toolbar-title>

        <span v-if="false" class="text-bold font-langa-vivo-tl font-size-tl"
          >langa.<span class="text-yellow-7">vivo</span></span
        >
        <q-avatar color="yellow">
          <q-icon size="22px" name="fa-solid fa-user-secret" />
        </q-avatar>
      </q-toolbar>

      <div v-if="mainLayoutStore.showSearch" class="row">
        <q-input
          dense
          bg-color="white"
          color="grey-9"
          class="col q-mx-sm font-langa-vivo"
          v-model="text"
          input-class="font-langa-vivo"
          type="text"
          label="Procurar"
          filled
          style="border-bottom: 1px solid transparent"
        >
          <template v-slot:append>
            <q-btn
              color="grey"
              icon="eva-search-outline"
              round
              :flat="text"
              dense
              @click="onClick"
            />
          </template>
          <!--prepend <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="clear"
              class="cursor-pointer"
              @click="text = ''"
            />
          </template> -->
        </q-input>
      </div>
      <q-tabs
        v-if="mainLayoutStore.showCategory"
        inline-label
        indicator-color="yellow-7"
        class="bg-yellow-1"
        dense
        align="left"
      >
        <q-route-tab to="/" label="Tudo" class="border-button-border" no-caps />
        <q-route-tab
          to="/page2"
          label="Livros"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page3"
          label="Tickets"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page4"
          label="Cursos"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page5"
          label="Beleza"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page6"
          label="Mulher"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page7"
          label="Homem"
          class="border-button-border"
          no-caps
        />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      v-if="mainLayoutStore.showDrawerLeft"
      side="left"
      overlay
    >
      <!-- drawer content -->
      <pre>Left</pre>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      v-if="mainLayoutStore.showDrawerRight"
      side="right"
      class="bg-warning"
      overlay
    >
      <!-- drawer content -->
      <pre>Right</pre>
    </q-drawer>

    <q-page-container class="font-langa-vivo">
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs
        switch-indicator
        indicator-color="accent"
        class="bg-white text-grey-9"
        align="justify"
        active-class="text-accent"
      >
        <q-route-tab to="/" icon="eva-home" />
        <q-route-tab icon="eva-person-outline" />
        <q-route-tab icon="eva-shopping-cart-outline">
          <q-badge color="yellow-8" rounded floating>{{
            lengthCartProducts
          }}</q-badge>
        </q-route-tab>
        <q-route-tab @click="toggleRightDrawer" icon="eva-menu-outline" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import userEcommerceStore from "src/stores/Components/ecommerce";
import userMainLayoutStore from "src/stores/Layout/MainLayout";

const ecommerceStore = userEcommerceStore();
const mainLayoutStore = userMainLayoutStore();

const route = useRoute();
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const text = ref("");
const headerHidden = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const lengthCartProducts = computed(() => {
  const result = ecommerceStore.cartProducts || [];
  return result.length;
});

const clientStore = computed(() => {
  const { us } = route.query;
  const clientId = us;
  if (!clientId) {
    return clientId;
  } else if (clientId === "101010") {
    return "Vanessa José";
  } else {
    return "Enzadaz";
  }
});

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const handleScroll = () => {
  headerHidden.value = window.scrollY > 0; // altere conforme necessário
};

onMounted(() => {
  leftDrawerOpen.value = false;
  rightDrawerOpen.value = false;

  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.border-button-border {
  border-radius: 15px;
}
.font-size-tl {
  font-size: 14px;
}

.q-field--standard .q-field__control-wrapper {
  border-color: transparent;
}

.header-hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  display: none;
}

.q-header.scrolled .my-header {
  transform: translateY(0%);
  transition: transform 0.3s ease;
}
</style>
