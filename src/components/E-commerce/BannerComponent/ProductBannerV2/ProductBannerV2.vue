<template>
  <div class="section-background bg-yellow-2">
    <q-img
      :src="currentImage"
      fit="cover"
      class="absolute-full image-fade"
      :class="{ fade: isFading }"
    />
    <div class="overlay"></div>
    <div class="content q-mx-md">
      <h6 class="text-white font-langa-vivo-tl">
        Venha ser um
        <span class="text-bold text-italic">langa vivo</span>, junta-te a esta
        grande família.
      </h6>
      <q-btn
        class="font-langa-vivo-tl"
        color="grey-2"
        icon="check"
        label="Inscreva-te agora mesmo!"
        no-caps
        outline
        size="lg"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
const slide = ref(1);
const autoplay = ref(true);
defineOptions({
  name: "ProductBannerV2",
});

const props = defineProps({
  title: {
    type: String,
    default: () => "",
  },
  banners: {
    type: Array,
  },
});

const images = computed(() => {
  const images = [
    "images/background/1.jpg",
    "images/background/2.jpg",
    "images/background/3.jpg",
  ];
  return props.banners || images;
});

const currentImage = ref(images.value[0]);
const isFading = ref(false);
let imageIndex = 0;

const changeImage = () => {
  isFading.value = true;
  setTimeout(() => {
    imageIndex = (imageIndex + 1) % images.value.length;
    currentImage.value = images.value[imageIndex];
    isFading.value = false;
  }, 1400); // Tempo de duração da transição
};

let interval;

onMounted(() => {
  interval = setInterval(changeImage, 100000);
});

onUnmounted(() => {
  clearInterval(interval);
});

const onClick = () => {
  // Implement your click handler logic here
};
</script>

<style scoped>
.section-background {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

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

.image-fade {
  transition: opacity 1.4s ease-in-out;
}

.fade {
  opacity: 0;
}
</style>
