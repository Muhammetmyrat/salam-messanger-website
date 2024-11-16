<template>
  <PopUp active bgNone>
    <div class="confirm">
      <div class="confirm__body">
        <div class="confirm__title">{{ title }}</div>
        <div class="confirm__sub-title">
          {{ subTitle }}
          </div>
      </div>
      <div class="confirm__actions">
        <button @click="$emit('close')">Нет</button>
        <button>Да</button>
      </div>
    </div>
  </PopUp>
</template>

<script setup>
  import { PopUp } from '../PopUpBody'

  defineProps({
    title: { type: String, default: 'Выход' },
    subTitle: { type: String, default: 'Вы действительно хотите выйте?' }
  })

  defineEmits(['close'])
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>