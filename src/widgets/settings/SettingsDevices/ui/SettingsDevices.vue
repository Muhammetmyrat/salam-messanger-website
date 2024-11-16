<template>
  <div class="settings-devices">
    <div class="settings-devices__header">
      <div class="settings-devices__title">Devices</div>
    </div>
    <div class="settings-devices__body">
      <ProfileSettingsDevices />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProfileSettingsDevices } from '@/entities/profile/ui'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
