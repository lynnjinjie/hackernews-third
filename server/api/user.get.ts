import { baseURL } from '~/server/constants'

export async function fetchUser(id: string): Promise<any> {
  const user = await $fetch(`${baseURL}/user/${id}.json`) as any
  return {
    id: user.id,
    karma: user.karma,
    created_time: user.created,
    about: user.about,
  }
}

export default defineEventHandler((event) => {
  const { id } = getQuery(event) as { id: string }

  if (!id) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Must provide a user ID.',
    })
  }

  return fetchUser(id)
})
