<template>
  <MainBox>
    <!-- Header Slot -->
    <template #header>
      <MusicHeader />
    </template>

    <!-- Music Blocks and Top Music -->
    <MusicBlocks :blocks="musicStore.musicsMain" />
    <MusicTop :blockTop="musicStore.musicsMainTop" />

    <!-- Artist Preview -->
    <ArtistPreview />
  </MainBox>
</template>

<script setup lang="ts">
import { MainBox } from '@/shared/ui/MainBox'
import { MusicHeader } from '@/widgets/music/MusicHeader'
import { MusicBlocks } from '@/widgets/music/MusicBlocks'
import { MusicTop } from '@/widgets/music/MusicTop'
import { ArtistPreview } from '@/widgets/music/ArtistPreview'
import { MusicModel } from '@/entities/music'

const musicStore = MusicModel.useMusicStore()

musicStore.fetchMusicMain()
</script>
