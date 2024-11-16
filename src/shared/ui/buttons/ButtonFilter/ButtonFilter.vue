<template>
  <SButton>
    <div class="button-filter">
      <div class="button-filter__icon">
        <IconFilter />
      </div>
      <div class="button-filter__text">Filters</div>
    </div>
  </SButton>
</template>

<script setup lang="ts">
  import { SButton } from '@/shared/ui/buttons'
  import { IconFilter } from '@/shared/ui/Icons'
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
