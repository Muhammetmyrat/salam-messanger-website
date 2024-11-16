<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  danger: { type: Boolean, default: false }
})

const classes = computed(() => ['button', {
  'button__danger': props.danger,
}])
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
