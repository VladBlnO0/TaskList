<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  title: '',
  description: '',
  longDescription: '',
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
      <label for="description">Description</label>
      <textarea id="description" v-model="form.description"></textarea>
      <div v-if="form.errors.description">{{ form.errors.description }}</div>
    </div>

    <div>
      <label for="longDescription">Long Description</label>
      <textarea id="longDescription" v-model="form.longDescription"></textarea>
      <div v-if="form.errors.longDescription">{{ form.errors.longDescription }}</div>
    </div>

    <button type="submit" :disabled="form.processing">Create</button>
  </form>
</template>
