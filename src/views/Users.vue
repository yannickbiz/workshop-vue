<template>
    <div>
        <h1>Users</h1>
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
import { users } from '../jsonplaceholder';
import Card from '../components/Card';

export default {
    name: 'Users',
    components: {
        Card,
    },
    data() {
        return {
            users: users,
        };
    },
};
</script>
