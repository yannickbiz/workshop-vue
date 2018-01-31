<template>
    <div class="twdb">
        <h1>Two Way Data Binding</h1>
        <input type="text" v-model="name">
        <p>{{ name }}</p>
    </div>
</template>

<script>
// View is bind to the model, model is bind to the view
export default {
    name: 'TwoWayDataBinding',
    data() {
        return {
            name: 'Yannick Biz',
        };
    },
};
</script>

<style lang="scss">

</style>
