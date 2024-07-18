<template>
  <q-table
    title="Categorias"
    class="shadow-0 col bg-transparent"
    :rows="categories"
    :columns="columns"
    row-key="description"
    :loading="loading"
    table-class="cursor-pointer"
  >
    <template v-slot:header-cell="props">
      <q-th :props="props">
        <q-icon name="tag" size="1.5em" />
        {{ props.col.label }}
      </q-th>
    </template>

    <template v-slot:header-cell-actions="props">
      <q-th :props="props">
        <q-icon name="settings" size="1.5em" />
        {{ props.col.label }}
      </q-th>
    </template>
    <template v-slot:top-right>
      <q-btn color="blue-9" dense rounded icon="add" @click="addCategory()" />
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="q-gutter-x-xs">
        <q-btn
          color="red-9"
          icon="delete"
          class="float-right"
          size="sm"
          round
          @click="removeCategory(props.row)"
        />
        <q-btn
          color="orange"
          icon="edit"
          class="float-right"
          size="sm"
          round
          @click="addCategory(props.row)"
        />
      </q-td>
    </template>
    <template v-slot:loading>
      <q-inner-loading
        showing
        color="grey-5"
        label="Processando"
        label-class="text-grey-6"
      />
    </template>
  </q-table>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useQuasar } from "quasar";

import useCategoriesStore from "src/stores/Backoffice/Categories";

const categoriesStore = useCategoriesStore();
const $q = useQuasar();
const loading = ref(false);
defineOptions({
  name: "CategoryComponent",
});

const columns = [
  {
    name: "description",
    required: true,
    label: "Descrição",
    align: "left",
    field: (row) => row.description,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "actions",
    label: "Ações",
    align: "right",
    field: (row) => row.actions,
  },
];
const restructureData = (data) => {
  return data.map((item) => {
    const { uid, attributes } = item;
    return { uid, ...attributes };
  });
};
const categories = computed(() => {
  const data = categoriesStore.categories?.data || [];
  return restructureData(data);
});

const addCategory = (payload) => {
  $q.dialog({
    class: "font-langa-vivo",
    title: payload && payload.uid ? "Editar Categoria" : "Adicionar Categoria",
    message: "Descrição (Mínimo 1 Caracter)",
    /* position: "bottom", */
    square: true,
    prompt: {
      model: (payload && payload.description) || "",
      square: true,
      isValid: (val) => val && val.length > 0, // << here is the magic
      type: "text", // optional
      outlined: true,
      color: "black",
      icon: "dashboard",
      clearable: true,
    },
    cancel: {
      label: "Cancelar",
      flat: true,
      color: "red-9",
    },
    ok: {
      label: "Confirmar",
      color: "yellow-9",
    },
    persistent: true,
  }).onOk(async (description) => {
    loading.value = true;

    if (payload && payload.uid) {
      const result = await categoriesStore.updateCategory(payload.uid, {
        description,
      });
      returnStatus(result.done);
    } else {
      const result = await categoriesStore.postCategory({ description });
      returnStatus(result.done);
    }
    loading.value = false;
  });
};

const removeCategory = (payload) => {
  $q.dialog({
    class: "font-langa-vivo",
    title: "Excluir",
    message: "Deseja excluir esta categoria?",
    /* position: "bottom", */
    square: true,
    cancel: {
      label: "Não",
      flat: true,
      color: "red-9",
    },
    ok: {
      label: "Sim",
      color: "green-9",
    },
    persistent: true,
  }).onOk(async () => {
    loading.value = true;
    const result = await categoriesStore.removeCategory(payload);
    loading.value = false;

    returnStatus(result.done);
  });
};

const returnStatus = async (done, offPositive = true) => {
  if (done) {
    if (offPositive) {
      $q.notify({
        type: "positive",
        message: "Operação realizada com sucesso.",
      });
    }
  } else {
    $q.notify({
      type: "negative",
      message: "Ocorreu um erro ao realizar esta operação.",
    });
  }
};

const getCategories = async () => {
  loading.value = true;
  const result = await categoriesStore.getCategories();
  loading.value = false;
  returnStatus(result.done, false);
};
onMounted(() => {
  getCategories();
});
</script>
