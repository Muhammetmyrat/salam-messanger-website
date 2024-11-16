<template>
  <div class="block-box">
    <div class="block-box__header">
      <slot name="header" />
    </div>

    <div class="block-box__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
