<template>
  <div :class="['profile-box-item', { 'profile-box-item__double': double }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineProps({
    double: { type: Boolean, default: false }
  })
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
