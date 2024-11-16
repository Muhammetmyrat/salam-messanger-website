<template>
  <PopUp active>
    <div class="security-pass">
      <div class="security-pass__body">
        <div class="security-pass__title">Set device password</div>
        <div class="security-pass__fields">
          <slot name="fields"></slot>
          <p>
            Password must be 6-128 characters, and may only contain letters, numbers, and common punctuation
          </p>
        </div>
      </div>
      <div class="security-pass__actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </PopUp>
</template>

<script setup>
  import { PopUp } from '@/shared/ui/popUp'
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
