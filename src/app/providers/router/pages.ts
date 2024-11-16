import { routeName as main } from './routes/main'
import { routeName as authorization } from './routes/authorization'
import { routeName as book } from './routes/book/main'
import { routeName as musicArea } from './routes/music'
import { routeName as musicBlock } from './routes/music/block'
import { routeName as musicMain } from './routes/music/main'
import { routeName as chatArea } from './routes/chat'
import { routeName as profile } from './routes/profile'

export const pages = {
  main,
  authorization,
  book,
  musicArea,
  musicBlock,
  musicMain,
  chatArea,
  profile
} as const
