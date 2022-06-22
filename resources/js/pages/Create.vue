<template>
    <div>
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Create Note</h1>
            </div>
        </header>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="px-4 py-6 sm:px-0">
                <div class="card">
                    <div class="card-body">
                        <div class="mt-10 sm:mt-0">
                            <div class="md:grid md:grid-cols-3 md:gap-6">
                                <div class="mt-5 md:mt-0 md:col-span-3">
                                    <form @submit.prevent="addNote">
                                        <div class="shadow overflow-hidden sm:rounded-md">
                                            <div class="px-4 py-5 bg-white sm:p-6">
                                                <div class="grid grid-cols-6 gap-6">
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label for="first-name" class="block text-sm font-medium text-gray-700">User Name</label>
                                                        <select id="users" v-model="user_id" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                            <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-3">
                                                        <label for="country" class="block text-sm font-medium text-gray-700">Resource</label>
                                                        <select id="resources" v-model="resource_id" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                            <option v-for="resource in resources" :key="resource.id" :value="resource.id">{{resource.name}}</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-span-6 sm:col-span-12">
                                                        <label for="Content" class="block text-sm font-medium text-gray-700">Content</label>
                                                        <textarea v-model="contents" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            resources:[],
            users:[],
            user_id:'',
            resource_id:'',
            contents:''

        }
    },
    created() {
        this.getUsers()
    },
    methods:{
        getUsers(){
            axios.get('/api/users/')
                .then((response)=>{
                    this.users = response.data;
                    this.getResources();
                })
                .catch((error)=>{
                    console.log(error);
                })
        },
        getResources()
        {
            axios.get('/api/resources')
                .then((response)=>{
                    this.resources = response.data;
                })
                .catch((error)=>{
                    console.log(error);
                })
        },
        addNote()
        {
            axios.post('/api/notes/note',{
                user_id: this.user_id,
                contents: this.contents,
                resource_id: this.resource_id
            })
            this.user_id="";
            this.resource_id="";
            this.contents="";
            alert('Success');
        }
    }
}
</script>
