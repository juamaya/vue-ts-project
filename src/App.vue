<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />

    <main class="flex-1  pt-20">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
