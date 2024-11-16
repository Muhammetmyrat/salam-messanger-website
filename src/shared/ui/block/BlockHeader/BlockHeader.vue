<template>
  <div class="block-header">
    <div class="block-header__title">{{ title }}</div>
    <router-link :to="link" class="block-header__link">
      <p>All</p>
      <IconArrowRight />
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { IconArrowRight } from '@/shared/ui/Icons'

  defineProps({
    title: { String, default: '' },
    link: { String, default: '' }
  })
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
