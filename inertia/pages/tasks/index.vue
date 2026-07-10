<script setup lang="ts">
import { type Data } from '@generated/data'

// The 'tasks' array from the controller automatically binds here!
defineProps<{
  tasks: Data.Task[]
  title?: string
}>()
</script>

<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-for="task in tasks" :key="task.id">
      <h2>{{ task.title }}</h2>
    </div>
  </div>
</template>
