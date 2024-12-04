<template>
  <div :class="classes">
    <div class="preview-block__wrapper">
      <div class="preview-block__header">
        <button @click="back" class="preview-block__back">
          <IconArrowLeft />
        </button>
        <div class="preview-block__name">{{ title }}</div>
        <button @click="close" class="preview-block__close">
          <IconDismiss />
        </button>
      </div>
      <div class="preview-block__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { IconArrowLeft, IconDismiss } from '@/shared/ui/Icons'

  const emit = defineEmits(['close', 'back'])
  const props = defineProps({
    title: { type: String, default: '' },
    isShow: { type: Boolean, default: false },
  })

  function back() {
    emit('back')
  }
  function close() {
    emit('close')
  }

  const classes = computed(() => [
    'preview-block',
    {
      'preview-block__show': props.isShow,
    },
  ])
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
