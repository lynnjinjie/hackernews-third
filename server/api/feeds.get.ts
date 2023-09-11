import { baseURL } from '~/server/constants'

export const feedUrls = {
  ask: 'askstories',
  jobs: 'jobstories',
  show: 'showstories',
  newest: 'newstories',
  news: 'topstories',
}

async function fetchFeed(feed: keyof typeof feedUrls, page = 1) {
  const { fetchItem } = await import('./item.get')
  const feedData = await $fetch(`${baseURL}/${feedUrls[feed]}.json`) as string[]
  const total = feedData.length
  const entries = feedData.slice(Number(page - 1) * 20, Number(page) * 20) as string[]
  return {
    data: await Promise.all(entries.map(id => fetchItem(id))),
    total,
  }
}

export default defineEventHandler(async (event) => {
  // const data = await $fetch(`${baseURL}/topstories.json?print=pretty`)
  const { feed = 'news' } = getQuery(event) as { feed: keyof typeof feedUrls }

  return fetchFeed(feed)
})
