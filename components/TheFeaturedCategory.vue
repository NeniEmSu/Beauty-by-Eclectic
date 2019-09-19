<template>
  <section class="featuredCategories">
    <div class="container">
      <div class="row">
        <div class="col-md-4 imageBox">
          <img
            src="~/assets/img/sprayBottles.jpg"
            alt="sprayBottles"
          >
        </div>
        <div class="col-md-4 imageBox">
          <img
            src="~/assets/img/gliter.jpg"
            alt="gliter"
          >
        </div>
        <div class="col-md-4 imageBox">
          <img
            src="~/assets/img/material.jpg"
            alt="hair"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.featuredCategories {
  margin: 50px 0;

  .imageBox {
    position: relative;
    margin: auto;
    overflow: hidden;

    &:hover img {
      transform: scale(1.1);
    }
  }

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: auto;
    transform: scale(1);
    padding: 20px 0;
    transition: 1s;
  }
}
</style>
