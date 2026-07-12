<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Link } from '@adonisjs/inertia/vue'

interface Task {
  id: number
  title: string
  description: string
}

interface PageMeta {
  total: number
  current_page: number
}

const props = defineProps<{
  items: Task[]
  pageMeta?: PageMeta
  featuredPost?: Task | null
}>()
</script>

<template>
  <Head title="Homepage" />

  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <Link :href="`/tasks/${item.id}`">
          {{ item.title }}
        </Link>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>
