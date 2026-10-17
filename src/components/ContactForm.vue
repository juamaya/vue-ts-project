
<script setup lang="ts">
import { reactive, ref } from 'vue'

interface ContactFormData {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}

const formulario = reactive<ContactFormData>({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
})

const enviado = ref(false)

function enviarFormulario() {
  enviado.value = false

  // Aquí conectarás tu API o servicio de correo.
  console.log('Datos del formulario:', { ...formulario })

  enviado.value = true

  Object.assign(formulario, {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })
}

function limpiarFormulario() {
  Object.assign(formulario, {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  })

  enviado.value = false
}
</script>

<template>
  <section
    class="mx-auto w-full max-w-3xl px-4 py-10
           sm:px-6 sm:py-14 lg:px-8"
  >
    <div class="overflow-hidden rounded-2xl bg-gray-700 shadow-xl ring-1 ring-gray-200">

      <!-- Cabecera -->
      <div class="bg-indigo-600 px-6 py-8 text-white sm:px-10">
        <h1 class="text-2xl font-bold sm:text-3xl">
          Contacta con nosotros
        </h1>

        <p class="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
          ¿Tienes alguna pregunta o propuesta?
          Completa el formulario y cuéntanos cómo podemos ayudarte.
        </p>
      </div>

      <!-- Formulario -->
      <form
        class="space-y-6 p-6 sm:p-10"
        @submit.prevent="enviarFormulario"
        @input="enviado = false"
      >
        <!-- Nombre y email -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              for="nombre"
              class="mb-2 block text-sm font-semibold text-gray-100 "
            >
              Nombre completo *
            </label>

            <input
              id="nombre"
              v-model.trim="formulario.nombre"
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              autocomplete="name"
              required
              maxlength="100"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white
                     text-gray-900 outline-none transition
                     placeholder:text-gray-400
                     focus:border-indigo-500 focus:ring-2
                     focus:ring-indigo-200"
            />
          </div>

          <div>
            <label
              for="email"
              class="mb-2 block text-sm font-semibold text-gray-100"
            >
              Correo electrónico *
            </label>

            <input
              id="email"
              v-model.trim="formulario.email"
              type="email"
              name="email"
              placeholder="tu@email.com"
              autocomplete="email"
              required
              maxlength="254"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white
                     text-gray-900 outline-none transition
                     placeholder:text-gray-400
                     focus:border-indigo-500 focus:ring-2
                     focus:ring-indigo-200"
            />
          </div>
        </div>

        <!-- Asunto -->
        <div>
          <label
            for="asunto"
            class="mb-2 block text-sm font-semibold text-gray-100"
          >
            Asunto *
          </label>

          <input
            id="asunto"
            v-model.trim="formulario.asunto"
            type="text"
            name="asunto"
            placeholder="¿Sobre qué quieres hablar?"
            required
            maxlength="150"
            class="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white
                   text-gray-900 outline-none transition
                   placeholder:text-gray-400
                   focus:border-indigo-500 focus:ring-2
                   focus:ring-indigo-200"
          />
        </div>

        <!-- Mensaje -->
        <div>
          <label
            for="mensaje"
            class="mb-2 block text-sm font-semibold text-gray-100"
          >
            Mensaje *
          </label>

          <textarea
            id="mensaje"
            v-model.trim="formulario.mensaje"
            name="mensaje"
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required
            minlength="10"
            maxlength="3000"
            class="w-full resize-y rounded-lg border border-gray-300 bg-white
                   px-4 py-3 text-gray-900 outline-none transition
                   placeholder:text-gray-400
                   focus:border-indigo-500 focus:ring-2
                   focus:ring-indigo-200"
          ></textarea>

          <p class="mt-1 text-right text-xs text-gray-300">
            {{ formulario.mensaje.length }}/3000 caracteres
          </p>
        </div>

        <!-- Mensaje de confirmación -->
        <div
          v-if="enviado"
          role="status"
          class="rounded-lg bg-green-50 p-4 text-sm text-green-800"
        >
          Formulario validado. Para enviar el mensaje realmente,
          conecta el formulario a un servicio de correo o a una API.
        </div>

        <!-- Botones -->
        <div class="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            @click="limpiarFormulario"
            class="rounded-lg border border-gray-300 px-5 py-3
                   font-medium text-white transition
                   hover:bg-gray-100 hover:text-black cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-indigo-500"
          >
            Limpiar
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-6 py-3
                   font-semibold text-white shadow-sm transition
                   hover:bg-indigo-700 cursor-pointer
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Enviar mensaje →
          </button>
        </div>

        <p class="text-xs leading-5 text-gray-300">
          Los campos marcados con * son obligatorios.
        </p>
      </form>
    </div>
  </section>
</template>