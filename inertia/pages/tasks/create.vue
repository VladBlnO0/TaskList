<script setup>
import { useForm } from '@inertiajs/vue3'
import { Link } from '@adonisjs/inertia/vue'

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
  <form
    style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem"
    @submit.prevent="submit"
  >
    <div>
      <label for="title">Title</label>
      <textarea id="title" v-model="form.title" type="text"></textarea>
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

  <div
    style="
      display: flex;
      justify-content: center;
      padding: 1rem;
      border-top: 1px solid rgba(116, 115, 115, 0.424);
      background-color: rgba(116, 115, 115, 0.424);
    "
  >
    <Link :href="`/`" class="btn" as="button" style="background-color: unset; border: none">
      Back
    </Link>
  </div>
</template>
