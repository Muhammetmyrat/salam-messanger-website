<template>
  <div class="textarea">
    <div class="textarea__body">
      <textarea
        :placeholder="placeholder"
        :value="modelValue || value"
        :disabled="disabled"
        @input="handleInput"
        class="textarea__textarea"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:modelValue', 'value', 'updateValue'])

  defineProps({
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    modelValue: { type: [String, Number], default: null },
    value: { type: [String, Number], default: null },
    disabled: { type: Boolean, default: false }
  })

  const update = (newValue: string) => {
    emit('update:modelValue', newValue)
    emit('updateValue', newValue)
  }

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    let newValue = target.value
    update(newValue)
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
