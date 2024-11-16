<template>
  <div :class="classes">
    <div class="text-field__body">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue || value"
        :disabled="disabled"
        @input="handleInput"
        class="text-field__input"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const emit = defineEmits(['update:modelValue', 'value', 'updateValue'])

  const props = defineProps({
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    modelValue: { type: [String, Number], default: null },
    value: { type: [String, Number], default: null },
    disabled: { type: Boolean, default: false }
  })

  const classes = computed(() => {
    return ['text-field']
  })

  const update = (newValue: string) => {
    emit('update:modelValue', newValue)
    emit('updateValue', newValue)
  }

  function removeChar(input: string): string {
    return input.replace(/\D/g, '')
  }

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    let newValue = target.value
    if (props.type === 'number') {
      newValue = removeChar(newValue)
      target.value = newValue
    }
    update(newValue)
  }
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
