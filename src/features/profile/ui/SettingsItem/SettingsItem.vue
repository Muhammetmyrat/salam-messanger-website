<template>
<div class="items">
  <div class="items__item" v-for="item in items" :key="item?.id" @click="$emit('itemClick', item)">
    <div class="items__name">
      {{ item?.name }}
    </div>
    <div class="items__icon" v-if="item?.active">
      <IconStatus />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
  import { IconStatus } from '@/shared/ui/Icons'  
  defineProps({
    items: {
      type: Array as any,
      default: []
    }
  })

  defineEmits(['itemClick'])
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
