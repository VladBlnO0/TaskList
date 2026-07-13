<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { type Data } from '@generated/data'

defineProps<{
  tasks: Data.Task[]
}>()
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 0.5rem; padding: 1rem">
    <div v-for="task in tasks" :key="task.id">
      <Link
        v-if="task.isCompleted"
        :href="`/tasks/${task.id}`"
        style="text-decoration: line-through red"
      >
        {{ task.title }}
      </Link>
      <Link v-else :href="`/tasks/${task.id}`">
        {{ task.title }}
      </Link>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; gap: 0.5rem; padding: 1rem">
    <Link :href="`/tasks/create`" as="button" style="gap: 0.5rem; padding: 1rem">
      Create Task
    </Link>
  </div>
</template>
