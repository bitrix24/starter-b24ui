<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'light',
  }
})
</script>

<template>
  <B24App>
    <B24SidebarLayout
      :use-light-content="false"
      :b24ui="{ container: 'mt-0' }"
    >
      <NuxtPage />
    </B24SidebarLayout>
  </B24App>
</template>
