<script setup lang="ts">
import Card from '../components/Card.vue'

const proyectos = [
 {
    titulo: ' Mi Web de Documentacion ',
    imagen: `${import.meta.env.BASE_URL}images/mydoc.png`,
    descripcion:
      'Docusaurus es un generador de sitios estáticos de código abierto creado y mantenido por Meta, diseñado para crear, desplegar y mantener sitios web de documentación de forma rápida y sencilla.',
    enlace: 'https://juamaya.github.io/mydoc/',
  },

  {
    titulo: 'Mi Web  Portafolio',
    imagen: `${import.meta.env.BASE_URL}images/portafolio.png`,
    descripcion:
     'Un portafolio (o portfolio) es una recopilación organizada de los mejores proyectos, obras o trabajos de un profesional o creador con el fin de mostrar su talento, experiencia y habilidades a clientes o empresas.',
    enlace: 'https://juamaya.github.io/portafolio-juan',
  },
  {
    titulo: 'Mi Web de repositorios',
    imagen: `${import.meta.env.BASE_URL}images/app-repo.png`,
    descripcion:
      'Aplicacion Web que consume la API de GitHub para mostrar los repositorios publicados en GitHub Pages de un usuario, permitiendo a los visitantes explorar y acceder a los proyectos de manera sencilla.',
    enlace: 'https://juamaya.github.io/web-repositorios',
  },

   {
    titulo: 'Mi GitHub',
    imagen: `${import.meta.env.BASE_URL}images/github.png`,
    descripcion:
    ' Es una plataforma en la nube para alojar código fuente y proyectos que usan el sistema de control de versiones Git.',
    enlace: 'https://github.com/juamaya',
  },

    {
    titulo: 'Mi Canal de YouTube',
    imagen: `${import.meta.env.BASE_URL}images/youtube.jpg`,
    descripcion:
      'Disfruta de los vídeos y la música que te gustan, sube material original y comparte el contenido con tus amigos, tu familia y el resto del mundo en YouTube.',
    enlace: 'https://www.youtube.com/@juamaya1969',
  },


  {
    titulo: 'Consumir API REST',
    imagen: `${import.meta.env.BASE_URL}images/Pokemones.png`,
    descripcion:
      'Consumir una API significa escribir un programa que envía una solicitud HTTP a un servidor externo para obtener, enviar, modificar o eliminar datos (generalmente en formato JSON)',
    enlace: 'https://juamaya.github.io/api-pokemon-js/',
  },
  {
    titulo: 'Consumir API REST',
    imagen: `${import.meta.env.BASE_URL}images/morty.png`,
    descripcion:
      'Consumir una API significa escribir un programa que envía una solicitud HTTP a un servidor externo para obtener, enviar, modificar o eliminar datos (generalmente en formato JSON)',
    enlace: 'https://juamaya.github.io/morty',
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
