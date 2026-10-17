<script setup lang="ts">
import { RouterLink } from 'vue-router'

const enlaces = [
  { nombre: 'Inicio', ruta: '/' },
  { nombre: 'Servicios', ruta: '/servicios' },
  { nombre: 'Proyectos', ruta: '/proyectos' },
  { nombre: 'Nosotros', ruta: '/nosotros' },
  { nombre: 'Contacto', ruta: '/contacto' },
]

const anioActual = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-gray-300  ">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">

      <!-- Contenido principal -->
      <div
        class=" displyy flex flex-col gap-12 sm:flex-row sm:justify-between
               sm:gap-8 lg:gap-12"
      >
        <!-- Logo y descripción -->
        <div class="space-y-4">
          <RouterLink
            to="/"
            class="inline-block text-2xl font-bold
                   tracking-wide text-indigo-400"
          >
            Juamaya
          </RouterLink>

          <p class="max-w-xs text-sm leading-6 text-gray-400">
            Creamos experiencias digitales modernas,
            útiles y sencillas para todos.
          </p>

          <!-- Redes sociales -->
          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              class="transition-colors hover:text-indigo-400"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.01c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.55c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                />
              </svg>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              class="transition-colors hover:text-indigo-400"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              class="transition-colors hover:text-indigo-400"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.7H4.98V9.2h2.95v9.5ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.25 10.8h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.5V9.2h2.82v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.98 3.55 4.56v5.18Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navegación -->
        <div>
          <h2 class="mb-4 text-sm font-semibold uppercase
                     tracking-wider text-white">
            Navegación
          </h2>

          <ul class="space-y-3 text-sm">
            <li v-for="enlace in enlaces" :key="enlace.ruta">
              <RouterLink
                :to="enlace.ruta"
                class="transition-colors hover:text-indigo-400"
              >
                {{ enlace.nombre }}
              </RouterLink>
            </li>
          </ul>
        </div>

         

      
      <!-- Copyright -->
      

    </div>

    <div
        class="flex flex-col items-center justify-between
               gap-4 text-center text-sm text-gray-400
               sm:flex-row sm:text-left"
      >
        <p>
          © {{ anioActual }} MiApp.
          Todos los derechos reservados.
        </p>
 
      </div>
    </div>
  </footer>
</template>