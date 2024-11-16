<template>
  <button class="add-contact">
    <IconAddContact />
  </button>
</template>

<script setup lang="ts">
  import { IconAddContact } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  .add-contact {
    background-color: transparent;
    color: var(--white);
  }
</style>
