export const formatCount = (count = 0): string => {
  if (count >= 1000) {
    return Math.floor(count / 1000) + 'K+'
  } else {
    return count.toString()
  }
}
