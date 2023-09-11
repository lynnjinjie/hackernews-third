import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export function timeAgo(date: number) {
  // const between = Date.now() / 1000 - Number(date)
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
  // if (between < 3600)
  //   return `${Math.floor(between / 60)} minutes ago`

  // else if (between < 86400)

  //   return `${Math.floor(between / 3600)} hours ago`

  // else
  //   return `${Math.floor(between / 86400)} days ago`

  // return dayjs(new Date(date * 1000)).format('YYYY-MM-DD')
}
