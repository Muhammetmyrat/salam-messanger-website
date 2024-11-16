<template>
  <div class="qr-code">
    <div ref="qrCode" class="qr-code__body"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import QRCodeStyling from 'qr-code-styling'

  const emit = defineEmits([])

  const props = defineProps({
    data: { type: String, default: 'https://www.salam.tm/' },
  })

  const qrCode = ref(null)

  const qrCodeInstance = new QRCodeStyling({
  width: 240,
  height: 240,
  data: props.data,
  image: "/images/logo-black.svg",
  dotsOptions: {
    color: '#3f8ae0',
    type: "rounded"
  },
  cornersSquareOptions:{
    type: "extra-rounded",
  },
  backgroundOptions: {
    color: "#ffffff", // Customize background color
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5
  }
})

onMounted(() => {
  if (qrCode.value) {
    qrCodeInstance.append(qrCode.value)
  }
})

</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
