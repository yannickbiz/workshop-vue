<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['user'],
};
</script>

<style lang="scss">
@import '../assets/styles/main.scss';

.card-title {
  color: $brand-primary;
}
</style>
