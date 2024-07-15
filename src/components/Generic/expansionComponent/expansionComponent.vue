<template>
  <q-expansion-item
    header-class="text-black text-weight-medium"
    expand-icon="add"
    expanded-icon="remove"
    dense
  >
    <q-item
      v-for="(item, index) in arrayOfItems"
      :key="index"
      class="q-py-sm text-grey-8"
      dense
      clickable
      v-ripple
    >
      <q-item-section avatar>
        <q-icon size="xs" :name="item.icon" />
      </q-item-section>

      <q-item-section>{{ item.label }} </q-item-section>
    </q-item>
  </q-expansion-item>
</template>

<script setup>
defineOptions({
  name: "expansionComponent",
});

const props = defineProps({
  arrayOfItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
