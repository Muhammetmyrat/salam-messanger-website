<script setup lang="ts">
  import { MainLayout } from '@/shared/ui/layouts'
  import { TheSidebar } from '@/widgets/TheSidebar'
  import { MusicPlayer } from '@/widgets/player/MusicPlayer'
</script>

<template>
  <MainLayout>
    <template v-slot:sidebar>
      <TheSidebar />
    </template>
  </MainLayout>
  <MusicPlayer v-if="true" />
</template>
