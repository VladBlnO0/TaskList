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
  <h1>It works — welcome to the power of a full-stack Vue app</h1>
  <h1>It works — welcome to the power of a full-stack Vue app</h1>
  <h1>It works — welcome to the power of a full-stack Vue app</h1>

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

  <div class="hero">
    <h1>It works — welcome to the power of a full-stack Vue app</h1>
    <p>
      Powered by Inertia and Vue, this setup blends server-driven routing with rich client-side
      interactivity — seamless, fast, and cohesive.
    </p>
  </div>

  <div class="cards">
    <a href="https://insiders.adonisjs.com/docs/v7-alpha/introduction" target="_blank">
      <h3>Official Docs &nbsp;›</h3>
      <p>Comprehensive reference for building with AdonisJS</p>
    </a>

    <a href="https://adocasts.com/" target="_blank">
      <h3>Adocasts &nbsp;›</h3>
      <p>Guided video tutorials for everyday development</p>
    </a>

    <a href="https://discord.gg/vDcEjq6" target="_blank">
      <h3>Discord &nbsp;›</h3>
      <p>Connect with developers building with AdonisJS every day</p>
    </a>
  </div>
</template>
