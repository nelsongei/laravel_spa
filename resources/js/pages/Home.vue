<template>
    <div>
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Home</h1>
            </div>
        </header>
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <div class="card">
                        <div class="card-body">
                            <router-link :to="{name: 'create'}"
                                         class="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                         aria-current="page">Add Note
                            </router-link>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            User
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Resource
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Content
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="note in notes">
                                        <th scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {{note.user.name}}
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ note.resource.name }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ note.content }}
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a href="#"
                                               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return{
            notes:[],
        }
    },
    created(){
        this.getNotes();
    },
    methods:{
        getNotes()
        {
            axios.get('/api/notes/')
                .then((response)=>{
                    this.notes  = response.data
                })
                .catch((error)=>{
                    console.log(error)
                })
        }
    }

}
</script>
