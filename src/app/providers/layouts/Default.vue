<script setup lang="ts">
  import { MainLayout } from '@/shared/ui/layouts'
  import { TheSidebar } from '@/widgets/TheSidebar'
  import { MusicPlayer } from '@/widgets/player/MusicPlayer'
  import { MusicStore } from '@/features/music'

  const { isShowPlayer } = MusicStore
</script>

<template>
  <MainLayout>
    <template v-slot:sidebar>
      <TheSidebar />
    </template>
  </MainLayout>
  <MusicPlayer v-if="isShowPlayer" />
</template>
