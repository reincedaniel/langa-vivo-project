<template>
  <q-card
    class="product-card shadow-0 size-of-my-card"
    tabindex="0"
    role="listitem"
  >
    <div class="q-ma-sm">
      <q-img
        :src="image"
        :alt="title"
        :fit="cover"
        width="100%"
        height="100%"
        :placeholder-src="placeholderSrc"
        :transition="false"
      />
    </div>

    <!-- Conteúdo do Cartão de Produto -->
    <q-card-section class="bottom-section q-pa-xs">
      <q-item-label lines="2" class="text-caption text-weight-bold">
        {{ title }}
      </q-item-label>
      <q-item-label lines="1" class="text-caption">
        {{ description }}
      </q-item-label>
      <div class="q-mt-xs">
        <q-badge color="green" outline label="New" />
        <q-badge
          v-if="discount > 0"
          color="orange"
          :label="`${discount}% OFF`"
        />
      </div>
      <div class="q-mt-sm q-card-bottom">
        <q-item-label class="text-bold text-caption text-grey-9 q-mt-xs"
          >$ {{ formattedPrice }}</q-item-label
        >
        <!-- <q-btn
          color="primary"
          class="q-ml-sm"
          icon="mdi-cart-plus"
          @click="addToCart()"
          flat
          dense
        /> -->
        <q-btn
          @click="isCart() ? removeFromCart() : addToCart()"
          padding="sm"
          :outline="!isCart()"
          :flat="isCart()"
          round
          dense
          size="sm"
          :icon="isCart() ? 'shopping_cart ' : 'shopping_cart_checkout'"
          :class="isCart() ? 'bg-yellow-8' : ''"
          :color="isCart() ? 'white' : ''"
          no-caps
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import userEcommerceStore from "src/stores/Components/ecommerce";
import { useQuasar } from "quasar";
import { computed, ref } from "vue";

defineOptions({
  name: "ProductCardV2",
});

const ecommerceStore = userEcommerceStore();
const $q = useQuasar();
const showDetail = ref(false);

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: () => "",
  },
  image: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

const placeholderSrc = ref("//placehold.it/200x200");

const showDetails = (grid) => {
  $q.bottomSheet({
    message: "Bottom Sheet message",
    grid,
    actions: [
      {
        label: "Drive",
        img: "https://cdn.quasar.dev/img/logo_drive_128px.png",
        id: "drive",
      },
      {
        label: "Keep",
        img: "https://cdn.quasar.dev/img/logo_keep_128px.png",
        id: "keep",
      },
      {
        label: "Google Hangouts",
        img: "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
        id: "calendar",
      },
      {
        label: "Calendar",
        img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
        id: "calendar",
      },
      {},
      {
        label: "Share",
        icon: "share",
        id: "share",
      },
      {
        label: "Upload",
        icon: "cloud_upload",
        color: "primary",
        id: "upload",
      },
      {},
      {
        label: "John",
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
        id: "john",
      },
    ],
  })
    .onOk((action) => {
      // console.log('Action chosen:', action.id)
    })
    .onCancel(() => {
      // console.log('Dismissed')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};
const favoriteProducts = computed(() => {
  return ecommerceStore.favoriteProducts;
});
const cartProducts = computed(() => {
  return ecommerceStore.cartProducts;
});

const verDetalhes = () => {
  const obj = {
    id: props.id,
    title: props.title,
    image: props.image,
    description: props.description,
    category: props.category,
    price: props.price,
    rating: props.rating,
  };
  ecommerceStore.addProductDetails(obj);
};

const addToFavorite = () => {
  const obj = {
    id: props.id,
    title: props.title,
    image: props.image,
    description: props.description,
    category: props.category,
    price: props.price,
    rating: props.rating,
  };
  ecommerceStore.addFavorite(obj);
};

const removeFromFavorite = () => {
  const obj = {
    id: props.id,
  };
  ecommerceStore.removeFavorite(obj);
};

const isFavorite = () => {
  const arr = favoriteProducts.value;
  return arr && arr.length > 0 && arr.some((e) => e.id === props.id);
};

const addToCart = () => {
  const obj = {
    id: props.id,
    title: props.title,
    image: props.image,
    description: props.description,
    category: props.category,
    price: props.price,
    rating: props.rating,
  };
  ecommerceStore.addCart(obj);
};

const removeFromCart = () => {
  const obj = {
    id: props.id,
  };
  ecommerceStore.removeCart(obj);
};

const isCart = () => {
  const arr = cartProducts.value;
  return arr && arr.length > 0 && arr.some((e) => e.id === props.id);
};
// Formatando o preço para exibir duas casas decimais
const formattedPrice = computed(() => {
  return props.price; // .toFixed(2);
});
</script>

<style scoped>
.size-of-my-card {
  width: 160px;
  height: 268px;
  border: 1px solid #f9efef;
  border-radius: 0%;
}

.product-card {
  /* margin-bottom: 1rem; */
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.product-card .q-img-wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.product-card .bottom-section {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.8rem;
  box-sizing: border-box;
}

.product-card .q-card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
