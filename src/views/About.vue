<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p><em>Model View View Model made simple</em></p>
    <div class="mt-6">
        <div class="form-group mb-4">
            <label for="exempleInput" class="mb-1 block text-sm font-semibold">Name</label>
            <input type="text" id="exempleInput" class="block border p-2 rounded w-full" v-model="name">
        </div>
    </div>
    <div class="mt-6">
        The name is: {{ name }}
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Frontshop',
        };
    },
};
</script>
