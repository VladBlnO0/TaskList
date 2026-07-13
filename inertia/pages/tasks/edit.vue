<script setup>
import { useForm } from '@adonisjs/vue/inertia'

const form = useForm({
  title: '',
  content: '',
})

const submit = () => {
  form.post('/tasks')
}
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <label for="title">Title</label>
      <input id="title" v-model="form.title" type="text" />
      <div v-if="form.errors.title">{{ form.errors.title }}</div>
    </div>

    <div>
      <label for="content">Content</label>
      <textarea id="content" v-model="form.content"></textarea>
      <div v-if="form.errors.content">{{ form.errors.content }}</div>
    </div>

    <button type="submit" :disabled="form.processing">Create</button>
  </form>
</template>
