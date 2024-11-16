<template>
  <div class="publications">
    <div v-for="index in 10" :key="index" class="publications__publication">
      <Publication />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Publication } from '@/widgets/Publication'
</script>

<style scoped lang="scss">
  .publications {
    height: 100vh;
    overflow: auto;

    // .publications__publication
    &__publication {
      &:not(:first-child) {
        margin-top: 1px;
      }
    }
  }
</style>
