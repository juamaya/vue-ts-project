
<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Servicio {
  titulo: string
  descripcion: string
  imagen: string
  caracteristicas: string[]
  enlace: string
  externo?: boolean
}

const servicios: Servicio[] = [
  {
    titulo: 'Diseño web',
    descripcion:
      'Diseñamos páginas web modernas, intuitivas y alineadas con la identidad de tu marca.',
    imagen: `${import.meta.env.BASE_URL}images/services1.jpg`,
    caracteristicas: [
      'Diseño personalizado',
      'Interfaz intuitiva',
      'Estilo moderno',
    ],
    enlace: 'https://www.figma.com/',
    externo: true,
  },
  {
    titulo: 'Desarrollo web',
    descripcion:
      'Creamos aplicaciones web rápidas y mantenibles con tecnologías modernas.',
    imagen: `${import.meta.env.BASE_URL}images/services2.jpg`,
    caracteristicas: [
      'Vue 3 y TypeScript',
      'Código mantenible',
      'Componentes reutilizables',
    ],
    enlace: 'https://vuejs.org/',
    externo: true,
  },
  {
    titulo: 'Diseño responsive',
    descripcion:
      'Adaptamos tu web para ofrecer una experiencia excelente en cualquier pantalla.',
    imagen: `${import.meta.env.BASE_URL}images/services3.jpg`,
    caracteristicas: [
      'Diseño para móviles',
      'Adaptación a tablets',
      'Experiencia de escritorio',
    ],
    enlace: 'https://tailwindcss.com/',
    externo: true,
  },
  {
    titulo: 'Optimización SEO',
    descripcion:
      'Mejoramos los aspectos técnicos y la estructura de tu web para facilitar su indexación.',
    imagen: `${import.meta.env.BASE_URL}images/services4.jpg`,
    caracteristicas: [
      'Estructura semántica',
      'Rendimiento web',
      'Metadatos básicos',
    ],
    enlace: 'https://developers.google.com/search',
    externo: true,
  },
]
</script>

<template>
  <main class="min-h-screen bg-gray-400 text-gray-900">

    <!-- Cabecera -->
    <section class="bg-indigo-50">
      <div class="mx-auto max-w-7xl px-4 py-16 text-center
                  sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <span
          class="inline-block rounded-full bg-indigo-100 px-4 py-2
                 text-sm font-semibold text-indigo-700"
        >
          Nuestros servicios
        </span>

        <h1 class="mx-auto mt-5 max-w-4xl text-3xl font-extrabold
                   tracking-tight sm:text-4xl lg:text-5xl">
          Soluciones digitales para
          <span class="text-indigo-600">tus ideas</span>
        </h1>

        <p class="mx-auto mt-5 max-w-2xl text-base leading-7
                  text-gray-600 sm:text-lg">
          Transformamos tus ideas en experiencias digitales modernas,
          accesibles y adaptadas a las necesidades de tu proyecto.
        </p>

        <RouterLink
          to="/contacto"
          class="mt-8 inline-flex items-center justify-center
                 rounded-xl bg-indigo-600 px-6 py-3
                 font-semibold text-white transition
                 hover:bg-indigo-700"
        >
          Solicitar información
          <span class="ml-2" aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

    <!-- Tarjetas de servicios -->
    <section class="mx-auto max-w-7xl px-4 py-14
                    sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      

      <div class="grid grid-cols-1 items-stretch gap-6
                  sm:grid-cols-2 xl:grid-cols-4">

        <article
          v-for="servicio in servicios"
          :key="servicio.titulo"
          class="group flex min-w-0 flex-col overflow-hidden
                 rounded-2xl border border-gray-200 bg-blue-300
                 shadow-sm transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <!-- Imagen -->
          <div class="aspect-16/10 overflow-hidden bg-gray-100">
            <img
              :src="servicio.imagen"
              :alt="servicio.titulo"
              loading="lazy"
              class="h-full w-full object-cover transition-transform
                     duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Contenido -->
          <div class="flex flex-1 flex-col p-5">
            <h3 class="text-xl font-bold">
              {{ servicio.titulo }}
            </h3>

            <p class="mt-3 text-sm leading-6 text-gray-600">
              {{ servicio.descripcion }}
            </p>

            <ul class="mt-5 space-y-2">
              <li
                v-for="caracteristica in servicio.caracteristicas"
                :key="caracteristica"
                class="flex items-start gap-2 text-sm text-gray-700"
              >
                <span class="font-bold text-indigo-600">✓</span>
                <span>{{ caracteristica }}</span>
              </li>
            </ul>

            <!-- Enlace -->
            <div class="mt-auto pt-6">
              <a
                v-if="servicio.externo"
                :href="servicio.enlace"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 font-semibold
                       text-indigo-600 hover:text-indigo-800"
              >
                Más información
                <span aria-hidden="true">↗</span>
              </a>

              <RouterLink
                v-else
                :to="servicio.enlace"
                class="inline-flex items-center gap-2 font-semibold
                       text-indigo-600 hover:text-indigo-800"
              >
                Más información
                <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </div>
        </article>

      </div>
    </section>

     

  </main>
</template>
<style>
 
</style>
