<template>
    <div class="twdb">
        <h1>Two Way Data Binding</h1>
        <!-- Software Architectural pattern -->
        <p>Model View View Model made simple</p>
        <input type="text" v-model="name">
        <p>{{ name }}</p>
    </div>
</template>

<script>
// NOTE: View is bind to the model, model is bind to the view
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
