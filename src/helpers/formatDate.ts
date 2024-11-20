export function formatDate(date: string) {
  const localDate = new Date(date)
  const correctedDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60 * 1000)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(correctedDate))
}