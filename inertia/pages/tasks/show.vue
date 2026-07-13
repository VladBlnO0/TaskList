<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { type Data } from '@generated/data'

defineProps<{
  task: Data.Task
}>()
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 0.5rem; padding: 1rem">
    <p>{{ task.title }}</p>
    <p>{{ task.description }}</p>
    <p>{{ task.isCompleted ? 'Completed' : 'Not Completed' }}</p>
  </div>

  <Link :href="`/tasks/${task.id}/edit`" as="button" style="gap: 0.5rem; padding: 1rem">
    Set Complete
  </Link>

  <Link
    method="delete"
    :href="`/tasks/${task.id}`"
    as="button"
    type="button"
    class="text-red-600 hover:text-red-900"
    preserve-scroll
  >
    Delete Task
  </Link>

  <Link :href="`/`" style="gap: 0.5rem; padding: 1rem"> Back </Link>
</template>
