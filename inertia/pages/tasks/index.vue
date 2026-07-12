<script setup lang="ts">
import { Link } from '@adonisjs/inertia/vue'
import { type Data } from '@generated/data'

// The 'tasks' array from the controller automatically binds here!
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
</template>
