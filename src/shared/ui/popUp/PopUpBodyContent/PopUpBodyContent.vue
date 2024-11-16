<template>
  <div class="content" @click.stop>
    <div class="content__wrapper">
      <div class="content__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emits = defineEmits(['close'])
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
