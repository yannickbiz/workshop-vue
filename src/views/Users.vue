<template>
  <div class="container mt-4">
    <h1>Users</h1>
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
// Data fetching
// @ref: https://router.vuejs.org/en/advanced/data-fetching.html
import Card from '@/components/Card';

export default {
  name: 'Fetch',
  components: {
    Card,
  },
  // NOTE: When we use an arrow function, the this is lexical,
  // meaning that it does not create its own this context.
  // Instead, this has the original meaning from the enclosing context.
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
        // Fetch API
        // @ref https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        this.loading = false;
        this.users = users;
      } catch (error) {
        this.error = error.toString();
      }
    },
  },
};
</script>

<style>
.users {
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
}
</style>
