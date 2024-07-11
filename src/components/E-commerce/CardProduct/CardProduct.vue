<template>
  <div>
    <div class="wrapper cursor-pointer">
      <div class="outer">
        <div class="content animated fadeInLeft">
          <!-- <b-form-rating
            readonly
            id="rating-inline"
            style="display: flex; justify-content: flex-start"
            no-border
            variant="dark"
            size="sm"
            inline
            :value="rating.rate"
          ></b-form-rating> -->
          <div class="row">
            <q-btn
              :color="isFavorite() ? 'accent' : 'grey-7'"
              style="display: flex; justify-content: flex-start"
              size="sm"
              round
              @click="isFavorite() ? removeFromFavorite() : addToFavorite()"
            >
              <q-icon
                class="text-white"
                :name="isFavorite() ? 'favorite' : 'favorite_border'"
                aria-hidden="true"
              ></q-icon>
            </q-btn>
            <q-space></q-space>
            <q-badge
              dense
              outline
              rounded
              class="q-mr-md"
              color="green-5"
              label="up"
            >
              <q-icon name="eva-trending-up-outline"></q-icon>
            </q-badge>
          </div>

          <p @click="verDetalhes()" class="bg animated fadeInDown">
            <q-icon class="mr-1 grey-text" name="bookmark"></q-icon
            ><span class="category text-weight-medium">{{ category }}</span>
          </p>

          <h1 @click="verDetalhes()" class="text-bold">
            {{ title.substring(0, 39) }} {{ title.length > 39 ? "..." : "" }}
          </h1>

          <div class="row">
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
          <div class="row">
            <span class="text-bold text-caption text-grey-9 q-mt-xs"
              >$ {{ price }}
            </span>
            <q-space></q-space>
            <q-badge class="q-mr-md" outline rounded color="red" label="10%" />
          </div>
        </div>
        <img
          style="cursor: pointer"
          @click="verDetalhes()"
          v-b-modal.modal-center-detail-product
          :src="image"
          width="50px"
          class="animated fadeInRight"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import userEcommerceStore from "src/stores/Components/ecommerce";

import { computed } from "vue";

const ecommerceStore = userEcommerceStore();

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
  category: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

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
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* .wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Montserrat;
	background: #262626;
	width: 100%;
	height: 100vh;
} */

.outer {
  position: relative;
  background: #fff;
  border: 1px solid rgba(223, 228, 229, 0.887);
  /*  border-radius: 15px; */
  height: 200px;
  width: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

img {
  position: absolute;

  right: 5px;
  z-index: 0;
  align-items: center;
  animation-delay: 0.5s;
}

.content {
  animation-delay: 0.3s;
  position: absolute;
  left: 5px;
  z-index: 3;
}

h1 {
  text-align: left;
  color: rgb(94, 90, 90);
  font-size: 10px;
  width: 110px;
  line-height: 1.3;
}

p {
  width: 180px;
  font-size: 10px;
  line-height: 1.4;
  color: #aaa;
  margin: 20px 0;
  text-align: left;
}

.bg {
  display: flex;
  justify-content: flex-start;
  color: rgb(75, 75, 76);
  margin-bottom: 0.5rem;
  /*   padding: 7px 14px; */
  border-radius: 50px;
}
.category {
  color: rgb(75, 75, 76);
  text-transform: capitalize;
  border-radius: 50px;
}
.button {
  width: fit-content;
  height: fit-content;
  margin-top: 10px;
  cursor: pointer;
}

.button a {
  display: inline-block;
  overflow: hidden;
  position: relative;
  font-size: 11px;
  color: #111;
  text-decoration: none;
  padding: 10px 13px;
  /* border: 1px solid #c9c8c879; */
  font-weight: bold;
}

.button a:after {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  width: 0%;
  background: #ffc107;
  height: 100%;
  z-index: -1;
  transition: width 0.3s ease-in-out;
  transform: skew(-25deg);
  transform-origin: right;
}

.on-cart {
  background: #ffc107;
  color: #fff;
  transition: all 0.5s ease;
}
.off-cart {
  background: #fff;
  color: #000;
  transition: all 0.5s ease;
}

.button a:hover:after {
  width: 150%;
  left: -10px;
  transform-origin: left;
}

.button a:hover {
  color: #fff;
  transition: all 0.5s ease;
}

.button a:nth-of-type(1) {
  border-radius: 50px 0 0 50px;
  border-right: none;
}

.button a:nth-of-type(2) {
  border-radius: 0px 50px 50px 0;
}

.cart-icon {
  padding-right: 8px;
}

.footer {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
