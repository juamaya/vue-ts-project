
<script setup lang="ts">
import { RouterLink } from 'vue-router'

const imagenAbout = `${import.meta.env.BASE_URL}images/imageAbout.jpg`

const caracteristicas = [
  {
    icono: '🎨',
    titulo: 'Diseño moderno',
    descripcion:
      'Interfaces atractivas, intuitivas y coherentes con tu identidad.',
  },
  {
    icono: '📱',
    titulo: 'Diseño responsive',
    descripcion:
      'Experiencias adaptadas a móviles, tablets y ordenadores.',
  },
  {
    icono: '⚡',
    titulo: 'Rendimiento',
    descripcion:
      'Aplicaciones rápidas y optimizadas con tecnologías modernas.',
  },
]
</script>

<template>
  <main class="min-h-screen bg-Blue-300 text-gray-900">

    <!-- Presentación -->
    <section class="bg-Blue-300">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 items-center
               gap-10 px-4 py-12 sm:px-6 sm:py-16
               lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24"
      >
        <div>
          <span
            class="inline-block rounded-full bg-indigo-100
                   px-4 py-2 text-sm font-semibold text-indigo-700"
          >
            Sobre nosotros
          </span>

          <h1
            class="mt-5 text-3xl font-extrabold tracking-tight
                   sm:text-4xl lg:text-5xl"
          >
            Creamos experiencias digitales que
            <span class="text-indigo-600">marcan la diferencia</span>
          </h1>

          <p class="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
            Nos apasiona construir páginas web modernas, funcionales
            y accesibles. Combinamos creatividad y tecnología para
            convertir ideas en experiencias digitales.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <RouterLink
              to="/contacto"
              class="inline-flex items-center justify-center
                     rounded-xl bg-indigo-600 px-6 py-3
                     font-semibold text-white transition
                     hover:bg-indigo-700
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Contactar con nosotros
              <span class="ml-2" aria-hidden="true">→</span>
            </RouterLink>

            <RouterLink
              to="/proyectos"
              class="inline-flex items-center justify-center
                     rounded-xl border border-gray-300 bg-white
                     px-6 py-3 font-semibold text-gray-700
                     transition hover:bg-gray-100"
            >
              Ver proyectos
            </RouterLink>
          </div>
        </div>

        <!-- Imagen principal -->
        <div class="relative">
          <div
            class="absolute -inset-3 rounded-3xl
                   bg-indigo-100/70 blur-xl"
          ></div>

          <img
             :src="imagenAbout"
            alt="Equipo trabajando en un proyecto digital"
            loading="lazy"
            class="relative aspect-4/3 w-full rounded-2xl
                   object-cover shadow-xl"
          />
        </div>
      </div>
    </section>

    <!-- Nuestra historia -->
    <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-2xl font-bold sm:text-3xl">
          Nuestra historia
        </h2>

        <p class="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
          Creemos que una buena experiencia digital debe ser sencilla,
          atractiva y útil. Por eso trabajamos para crear soluciones
          web que ayuden a las personas y a los proyectos a crecer.
        </p>

        <p class="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
          Nuestro enfoque combina atención al detalle, tecnologías
          actuales y un diseño pensado para las necesidades de cada
          usuario.
        </p>
      </div>
    </section>

    <!-- Características -->
    <section class="bg-gray-250 py-16 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <h2 class="text-2xl font-bold sm:text-3xl">
            Qué nos caracteriza
          </h2>

          <p class="mt-4 text-gray-600">
            Estos son los principios que guían nuestro trabajo.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in caracteristicas"
            :key="item.titulo"
            class="rounded-2xl border border-gray-200
                   bg-blue-200 p-6 shadow-sm transition
                   hover:-translate-y-1 hover:shadow-lg sm:p-8"
          >
            <div
              class="flex h-12 w-12 items-center justify-center
                     rounded-xl bg-indigo-100 text-2xl"
            >
              {{ item.icono }}
            </div>

            <h3 class="mt-5 text-xl font-bold">
              {{ item.titulo }}
            </h3>

            <p class="mt-3 leading-7 text-gray-600">
              {{ item.descripcion }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Llamada a la acción -->
    <section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div
        class="mx-auto max-w-5xl rounded-3xl bg-indigo-600
               px-6 py-10 text-center text-white
               sm:px-12 sm:py-14"
      >
        <h2 class="text-2xl font-bold sm:text-3xl">
          ¿Tienes un proyecto en mente?
        </h2>

        <p class="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
          Nos encantará conocer tu idea y ayudarte a convertirla
          en una experiencia digital.
        </p>

        <RouterLink
          to="/contacto"
          class="mt-8 inline-flex items-center justify-center
                 rounded-xl bg-white px-6 py-3
                 font-semibold text-indigo-700 transition
                 hover:bg-indigo-50
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-white focus-visible:ring-offset-2
                 focus-visible:ring-offset-indigo-600"
        >
          Hablemos
          <span class="ml-2" aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </section>

  </main>
</template>

<style>
 
</style>
