<script setup lang="ts">
import LocalForm from './components/LocalForm.vue'
</script>

<template>
  <div class="max-w-3xl mx-auto pt-14 bg-gray-900 text-gray-300">
    <section class="text-center flex flex-col items-center px-4">
      <figure class="w-16 h-16">
        <img src="https://mihon.app/img/logo-128px.png" alt="Mihon Logo">
      </figure>
      <h1 class="text-xl sm:text-3xl font-bold mt-5 text-white">
        Mihon Local Source JSON Generator
      </h1>
      <p class="sm:text-lg text-gray-400">
        A tool that helps you to easily create the JSON file with metadata.
      </p>
    </section>
    <LocalForm class="mt-12" />

    <footer class="my-10 px-4">
      <div class="text-sm text-gray-400 text-center [&_a]:text-primary-600 [&_a]:underline">
        <p>
          Created by <a href="https://github.com/alessandrojean" target="_blank">Alessandro Jean</a>.<br class="sm:hidden" />
          Forked by <a href="https://github.com/animeboynz" target="_blank">Animeboynz</a>.<br class="sm:hidden" />
          Source code available on <a href="https://github.com/Animeboynz/mihon-local" target="_blank">GitHub</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
