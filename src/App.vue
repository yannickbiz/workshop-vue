<template>
  <div id="app" class="container my-6 mx-auto px-4">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sandbox">Sandbox</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/todos">Todos</router-link>
    </div>
    <router-view/>
  </div>
</template>
