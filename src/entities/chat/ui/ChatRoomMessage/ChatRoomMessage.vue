<template>
  <div :class="classes">
    <div class="message__wrapper">
      <div class="message__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
        <span class="message__time-status">
          <p>15:32</p>
          <div class="message__status">
            <IconRead />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IconRead } from '@/shared/ui/Icons'
  import { computed } from 'vue'

  const props = defineProps({
    inside: {
      type: Boolean,
      default: false
    }
  })

  const classes = computed(() => ['message', { message_inside: props.inside }])
</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
