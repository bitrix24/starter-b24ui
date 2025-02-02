<script setup lang="ts">
/**
 * @memo This demo
 * Not use at real project
 */
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { B24Frame } from '@bitrix24/b24jssdk'
import { LoggerBrowser, Type, Text } from '@bitrix24/b24jssdk'
import { DateTime } from 'luxon'
import type { DescriptionListItem } from '@bitrix24/b24ui-nuxt'
import ArrowToTheLeftIcon from '@bitrix24/b24icons-vue/actions/ArrowToTheLeftIcon'
import Refresh9Icon from '@bitrix24/b24icons-vue/crm/Refresh9Icon'

const $logger = LoggerBrowser.build(
	'AppVue: Frame',
	true
)

let $b24: B24Frame
const isInit = ref<boolean>(false)
const serverTime = ref<DateTime | null>(null);

onMounted(async() => {
	try {
		const { $initializeB24Frame } = useNuxtApp()
		$b24 = await $initializeB24Frame()
		$b24.setLogger(LoggerBrowser.build('Core', true))
		
		await $b24.parent.setTitle('[playground] Testing Frame')
		
		await getServerTime()
		
		isInit.value = true
	}
	catch(error) {
		$logger.error(error)
	}
})

onUnmounted(() =>  {
	$b24?.destroy()
})

const getServerTime = async (): Promise<void> => {
	try {
		const response = await $b24.callMethod('server.time')
		const serverTimeResponse = response.getData().result
		serverTime.value = Text.toDateTime(serverTimeResponse)
		
	} catch (error) {
		$logger.error(error)
		serverTime.value = null
	}
}

/**
 * Type guard for test
 * @todo move to jssdk
 */
const isDateTime = (value: unknown): value is DateTime => {
	return value instanceof DateTime;
};

const itemsActions = computed<DescriptionListItem[]>(() => {
	
	const list: DescriptionListItem[] = []
	
	
	if (Type.isNull(serverTime.value)) {
		list.push({
			label: 'ServerTime',
			description: 'Need load from server'
		})
		// } else if (serverTime.value instanceof DateTime) {
	} else if (isDateTime(serverTime.value)) {
		list.push(
			{
				label: 'date',
				description: serverTime.value.toFormat('y-MM-dd')
			},
			{
				label: 'time',
				description: serverTime.value.toFormat('HH:mm:ss')
			}
		)
	}
	
	return list
})
</script>
<template>
	<div class="flex flex-col items-center justify-center gap-16 h-screen">
		<div class="flex flex-row flex-wrap items-center justify-center gap-3">
			<B24Button
				rounded
				label="Index"
				color="link"
				depth="dark"
				to="/"
				:icon="ArrowToTheLeftIcon"
			/>
			/ <div class="text-h1">
			Main page content
		</div>
		</div>
		<div v-if="!isInit">
			Loading ...
		</div>
		<B24DescriptionList
			v-else
			class="p-4 w-full sm:w-1/2 ring rounded-md bg-base-30 ring-base-200 dark:bg-base-800 dark:ring-base-600"
			legend="Bitrix24 server time"
			text="api: server.time"
			
			:items="itemsActions"
			:b24ui="{
		      labelWrapper: 'px-4',
		      container: '',
		      descriptionWrapper: 'px-4',
		      footer: 'mt-2 px-4 py-6 flex flex-row flex-nowrap justify-end items-center'
		    }"
		>
			<template #footer>
				<B24Button
					color="ai"
					:icon="Refresh9Icon"
					use-cloak
					loading-auto
					@click="getServerTime"
				/>
			</template>
		</B24DescriptionList>
	</div>
</template>