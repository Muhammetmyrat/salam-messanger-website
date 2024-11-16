<template>
  <div class="border-block-box">
    <div class="border-block-box__header">
      <slot name="header" />
    </div>

    <div class="border-block-box__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
