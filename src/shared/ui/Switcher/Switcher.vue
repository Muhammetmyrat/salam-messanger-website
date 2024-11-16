<template>
  <div class="switcher">
    <input 
      type="checkbox"  
      :value="modelValue || value"
      :disabled="disabled" 
      @input="handleChecked"
      id="switcher__toggle"
    >
    <label for="switcher__toggle"></label>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:modelValue', 'value', 'updateValue'])

  defineProps({
    label: { type: String, default: '' },
    modelValue: { type: Boolean, default: false },
    value: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  })

  const update = (newValue: boolean) => {
    emit('update:modelValue', newValue)
    emit('updateValue', newValue)
  }

  function handleChecked(event: Event) {
    const target = event.target as HTMLInputElement
    let newValue = target.checked
    update(newValue)
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
