<template>
  <div class="container mt-4">
    <h1>Two Way Data Binding</h1>
    <p>Model View View Model made simple</p>
    <div class="form-group">
      <label for="exempleFirstName">First Name</label>
      <input type="text" class="form-control" id="exempleFirstName" v-model="name">
    </div>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Employee</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ name }}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
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
