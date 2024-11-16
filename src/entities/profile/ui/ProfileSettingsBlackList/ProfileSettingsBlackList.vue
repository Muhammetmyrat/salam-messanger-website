<template>
  <div class="user">
    <div class="user__infos">
      <div class="user__avatar">
        <Avatar name="Aman" active />
      </div>
      <div class="user__info">
        <div class="user__name">Muhammetmyrat</div>
        <div class="user__user-name">@muhammetmyrat</div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@/shared/ui/Avatar'

</script>

<style scoped lang="scss">
  @import 'styles.scss';
</style>
