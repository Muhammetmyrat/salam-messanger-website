<template>
  <MainBox class="music-block-box">
    <template v-slot:header>
      <MusicHeader />
    </template>
    <BorderBlockBox>
      <template v-slot:header>
        <div class="music-block-header">
          <div class="music-block-header__empty"></div>
          <div class="music-block-header__title">Block name</div>
          <button class="music-block-header__close">
            <IconDismiss />
          </button>
        </div>
      </template>
      <div class="music-block">
        <div class="music-block__row">
          <div v-for="index in 20" :key="index" class="music-block__cell">
            <TrackElement />
          </div>
        </div>
      </div>
    </BorderBlockBox>
  </MainBox>
</template>

<script setup lang="ts">
  import { MainBox } from '@/shared/ui/MainBox'
  import { MusicHeader } from '@/widgets/music/MusicHeader'
  import { BorderBlockBox } from '@/shared/ui/block'
  import { TrackElement } from '@/entities/music'
  import { IconDismiss } from '@/shared/ui/Icons'
</script>

<style lang="scss" scoped>
  @import 'styles';
</style>
