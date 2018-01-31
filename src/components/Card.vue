<template>
    <div class="card">
        <h3 class="card__title">{{ user.name }}</h3>
        <div class="card__body">
            <small>{{ user.email }}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['user']
};
</script>

<style lang="scss">
.card {
    margin-bottom: 16px;
    padding: 16px;
    border: 1px solid #ccc;
    box-shadow: 1px 0 6px rgba(#ccc, 0.3);
}

.card__title {
    margin-top: 0;
    margin-bottom: 6px;
    font-size: 18px;
    font-weight: 700;
}

.card__body p {
    margin: 0;
}
</style>
