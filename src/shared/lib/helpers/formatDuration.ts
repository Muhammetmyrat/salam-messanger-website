export const formatDuration = (duration?: number): string => {
  if (!duration) return '--:--'
  const minutes = Math.floor(duration / 60)
  const seconds = duration % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}