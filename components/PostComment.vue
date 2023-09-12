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
    <p dark:text-white-200 border-t border-gray-3 p-1 text-3 text-zinc-500>
      <span>by {{ comment.user }}</span>
      <span px-2>|</span>
      <span>{{ timeAgo(comment.time) }}</span>
      <span px-2>|</span>
      <span>{{ comment.comments_count }} comments</span>
    </p>
    <div v-if="comment.content" class="content" v-html="comment.content" />
    <div
      v-if="comment.comments.length"
      :class="{ '-mb-3': show, 'my-1 bg-[#ff6600] text-white': !show }"
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
  @apply break-words text-4 my-1 text-black-500 dark:text-white font-sans;
}
.content pre {
  @apply whitespace-pre-wrap;
}
.content a {
  @apply hover:(text-[#ff6600] decoration-dotted) decoration-[#ff6600] decoration-1 underline underline-offset-2;
}
.content p {
  @apply break-words py-1;
}
</style>
