export const formatMusicDuration = (duration = 0): string => {
  if (!duration && duration < 0) return '00:00'
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
