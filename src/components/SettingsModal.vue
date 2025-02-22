<script setup lang="ts">
import { ref } from 'vue'

import { Dialog, DialogOverlay, DialogTitle } from '@headlessui/vue'
import { ArrowDownTrayIcon, XCircleIcon } from '@heroicons/vue/20/solid'
import useSettings from '../composables/useSettings'

const props = defineProps<{ open: boolean }>()

const emit = defineEmits<{ (e: 'close'): void }>()

function close() {
  emit('close')
}

const { useEnglishTitle } = useSettings()
</script>

<template>
  <Dialog
      :class="{ hidden: !open }"
      :open="open"
      @close="close"
  >
    <div class="fixed z-30 inset-0 flex flex-col items-center justify-center sm:py-6 sm:px-6 md:px-0 md:py-12 lg:py-16">
      <DialogOverlay
          class="absolute inset-0 bg-gray-900/80 supports-backdrop-blur:bg-gray-900/60 backdrop-blur"
      />

      <div class="relative flex flex-col justify-center w-full max-w-2xl max-h-full overflow-hidden bg-gray-800 sm:shadow-xl sm:rounded-2xl ring-1 ring-black/5">
        <header class="shrink-0 py-4 px-6 bg-gray-700 border-b border-gray-700 flex justify-between items-center">
          <DialogTitle as="p" class="text-lg font-medium text-gray-300">
            Settings
          </DialogTitle>
          <button class="button-ghost button-rounded -mr-2 text-gray-300" title="Close" aria-label="Close" @click="close">
            <XCircleIcon class="w-6 h-6 !ml-0" />
          </button>
        </header>
        <section class="flex-1 p-6 bg-gray-800 text-gray-300">
          <div class="flex items-center gap-3">
            <input
                type="checkbox"
                class="w-5 h-5"
                v-model="useEnglishTitle"
                id="use-english-title"
            >
            <label for="use-english-title" class="select-none">
              Prefer English titles on search
            </label>
          </div>
        </section>
        <footer class="shrink-0 py-4 px-6 bg-gray-700 border-t border-gray-700 flex justify-end items-center">
          <button @click="close" class="text-gray-300">Close</button>
        </footer>
      </div>
    </div>
  </Dialog>
</template>
