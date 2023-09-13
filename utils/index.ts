import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export function timeAgo(date: number) {
  const now = dayjs()
  const diff = dayjs.duration(now.diff(new Date(date * 1000)))
  const minutes = diff.asMinutes()
  const hours = diff.asHours()
  const days = diff.asDays()

  if (minutes < 60)
    return `${Math.floor(minutes)} minutes ago`

  else if (hours < 24)
    return `${Math.floor(hours)} hour age`

  else
    return `${Math.floor(days)} day ago`
}
export function dateFormat(date: number, formatStr: string) {
  return dayjs(new Date(date * 1000)).format(formatStr)
}

export function str2Link(str: string) {
  let originStr = str
  // If you include a URL in Unicode form, convert first
  if (str.includes('&#x2F;'))
    originStr = str.replace(/&#x2F;/g, '/')

  const urlPattern = /https?:\/\/[^\s/$.?#].[^\s]*\b/g
  const replaceStr = originStr.replace(urlPattern, (match: string) => {
    return `<a href=${match} target="_blank">${match}</a>`
  })
  return replaceStr
}

export function isEmptyObject<T extends object>(obj: T) {
  return Object.keys(obj).length === 0
}
