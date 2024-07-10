<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <q-avatar>
            <q-icon size="28px" name="fa-solid fa-user-secret" />
          </q-avatar>
          <span class="text-bold font-langa-vivo-tl font-size-tl"
            >langa <span class="text-warning">vivo</span></span
          >
        </q-toolbar-title>
        <q-btn dense flat round icon="perm_phone_msg" />
        <q-btn dense flat round icon="fa-brands fa-instagram" />
        <q-btn dense flat round icon="shopping_cart" @click="toggleRightDrawer">
          <q-badge color="accent" rounded floating />
        </q-btn>
      </q-toolbar>

      <q-tabs indicator-color="yellow-9" dense align="left">
        <q-route-tab
          to="/"
          label="Page One"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page2"
          label="Page Two"
          class="border-button-border"
          no-caps
        />
        <q-route-tab
          to="/page3"
          label="Page Three"
          class="border-button-border"
          no-caps
        />
        <!-- <q-route-tab
          to="/page4"
          label="Page Four"
          class="border-button-border"
        />
        <q-route-tab
          to="/page5"
          label="Page Five"
          class="border-button-border"
        />
        <q-route-tab
          to="/page6"
          label="Page Six"
          class="border-button-border"
        /> -->
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay>
      <!-- drawer content -->
      <pre>Left</pre>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" class="bg-warning" overlay>
      <!-- drawer content -->
      <pre>Right</pre>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from "vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

onMounted(() => {
  leftDrawerOpen.value = false;
  rightDrawerOpen.value = false;
});
</script>

<style lang="scss" scoped>
.border-button-border {
  border-radius: 15px;
}
.font-size-tl {
  font-size: 18px;
}
</style>
