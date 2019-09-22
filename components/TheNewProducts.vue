<template>
  <section
    id="newProducts"
    class="newProducts text-center"
  >
    <div class="container">
      <nuxt-link
        to="#"
        class="title-box"
      >
        <h2>
          New Arrivals
        </h2>
      </nuxt-link>
      <div class="row">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="col-md-3 col-sm-6"
        >
          <div class="productTop">
            <nuxt-link :to="`/product/${product.id}`">
              <img
                :src="`/products/${product.img}`"
                :alt="product.name"
              >
              <b-badge
                class="badge"
                variant="dark"
              >
                New
              </b-badge>
              <!-- <img
                src="~/assets/img/hairProduct.jpg"
                alt="hero"
              > -->
            </nuxt-link>
            <div class="overlayRight">
              <b-button
                type="button"
                class="btn btn-secondary"
                title="View details"
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
                title="Bookmark"
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

        <!-- <div class="col-md-3 col-sm-6">
          <div class="productTop">
            <nuxt-link to="/product">
              <img
                src="~/assets/img/hairProduct.jpg"
                alt="hero"
              >
            </nuxt-link>
            <div class="overlayRight">
              <b-button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
                to="/product"
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
            <i
              class="fa fa-star"
              aria-hidden="true"
            />
            <i
              class="fa fa-star"
              aria-hidden="true"
            />
            <i
              class="fa fa-star"
              aria-hidden="true"
            />
            <i
              class="fa fa-star"
              aria-hidden="true"
            />
            <i
              class="fa fa-star-half"
              aria-hidden="true"
            />
            <h3>Kinky Marley Extensions</h3>
            <h5>$20.00</h5>
          </div>
        </div> -->
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

<style lang="scss" scoped>
#newProducts {
  margin: 3rem 0rem;
}

@import "~assets/scss/productCard.scss";

@media only screen and (max-width: 574px) {
  .container {
    width: 80%;
  }
}
</style>
