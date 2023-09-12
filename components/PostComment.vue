<script setup lang='ts'>
interface Comment {
  id: number
  user: string
  time: number
  content: string
  type: string
  comments_count: number
  comments: Comment[] | []
}
const props = defineProps<{
  comment: Comment
}>()
const show = ref(true)
function toggle() {
  show.value = !show.value
}
function pluralize(n: number) {
  return `${n} ${n > 1 ? 'folds' : 'fold'}`
}
</script>

<template>
  <li>
    <p dark:text-white-200 border-t p-1 text-3 text-zinc-500>
      <span>by {{ comment.user }}</span>
      <span px-2>|</span>
      <span>{{ timeAgo(comment.time) }}</span>
      <span px-2>|</span>
      <span>{{ comment.comments_count }} comments</span>
    </p>
    <div v-if="comment.content" class="content" v-html="comment.content" />
    <div
      v-if="comment.comments.length"
      :class="{ '-mb-3': show, 'my-1 bg-[#ff6600]': !show }"
      hover:cursor-pointer
      @click="toggle"
    >
      <a>{{ show ? '[-]' : `[+] ${pluralize(comment.comments.length)} collapsed` }}</a>
    </div>
    <ul v-show="show" ml-6>
      <PostComment
        v-for="childComment in comment.comments"
        :key="childComment.id"
        :comment="childComment"
      />
    </ul>
  </li>
</template>

<style>
.content {
  @apply break-words text-[0.9rem] my-1 text-zinc-500 dark:text-white;
}
.content pre {
  @apply whitespace-pre-wrap;
}
.content a {
  @apply hover:text-[#ff6600] underline;
}
.content p {
  @apply break-words py-1;
}
</style>
