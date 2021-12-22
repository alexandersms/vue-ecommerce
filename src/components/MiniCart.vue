<template>
  <div class="dropdown-menu p-2 minicartSize" aria-labelledby="triggerId">
    <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Product title</strong>
          <br />1x23$
        </div>
        <div>
          <a href="#" class="badge badge-secondary">remove</a>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total: 25$</span>
      <a href="#">Clear Cart</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.minicartSize {
  min-width: 320px !important;
  right: 0;
  left: auto;
}
</style>
