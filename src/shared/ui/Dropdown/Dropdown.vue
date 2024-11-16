<template>
  <div ref="dropdownBody" class="dropdown">
    <div class="dropdown__body">
      <div @click="showDropdown ? closeDropdown() : openDropdown()" :class="['dropdown__button', { show: showDropdown }]">
        <p v-if="selectedItem">{{ selectedItem?.name }}</p>
        <p v-else>{{ placeholder }}</p>
        <span class="icon"><IconArrowBottom /></span>
      </div>
      <div v-if="showDropdown" ref="dropdownMenu" class="dropdown__menu">
        <div class="dropdown__list">
          <div v-for="item in items" @click="selectItem(item)" class="dropdown__item">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { IconArrowBottom } from '@/shared/ui/Icons'
  import { useDropdown } from '@/shared/lib/helpers/dropdown'

  const emit = defineEmits(['selectItem'])

  defineProps({
    placeholder: {
      type: String,
      default: ''
    },
    selectedItem: {
      type: Object as PropType<any>,
      default: () => {}
    },
    items: {
      type: Array as PropType<any>,
      default: () => []
    }
  })

  const { dropdownBody, dropdownMenu, showDropdown, closeDropdown, openDropdown } = useDropdown()

  function selectItem(item: any) {
    emit('selectItem', item)
    closeDropdown()
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
