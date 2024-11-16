<template>
  <div class="music-blocks">
    <div class="music-blocks__block" v-for="block in blocks" :key="block.id">
      <!-- Render specific components based on the block type -->
      <MusicBlock v-if="block.type === 'music'" :block="block" />
      <ArtistBlock v-else-if="block.type === 'singer'" :block="block" />
      <PlaylistBlock
        v-else-if="['playlist', 'album'].includes(block.type)"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MusicBlock, ArtistBlock, PlaylistBlock } from '@/features/music'

defineProps<{
  blocks: any[]
}>()
</script>

<style scoped lang="scss">
  @import './styles.scss';
</style>
