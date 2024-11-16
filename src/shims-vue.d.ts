declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module 'swiper' {
  import { Navigation } from 'swiper'
  export { Navigation }
}

declare module 'json-bigint' {
  interface JSONBigInt {
    parse(text: string, reviver?: (key: any, value: any) => any): any
    stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string
  }

  const JSONbig: JSONBigInt
  export default JSONbig
}

declare module 'vue-pdf' {
  import pdf from 'vue-pdf'
  export default pdf
}
