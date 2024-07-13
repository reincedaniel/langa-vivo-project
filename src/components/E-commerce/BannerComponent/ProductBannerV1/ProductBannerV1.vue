<template>
  <q-carousel
    animated
    v-model="slide"
    infinite
    :autoplay="autoplay"
    swipeable
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    :height="$q.platform.is.mobile ? '200px' : ''"
    arrows
  >
    <q-carousel-slide
      v-for="(img, index) in images"
      :key="index"
      :name="index"
      :img-src="img"
    >
      <div class="overlay"></div>
      <div class="content q-mx-md">
        <h6
          class="text-white font-langa-vivo-tl text-body2 text-center"
          v-html="title"
        ></h6>
        <q-btn
          class="font-langa-vivo-tl"
          color="grey-2"
          icon="check"
          :label="titleSubtitle"
          no-caps
          outline
          @click="onClick"
        />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref, computed } from "vue";
const slide = ref(1);
const autoplay = ref(true);
defineOptions({
  name: "ProductBannerV1",
});

const props = defineProps({
  title: {
    type: String,
    default: () => `Venha ser um
          <span class="text-bold text-italic">langa vivo</span>, junta-te a esta
          grande família.`,
  },
  titleSubtitle: {
    type: String,
    default: () => `Inscreva-te agora mesmo!`,
  },
  banners: {
    type: Array,
  },
});

const images = computed(() => {
  const images = [
    `${window.location.origin}/images/background/1.jpg`,
    `${window.location.origin}/images/background/2.jpg`,
    `${window.location.origin}/images/background/3.jpg`,
  ];
  return props.banners || images;
});

const onClick = () => {
  // Implement your click handler logic here
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
