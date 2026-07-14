<script setup lang="ts">
import { watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { toast, Toaster } from 'vue-sonner'
import type { Data } from '@generated/data'
import { Link, Form } from '@adonisjs/inertia/vue'

const page = usePage<Data.SharedProps>()

watch(
  () => page.url,
  () => toast.dismiss()
)

watch(
  () => page.props.flash,
  (flashMessages) => {
    if (flashMessages.error) {
      toast.error(flashMessages.error)
    }
    if (flashMessages.success) {
      toast.success(flashMessages.success)
    }
  },
  { immediate: true }
)
</script>

<template>
  <header>
    <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center">
      <Link
        :href="`/`"
        as="button"
        style="
          background-color: unset;
          border: none;
          font-weight: 600;
          font-size: 26px;
          justify-content: left;
          display: flex;
        "
      >
        Task List
      </Link>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <Toaster position="top-center" rich-colors />
</template>
