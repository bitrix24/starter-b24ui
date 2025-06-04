<script setup lang="ts">
import Search2Icon from '@bitrix24/b24icons-vue/main/Search2Icon'
import { onMounted, onUnmounted } from 'vue'
import { B24Frame } from '@bitrix24/b24jssdk'

let $b24: B24Frame

useHead({
    title: 'My tasks'
})

onMounted(async () => {
    try
    {
        const { $initializeB24Frame } = useNuxtApp()
        $b24 = await $initializeB24Frame()
        console.log('B24Frame initialized:', $b24.isInit)
    }
    catch (error)
    {
        console.error(error)
    }
})

onUnmounted(() => {
    $b24?.destroy()
})

</script>

<template>
    <div class="flex-auto overflow-auto px-6 py-6">
        <!-- Header -->
        <div class="flex items-center mb-4 mr-8">
            <ProseH1>My tasks</ProseH1>
            <div class="flex space-x-2 ml-8 gap-2">
                <!-- Create -->
                <B24Button size="md" color="success" label="Create" />
                <!-- Search field -->
                <div class="min-w-[400px]">
                    <B24Input size="md" type="text" placeholder="+ search" :trailing-icon="Search2Icon" />
                </div>
            </div>
        </div>

        <!-- Task table -->
        <B24TableWrapper class="overflow-x-auto w-full bg-white rounded mb-4">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Assignee</th>
                        <th>Activity</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-base-50">
                        <td>Changes in webhook architecture 🔥</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/avatar/employee.png"
                                alt="Alexander Smith" size="sm" />

                            Alexander Smith
                        </td>
                        <td>December 19, 2024, 4:56 PM</td>
                        <td>October 31, 2026, 9:00 AM</td>
                    </tr>
                    <tr>
                        <td>Approval of individual terms/discounts</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/demo/avatar/assistant.png"
                                alt="Sophia Johnson" size="sm" />
                            Sophia Johnson
                        </td>
                        <td>May 13, 3:11 PM</td>
                        <td>December 31, 7:00 PM</td>
                    </tr>
                    <tr>
                        <td>Launch campaign - Subscription 2025</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/demo/avatar/assistant.png"
                                alt="Katherine Brown" size="sm" />
                            Katherine Brown
                        </td>
                        <td>December 28, 2024, 5:10 PM</td>
                        <td>December 31, 7:00 PM</td>
                    </tr>
                    <tr>
                        <td>Details for Global Corp 2025</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/demo/avatar/assistant.png"
                                alt="Anastasia Davis" size="sm" />
                            Anastasia Davis
                        </td>
                        <td>April 23, 11:25 AM</td>
                        <td>December 31, 7:00 PM</td>
                    </tr>
                    <tr>
                        <td>Migration of customers from .us1-bk to .us2-bk</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/demo/avatar/assistant.png"
                                alt="Natalie Wilson" size="sm" />
                            Natalie Wilson
                        </td>
                        <td>May 5, 2:46 PM</td>
                        <td>December 31, 6:00 PM</td>
                    </tr>
                    <tr>
                        <td>Design CRM form for NPS</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/avatar/employee.png"
                                alt="George Miller" size="sm" />
                            George Miller
                        </td>
                        <td>September 23, 2024, 7:05 PM</td>
                        <td>December 30, 7:00 PM</td>
                    </tr>
                    <tr>
                        <td>Global Increase in App Installations</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/avatar/employee.png"
                                alt="John Anderson" size="sm" />
                            John Anderson
                        </td>
                        <td>May 12, 2:31 PM</td>
                        <td>November 28, 7:00 PM</td>
                    </tr>
                    <tr>
                        <td>Official complaints from clients</td>
                        <td>
                            <B24Avatar class="mr-2" src="https://bitrix24.github.io/b24ui/avatar/employee.png"
                                alt="Alex Logan" size="sm" />
                            Alex Logan
                        </td>
                        <td>May 6, 2:19 PM</td>
                        <td>November 27, 6:00 PM</td>
                    </tr>
                </tbody>
            </table>
        </B24TableWrapper>
        <div class="flex justify-center mt-4">
            <B24Button size="md" color="link" depth="dark" rounded label="Show more" />
        </div>
    </div>
</template>
