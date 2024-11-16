<template>
  <div class="authorization-form">
    <div class="authorization-form__wrapper">
      <div class="authorization-form__logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div v-if="title" class="authorization-form__title">{{ title }}</div>
      <div class="authorization-form__box">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    title: { type: String, default: '' }
  })
</script>

<style scoped lang="scss">
  @import './style.scss';
</style>
