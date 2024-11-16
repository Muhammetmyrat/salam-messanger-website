<template>
  <div class="text-field">
    <div class="text-field__icon">
      <IconSearch />
    </div>
    <input type="text" :value="value" :placeholder="placeholder" class="text-field__input" />
  </div>
</template>

<script setup lang="ts">
  import { IconSearch } from '@/shared/ui/Icons'

  defineProps({
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  })
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
