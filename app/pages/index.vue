<script setup lang="ts">
import PlayCircleIcon from '@bitrix24/b24icons-vue/main/PlayCircleIcon'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 h-screen">
    <h1 class="font-bold text-2xl text-blue-500">
      Bitrix24 UI Playground
    </h1>

    <div class="flex items-center gap-2">
      <B24Button
        label="Documentation"
        color="ai"
        :icon="PlayCircleIcon"
        to="https://bitrix24.github.io/b24ui/getting-started/installation/nuxt"
        target="_blank"
      />

      <B24Button
        label="GitHub"
        to="https://github.com/bitrix24/b24ui"
        target="_blank"
      />
    </div>
  </div>
</template>
