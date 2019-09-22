<template>
  <section class="featuredProducts text-center">
    <div class="container">
      <div class="title-box">
        <h2>
          Featured
        </h2>
      </div>
      <div class="row">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="col-md-3"
        >
          <div class="productTop">
            <nuxt-link :to="`/product/${product.id}`">
              <img
                :src="`/products/${product.img}`"
                :alt="product.name"
              >
              <!-- <img
                src="~/assets/img/hairProduct.jpg"
                alt="hero"
              > -->
            </nuxt-link>
            <div class="overlayRight">
              <b-button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
                :to="`/product/${product.id}`"
              >
                <i
                  class="fas fa-eye"
                  aria-hidden="true"
                />
              </b-button>
              <button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
              >
                <i
                  class="fa fa-heart-o"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                title="Add to cart"
              >
                <i
                  class="fa fa-shopping-bag"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div class="productBottom">
            <div class="mx-auto d-inline text-center">
              <star-rating
                :rating="product.starrating"
                active-color="#F2306F"
                :star-size="15"
                :show-rating="true"
                :increment="0.5"
                :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                style="margin: 5px 0"
              />
            </div>
            <h3>{{ product.name }}</h3>
            <h5>{{ product.price | currency }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from 'vue-star-rating/src/star-rating.vue'
export default {
  components: {
    StarRating
  },
  computed: {
    featuredProducts () {
      return this.$store.getters.featuredProducts
    }
  }
}
</script>

<style lang="scss">
.title-box {
  background-color: $primaryColor;
  color: #fff;
  width: 180px;
  padding: 4px 10px;
  height: 40px;
  margin-bottom: 30px;
  display: flex;
  text-decoration: none;

  h2 {
    font-size: 24px;
  }

  &::after {
    content: "";
    border-top: 40px solid $primaryColor;
    border-right: 50px solid transparent;
    position: absolute;
    display: flex;
    margin-top: -4px;
    margin-left: 170px;
  }
}

.productTop {
  img {
    width: 100%;
  }

  &:hover .overlayRight {
    opacity: 1;
    margin-left: 5%;
    transition: 500ms;
  }

  .overlayRight {
    display: block;
    opacity: 0;
    position: absolute;
    top: 10%;
    margin-left: 0;
    width: 70px;

    i {
      cursor: pointer;
      background-color: #fff;
      color: #000;
      height: 35px;
      width: 35px;
      font-size: 20px;
      padding: 7px;
      margin-top: 5%;
      margin-bottom: 5%;

      &:hover {
        color: $primaryColor;
      }
    }

    .btn-secondary {
      background: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
}

.productBottom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  i {
    color: $primaryColor;
    font-size: 10px;
  }

  h3 {
    color: $blackColor;
    font-size: 20px;
    font-weight: bold;
  }

  h5 {
    color: $darkColor;
    font-size: 15px;
    padding-bottom: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .productTop {
    .overlayRight {
      display: block;
      opacity: 1;
      position: absolute;
      top: 10%;
      margin-left: 5%;
      width: 70px;
    }
  }
}
</style>
