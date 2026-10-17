<script setup lang="ts">
import { ref } from 'vue'

const menuAbierto = ref(false)

const enlaces = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Servicios', ruta: '/servicios' },
  { nombre: 'Proyectos', ruta: '/proyectos' },
  { nombre: 'Nosotros', ruta: '/nosotros' },
  { nombre: 'Contacto', ruta: '/contacto' },
]

function cerrarMenu() {
  menuAbierto.value = false
}
</script>

<template>
  <nav class="fixed inset-x-0 top-0 z-50 bg-gray-900 text-white shadow-lg
             transition-colors duration-300 mb-2">
    <div
      class="mx-auto flex max-w-7xl items-center
             justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl font-bold tracking-wide
               text-indigo-400"
        @click="cerrarMenu"
      >AppJuamaya
      </RouterLink>

      <!-- Enlaces desktop -->
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="enlace in enlaces" :key="enlace.ruta">
          <RouterLink
            :to="enlace.ruta"
            class="text-gray-300 transition-colors
                   hover:text-indigo-400"
            active-class="!text-indigo-400 font-semibold"
          >
            {{ enlace.nombre }}
          </RouterLink>
        </li>
      </ul>

      <!-- Botón hamburguesa móvil -->
      <button
        type="button"
        class="rounded-lg p-2 text-gray-200
               hover:bg-gray-800 focus:outline-none
               focus:ring-2 focus:ring-indigo-400
               md:hidden"
        :aria-expanded="menuAbierto"
        aria-controls="menu-movil"
        :aria-label="
          menuAbierto ? 'Cerrar menú' : 'Abrir menú'
        "
        @click="menuAbierto = !menuAbierto"
      >
        <!-- Icono hamburguesa -->
        <svg
          v-if="!menuAbierto"
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <!-- Icono cerrar -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Menú móvil -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <ul
        v-if="menuAbierto"
        id="menu-movil"
        class="space-y-1 border-t border-gray-700
               px-4 py-3 md:hidden"
      >
        <li v-for="enlace in enlaces" :key="enlace.ruta">
          <RouterLink
            :to="enlace.ruta"
            class="block rounded-lg px-4 py-3
                   text-gray-300 transition-colors
                   hover:bg-gray-800 hover:text-indigo-400"
            active-class="bg-gray-800 !text-indigo-400"
            @click="cerrarMenu"
          >
            {{ enlace.nombre }}
          </RouterLink>
        </li>
      </ul>
    </Transition>
  </nav>
</template>