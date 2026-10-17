<script setup lang="ts">
import Card from '../components/Card.vue'

const proyectos = [
 {
    titulo: 'Documentacion  web',
    imagen: `${import.meta.env.BASE_URL}images/mydoc.png`,
    descripcion:
      'Diseños modernos, atractivos y adaptados a cualquier dispositivo.',
    enlace: 'https://juamaya.github.io/mydoc/',
  },

  {
    titulo: 'Mi Portafolio',
    imagen: `${import.meta.env.BASE_URL}images/portafolio.png`,
    descripcion:
      'Diseños modernos, atractivos y adaptados a cualquier dispositivo.',
    enlace: 'https://juamaya.github.io/portafolio-juan',
  },
  {
    titulo: 'Web de repositorios',
    imagen: `${import.meta.env.BASE_URL}images/app-repo.png`,
    descripcion:
      'Diseños modernos, atractivos y adaptados a cualquier dispositivo.',
    enlace: 'https://juamaya.github.io/web-repositorios',
  },

   {
    titulo: 'Mi GitHub',
    imagen: `${import.meta.env.BASE_URL}images/github.png`,
    descripcion:
      'Diseños modernos, atractivos y adaptados a cualquier dispositivo.',
    enlace: 'https://github.com/juamaya',
  },

    {
    titulo: 'Mi Canal de YouTube',
    imagen: `${import.meta.env.BASE_URL}images/youtube.jpg`,
    descripcion:
      'Diseños modernos, atractivos y adaptados a cualquier dispositivo.',
    enlace: 'https://www.youtube.com/@juamaya1969',
  },


  {
    titulo: 'Diseño web',
    imagen: `${import.meta.env.BASE_URL}images/next.jpg`,
    descripcion:
      'Diseños modernos, atractivos y adaptados a cualquier dispositivo.',
    enlace: '/servicios',
  },
  {
    titulo: 'Desarrollo Vue',
    imagen: `${import.meta.env.BASE_URL}images/node.jpg`,
    descripcion:
      'Aplicaciones web rápidas y dinámicas con Vue 3 y TypeScript.',
    enlace: '/proyectos',
  },
  {
    titulo: 'Diseño responsive',
    imagen: `${import.meta.env.BASE_URL}images/Vite.jpg`,
    descripcion:
      'Experiencias optimizadas para móviles, tablets y escritorio.',
    enlace: '/contacto',
  },
]
 
</script>


<template>
  <main class="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <h1 class="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
      Nuestros proyectos
    </h1>

    <div
      class="grid grid-cols-1 items-stretch gap-5
             sm:grid-cols-2 sm:gap-6
             lg:grid-cols-3 xl:gap-8"
    >
      <Card
        v-for="proyecto in proyectos"
        :key="proyecto.titulo"
        v-bind="proyecto"
      />
    </div>
  </main>
</template>

<style>
 
</style>
