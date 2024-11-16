<template>
  <div class="preview-songs">
    <div class="preview-songs__header">
      <slot name="header" />
    </div>
    <div class="preview-songs__body">
      <div class="preview-songs__list">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
