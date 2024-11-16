<template>
  <div class="security-fields">
    <TextField type="password" placeholder="Enter password" />
    <TextField type="password" placeholder="Re-enter password"/>
  </div>
</template>

<script setup lang="ts">
  import { TextField } from '@/shared/ui/TextField'

</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
