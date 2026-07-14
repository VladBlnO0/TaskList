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

    <p v-if="task?.createdAt">{{ new Date(task.createdAt).toLocaleString('en-US') }}</p>

    <p
      v-if="task.isCompleted && task.updatedAt"
      style="background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb"
    >
      Completed at {{ new Date(task.updatedAt).toLocaleString('en-US') }}
    </p>
    <p v-else style="background-color: #f8f9fa; color: #6c757d; border: 1px solid #dee2e6">
      Not Completed
    </p>
  </div>

  <div>
    <Link :href="`/tasks/${task.id}/edit`" class="btn" as="button"> Set Complete </Link>

    <Link
      method="delete"
      :href="`/tasks/${task.id}`"
      class="btn"
      as="button"
      style="border-top: 1px solid rgba(0, 0, 0, 1)"
    >
      Delete Task
    </Link>
  </div>

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

<style>
p {
  font-size: 16px;
  background-color: #f0f0f0;
  border-radius: 0px;
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
