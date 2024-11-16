<template>
  <PreviewBlock @close="closeBookPreview" :is-show="bookStore.isShowBookPreview" title="Book Preview">
    <div class="book-preview">
      <div class="book-preview__main">
        <div class="book-preview-main">
          <div class="book-preview-main__box">
            <div class="book-preview-main__image">
              <img src="/images/book.svg" alt="book" />
            </div>
            <div class="book-preview-main__types">
              <BookListen />
              <BookRead />
            </div>
            <div class="book-preview-main__actions">
              <div class="book-preview-actions">
                <div class="book-preview-actions__action book-preview-actions__action_no-action">
                  <div class="book-preview-actions__icon">
                    <IconPlayerHeadphone />
                  </div>
                  <div class="book-preview-actions__count">12K</div>
                </div>
                <div class="book-preview-actions__action book-preview-actions__action_no-action">
                  <div class="book-preview-actions__icon">
                    <IconBookDuo />
                  </div>
                  <div class="book-preview-actions__count">5</div>
                </div>
                <button class="book-preview-actions__action book-preview-actions__action_favorite">
                  <div class="book-preview-actions__icon">
                    <IconPlayerHeart />
                  </div>
                  <div class="book-preview-actions__count">16</div>
                </button>
                <button class="book-preview-actions__action book-preview-actions__action_share">
                  <div class="book-preview-actions__icon">
                    <IconPlayerShare />
                  </div>
                  <div class="book-preview-actions__count">32</div>
                </button>
                <button class="book-preview-actions__action book-preview-actions__action_share">
                  <div class="book-preview-actions__icon">
                    <IconPlayerBookmark />
                  </div>
                  <div class="book-preview-actions__count">256</div>
                </button>
                <button class="book-preview-actions__action book-preview-actions__action_download">
                  <div class="book-preview-actions__icon">
                    <IconPlayerDownload />
                  </div>
                  <div class="book-preview-actions__count">128</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="book-preview__info">
        <div class="book-preview-info">
          <div class="book-preview-info__title">Book name: Test 123</div>
          <div class="book-preview-info__row">
            <div class="book-preview-info__col">Release date: 2018</div>
            <div class="book-preview-info__col">Language: Russian</div>
            <div class="book-preview-info__col">Category: Action</div>
            <div class="book-preview-info__col">Write: <a href="#">Gabriel Garsio Markis</a></div>
          </div>
          <div class="book-preview-info__description">
            Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type
          </div>
        </div>
      </div>
      <div class="book-preview__recommendation">
        <div class="book-preview-recommendation">
          <div class="book-preview-recommendation__head">
            <div class="book-preview-recommendation__title">Recomendation</div>
          </div>
          <section class="book-preview-recommendation__body">
            <div v-for="index in 10" class="book-preview-recommendation__item">
              <article class="book-preview-item">
                <div class="book-preview-item__image-box">
                  <div class="book-preview-item__image">
                    <img src="/images/book.svg" alt="book" />
                  </div>
                  <div class="book-preview-item__types">
                    <div class="book-preview-item__type">
                      <IconAudioBookType />
                    </div>
                    <div class="book-preview-item__type">
                      <IconBookType />
                    </div>
                  </div>
                </div>
                <div class="book-preview-item__content">
                  <div class="book-preview-item__title">Book name: Test 123</div>
                  <div class="book-preview-item__item">Write: <a href="#">Gabriel Garsio Markis</a></div>
                  <div class="book-preview-item__item">Language: Russian</div>
                  <div class="book-preview-item__description">
                    Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  </PreviewBlock>
</template>

<script setup lang="ts">
  import { IconAudioBookType, IconBookType } from '@/shared/ui/Icons'
  import { PreviewBlock } from '@/shared/ui/block/PreviewBlock'
  import {
    IconBookDuo,
    IconPlayerBookmark,
    IconPlayerDownload,
    IconPlayerHeadphone,
    IconPlayerHeart,
    IconPlayerShare
  } from '@/shared/ui/Icons'

  import { BookListen, BookRead } from '@/features/book'
  import { BookModel } from '@/entities/book'

  const { closeBookPreview, useBookStore } = BookModel
  const bookStore = useBookStore()
</script>

<style lang="scss">
  @import './styles.scss';
</style>
