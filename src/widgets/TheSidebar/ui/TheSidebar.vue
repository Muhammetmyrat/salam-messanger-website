<script setup lang="ts">
  import { IconChats, IconGlance, IconAdd, IconMusic, IconVideo, IconBook } from '@/shared/ui/Icons'

  const props = defineProps({
    mini: { type: Boolean, default: false }
  })
</script>

<template>
  <aside :class="['sidebar', { _mini: props.mini }]">
    <div class="sidebar__box">
      <div class="sidebar__nav-block">
        <div class="sidebar__menu">
          <nav class="menu">
            <ul class="menu__body">
              <li class="menu__list">
                <router-link class="menu__link" to="/chat">
                  <IconChats />
                </router-link>
              </li>
              <li class="menu__list">
                <router-link class="menu__link" to="/explore">
                  <IconGlance />
                </router-link>
              </li>
              <li class="menu__list">
                <router-link class="menu__link" to="/">
                  <IconAdd />
                </router-link>
              </li>
              <li class="menu__list">
                <router-link class="menu__link" to="/music">
                  <IconMusic />
                </router-link>
              </li>
              <li class="menu__list">
                <router-link class="menu__link" to="/movie">
                  <IconVideo />
                </router-link>
              </li>
              <li class="menu__list">
                <router-link class="menu__link" to="/book">
                  <IconBook />
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="sidebar__settings">
        <router-link to="/profile" class="sidebar__profile">
          <img src="/avatar.png" />
        </router-link>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  @import './styles.scss';
</style>
