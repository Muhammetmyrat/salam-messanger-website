<template>
  <div class="settings-qrCode">
    <div class="settings-qrCode__header">
      <div class="settings-qrCode__title">QR code</div>
    </div>
    <div class="settings-qrCode__body">
      <ProfileSettingsQRCode />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProfileSettingsQRCode } from '@/entities/profile/ui/ProfileSettingsQRCode'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
