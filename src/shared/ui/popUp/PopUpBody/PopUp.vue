<template>
  <div :class="['pop-up', { active: props.active }, {'bg-none' : props.bgNone }]" @click.stop="close">
    <div class="pop-up__wrapper" :style="{ 'max-width': `${popUpWidth}px` }">
      <div class="pop-up__body">
        <pop-up-body-content @close="close">
          <slot></slot>
        </pop-up-body-content>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { PopUpBodyContent } from '../PopUpBodyContent'

  const emits = defineEmits(['close'])

  const props = defineProps({
    popUpWidth: {
      type: String,
      default: () => '400',
    },
    active: {
      type: Boolean,
      default: () => false,
    },
    bgNone: {
      type: Boolean,
      default: () => false,
    },
    publish: {
      type: Boolean,
      default: () => false,
    },
    notClose: {
      type: Boolean,
      default: () => true,
    },
  })
  const close = () => {
    emits('close')
  }
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>