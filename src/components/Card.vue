
<script setup lang="ts">
defineProps<{
  titulo: string
  imagen: string
  descripcion: string
  enlace: string
}>()
</script>

<template>
  <article
    class="group flex h-full min-w-0 flex-col overflow-hidden
           rounded-2xl border border-gray-200 bg-blue-300
           shadow-sm transition-all duration-300
           hover:-translate-y-1 hover:shadow-lg"
  >
    <div class="aspect-video w-full overflow-hidden bg-gray-100">
      <img
        :src="imagen"
        :alt="titulo"
        loading="lazy"
        class="h-full w-full object-cover transition-transform
               duration-500 group-hover:scale-105"
      />
    </div>

    <div class="flex flex-1 flex-col p-4 sm:p-5">
      <h2 class="text-xl font-bold text-gray-900">
        {{ titulo }}
      </h2>

      <p class="mt-3 flex-1 text-sm leading-6 text-gray-600">
        {{ descripcion }}
      </p>

      <a
        :href="enlace"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-5 inline-flex w-fit items-center gap-2
               font-semibold text-indigo-600
               transition-colors hover:text-indigo-800
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-indigo-500"
      >
        Visitar página
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  </article>
</template>