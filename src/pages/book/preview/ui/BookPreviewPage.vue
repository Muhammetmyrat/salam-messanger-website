<template>
  <div class="book-preview">
    <div class="book-preview__header">
      <div class="book-preview-controller">
        <div class="book-preview-controller__search">
          <SearchField placeholder="In book  search..." />
        </div>
        <div class="book-preview-controller__book-name">Book name</div>
        <div class="book-preview-controller__pages">
          <div class="book-preview-pages">
            <div class="book-preview-pages__title">Page:</div>
            <div class="book-preview-pages__page-current">
              <input type="number" />
            </div>
            <div class="book-preview-pages__page-count">/ 512</div>
          </div>
        </div>
        <div class="book-preview-controller__font">
          <div class="book-preview-font">
            <div class="book-preview-font__title">Font size:</div>
            <button class="book-preview-font__action">
              <IconIncrement />
            </button>
            <button class="book-preview-font__action">
              <IconSubtrack />
            </button>
          </div>
        </div>
        <button class="book-preview-controller__save-paragraph">
          <IconTextEditStyle />
          <p>Save paragraph</p>
        </button>
        <button class="book-preview-controller__close">
          <IconDismiss />
        </button>
      </div>
    </div>
    <div class="book-preview__body">
      <div class="book-preview__body-box">
        <div ref="pdfContainer" class="pdf-container"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue'
  import * as pdfjsLib from 'pdfjs-dist'
  import { SearchField } from '@/shared/ui/SearchField'
  import { IconDismiss, IconIncrement, IconSubtrack, IconTextEditStyle } from '@/shared/ui/Icons'

  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js`

  const pdfContainer = ref<HTMLDivElement | null>(null)
  const canvasList: HTMLCanvasElement[] = []

  onMounted(async () => {
    if (pdfContainer.value) {
      try {
        const pdf = await pdfjsLib.getDocument('https://rangsimanketkaew.github.io/sample/sample.pdf').promise
        const numPages = pdf.numPages

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum)
          const viewport = page.getViewport({ scale: 1.5 })
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          if (context) {
            canvas.height = viewport.height
            canvas.width = viewport.width
            const renderContext = {
              canvasContext: context,
              viewport: viewport
            }
            await page.render(renderContext).promise
            pdfContainer.value.appendChild(canvas)
            canvasList.push(canvas)
          }
        }
      } catch (error) {
        console.error('Error loading or rendering PDF:', error)
      }
    }
  })

  onBeforeUnmount(() => {
    if (pdfContainer.value) {
      canvasList.forEach((canvas) => {
        if (pdfContainer.value?.contains(canvas)) {
          pdfContainer.value.removeChild(canvas)
        }
      })
    }
  })
</script>

<style scoped lang="scss">
  .book-preview {
    height: 100vh;
    background-color: var(--dark);
    // .book-preview__header
    &__header {
      height: 80px;
      overflow: hidden;
    }
    // .book-preview__body
    &__body {
      height: calc(100% - 80px);
    }
    // .book-preview__body-box
    &__body-box {
      padding: 24px;
      overflow: auto;
      height: 100%;
    }
  }
  .book-preview-controller {
    width: 100%;
    height: 100%;
    background-color: var(--gray);
    display: flex;
    align-items: center;
    padding: 0 24px;
    // .book-preview-controller__search
    &__search {
      width: 420px;
    }
    // .book-preview-controller__book-name
    &__book-name {
      flex: 1 1;
      width: 0;
      padding: 0 24px;
      font-size: 24px;
      font-weight: 500;
    }
    // .book-preview-controller__pages
    &__pages {
      margin-right: 32px;
    }
    // .book-preview-controller__font
    &__font {
      margin-right: 32px;
    }
    // .book-preview-controller__save-paragraph
    &__save-paragraph {
      margin-right: 24px;
      border: 1px solid var(--dark);
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 12px;
      height: 40px;
      background-color: transparent;
      color: var(--white);
      padding: 0 23px;
    }
    // .book-preview-controller__close
    &__close {
      background-color: transparent;
      color: var(--white);
      display: flex;
      padding: 4px;
    }
  }

  .book-preview-pages {
    display: flex;
    align-items: center;
    // .book-preview-pages__title
    &__title {
      font-size: 16px;
      font-weight: 500;
      margin-right: 12px;
    }
    // .book-preview-pages__page-current
    &__page-current {
      padding-right: 8px;
      input {
        width: 48px;
        height: 32px;
        background-color: var(--dark);
        border-radius: 8px;
        text-align: center;
        color: var(--white);
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &[type='number'] {
          -moz-appearance: textfield;
        }
      }
    }
    // .book-preview-pages__page-count
    &__page-count {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .book-preview-font {
    display: flex;
    align-items: center;
    // .book-preview-font__title
    &__title {
      font-size: 16px;
      font-weight: 500;
      padding-right: 4px;
    }
    // .book-preview-font__action
    &__action {
      margin-left: 8px;
      border-color: #000000;
      color: var(--white);
      background-color: transparent;
      padding: 3px;
      border: 1px solid var(--dark);
      border-radius: 8px;
    }
  }
  .pdf-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    :deep() {
      canvas {
        max-width: 100%;
      }
    }
  }
</style>
