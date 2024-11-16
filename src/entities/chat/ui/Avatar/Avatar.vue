<template>
  <div :class="['avatar', { avatar_active: active }]">
    <div class="avatar__border">
      <div class="avatar__image">
        <img src="/avatar.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    active: { type: Boolean, default: false }
  })
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
