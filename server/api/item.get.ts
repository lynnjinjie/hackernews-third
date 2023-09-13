import { baseURL } from '~/server/constants'

export async function fetchItem(id: string, withComments = false): Promise<any> {
  const item = await $fetch(`${baseURL}/item/${id}.json`) as any
  item.kids = item?.kids || {}
  return {
    id: item.id,
    user: item.by,
    points: item.score,
    time: item.time,
    content: item.text,
    url: item.url,
    type: item.type,
    title: item.title,
    comments_count: Object.values(item.kids).length,
    comments: withComments
      ? await Promise.all(
        Object.values(item.kids as string[]).map(id =>
          fetchItem(id, withComments),
        ),
      )
      : [],
  }
}

export default defineEventHandler((event) => {
  const { id, withComments = false } = getQuery(event) as { id: string; withComments: boolean }

  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a item ID.',
    })
  }
  if (Number.isNaN(+id)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Item ID mush a number but got ${id}`,
    })
  }

  return fetchItem(id, withComments)
})
