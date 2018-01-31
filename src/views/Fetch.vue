<template>
    <div>
        <h1>Fetch (Advanced)</h1>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="users.length">
            <ul class="users">
                <li v-for="user in users" :key="user.id">
                    <Card :user="user"></Card>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card';
export default {
    name: 'Fetch',
    components: {
        Card,
    },
    data: () => ({
        loading: false,
        error: null,
        users: [],
    }),
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                this.loading = true;
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                this.loading = false;
                this.users = users;
            } catch (error) {
                console.log('here');
                this.error = error.toString();
            }
        },
    },
};
</script>
