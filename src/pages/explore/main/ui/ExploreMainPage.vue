<template>
  <div class="explore">
    <div class="explore__main">
      <div class="explore-grid">
        <div class="explore-grid__list">
          <template v-for="index in 10">
            <div class="explore-grid__block explore-grid__block_big">
              <a href="#" class="explore-grid__item">
                <img src="/explore/1.png" alt="" />
              </a>
              <a href="#" class="explore-grid__item">
                <img src="/explore/2.png" alt="" />
              </a>
              <a href="#" class="explore-grid__item">
                <img src="/explore/3.png" alt="" />
              </a>
            </div>
            <div class="explore-grid__block">
              <a href="#" class="explore-grid__item">
                <img src="/explore/4.png" alt="" />
              </a>
              <a href="#" class="explore-grid__item">
                <img src="/explore/5.png" alt="" />
              </a>
              <a href="#" class="explore-grid__item">
                <img src="/explore/6.png" alt="" />
              </a>
            </div>
            <div class="explore-grid__block explore-grid__block_big-reverse">
              <a href="#" class="explore-grid__item">
                <img src="/explore/7.png" alt="" />
              </a>
              <a href="#" class="explore-grid__item">
                <img src="/explore/4.png" alt="" />
              </a>
              <a href="#" class="explore-grid__item">
                <img src="/explore/5.png" alt="" />
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="explore__list">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
  @import './styles.scss';
</style>
