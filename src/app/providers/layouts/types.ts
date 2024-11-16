export enum LayoutsEnum {
  default = 'default',
  empty = 'empty',
  chat = 'chat',
  profile = 'profile'
}

export const LayoutToFileMap: Record<LayoutsEnum, string> = {
  default: 'Default.vue',
  chat: 'Chat.vue',
  empty: 'Empty.vue',
  profile: 'Profile.vue'
}
