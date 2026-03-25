<script setup lang="ts">
import GitHubIcon from '@bitrix24/b24icons-vue/social/GitHubIcon'
import Bitrix24Icon from '@bitrix24/b24icons-vue/common-service/Bitrix24Icon'
import TelegramIcon from '@bitrix24/b24icons-vue/outline/TelegramIcon'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico?v=2' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'light'
  }
})

const title = 'Nuxt Starter Template'
const description = 'A production-ready starter template powered by Bitrix24 UI. Go from idea to app in minutes.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

const tgLink = computed(() => {
  return (
    typeof window !== 'undefined' && window.navigator?.language.includes('ru')
  )
    ? 'https://t.me/bitrix24apps'
    : 'https://t.me/b24_dev'
})
</script>

<template>
  <B24App>
    <B24Header>
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-[40px] shrink-0" />
        </NuxtLink>

        <TemplateMenu />
      </template>

      <template #right>
        <B24ColorModeButton :content="{ align: 'end', side: 'bottom' }" />
        <ClientOnly>
          <B24Button
            :to="tgLink"
            target="_blank"
            aria-label="Telegram"
            color="air-tertiary-no-accent"
            :icon="TelegramIcon"
            size="sm"
          />
          <template #fallback>
            <B24Skeleton
              accent="less"
              class="size-7 rounded-[8px]"
            />
          </template>
        </ClientOnly>
        <B24Button
          to="https://github.com/bitrix24/starter-b24ui"
          target="_blank"
          aria-label="GitHub"
          color="air-tertiary-no-accent"
          :icon="GitHubIcon"
          size="sm"
        />
      </template>
    </B24Header>

    <B24Main>
      <NuxtPage />
    </B24Main>

    <B24Separator :icon="Bitrix24Icon" />

    <B24Footer>
      <template #left>
        <ProseP
          small
          accent="less"
          class="mb-0"
        >
          Built with Bitrix24 UI • &copy; {{ new Date().getFullYear() }}
        </ProseP>
      </template>
    </B24Footer>
  </B24App>
</template>
