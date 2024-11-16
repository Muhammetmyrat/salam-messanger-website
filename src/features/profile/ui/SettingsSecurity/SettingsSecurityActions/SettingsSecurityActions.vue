<template>
  <div class="security-actions">
    <button @click="toggleSettingsSecurity">Cancel</button>
    <button>Ok</button>
  </div>
</template>

<script setup lang="ts">
import { toggleSettingsSecurity } from '@/entities/profile/model/update'
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
