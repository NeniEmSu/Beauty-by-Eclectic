<template>
  <div
    id="individualProduct"
    class="container singleProduct"
  >
    <section class=" row">
      <section class=" col-md-5">
        <div>
          <!-- <img :src="`/products/${product.img}`"> -->
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            fade
            controls
            background="#ababab"
            img-height="350"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="480"
                  :src="`/products/${product.img}`"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="350"
                  :src="`/products/${product.img}`"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>

            <b-carousel-slide>
              <template v-slot:img>
                <img
                  class="d-block img-fluid w-100"
                  width="1024"
                  height="350"
                  :src="`/products/${product.img}`"
                  alt="image slot"
                >
              </template>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </section>
      <section class="col-md-7">
        <p class="newArrivals text-center">
          New
        </p>
        <h1>{{ product.name }}</h1>
        <p><b>Product code:</b> KJ552FFI</p>
        <!-- <star-rating
          :rating="product.starrating"
          active-color="#F2306F"
          :star-size="15"
          :show-rating="true"
          :increment="0.5"
          :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
          style="margin: 5px 0"
        /> -->
        <h4 class="price">
          {{ product.price | currency }}
        </h4>

        <p>
          <b>Availability:</b> In Stock
        </p>
        <p>
          <b>Condition:</b> New
        </p>
        <p>
          <b>Brand:</b> McBucyano
        </p>

        <p class="quantity">
          <button
            class="update-num sub"
            @click="quantity > 0 ? quantity-- : quantity = 0"
          >
            -
          </button>
          <input
            v-model="quantity"
            type="number"
          >
          <button
            class="update-num add"
            @click="quantity++"
          >
            +
          </button>
        </p>
        <p>
          Available in additional colors:
          <strong>
            <span :style="`color: ${product.color}`">{{ product.color }}</span>
          </strong>
        </p>
        <p>
          <button
            class="button purchase"
            @click="cartAdd"
          >
            Add to Cart
          </button>
        </p>
      </section>
    </section>
    <hr>
    <div class="review">
      <h2>Product Description</h2>
      <p>{{ product.description }}</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit dolores repudiandae animi quidem, eveniet quod dolor facilis dicta eligendi ullam error. Assumenda in fugiat natus enim similique nam itaque.</p>
      <h2>Reviews</h2>
      <!-- maybe an image of a person? -->
      <star-rating
        :rating="product.starrating"
        active-color="#F2306F"
        :star-size="15"
        :show-rating="true"
        :increment="0.5"
        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
        style="margin: 5px 0"
      />
      <p>{{ product.review }}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>

      <hr>
    </div>
    <TheFeaturedProducts />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StarRating from 'vue-star-rating/src/star-rating.vue'
import TheFeaturedProducts from '~/components/TheFeaturedProducts.vue'

export default {
  components: {
    StarRating,
    TheFeaturedProducts
  },
  data () {
    return {
      id: this.$route.params.id,
      quantity: 1,
      tempcart: [], // this object should be the same as the json store object, with an additional param, quantity
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapState(['storedata']),
    product () {
      return this.storedata.find(el => el.id === this.id)
    }
  },
  methods: {
    cartAdd () {
      const item = this.product
      item.quantity = this.quantity
      this.tempcart.push(item)
      this.$store.commit('addToCart', { ...item })
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>
#individualProduct {
  margin-top: 200px;
}

.item-contain {
  margin-left: 8%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;
}

input {
  width: 60px;
  font-size: 25px;
  margin: 0 0px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  font-weight: bold;
  text-align: center;
}

button.update-num {
  background: $secondaryColor;
  color: white;
  font-size: 20px;
  width: 45px;
  border: 1px solid $secondaryColor;
  outline: none;

  &.sub {
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
  }

  &.add {
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
  }

  &:hover {
    background-color: #fff;
    color: $secondaryColor;
  }
}

button.button.purchase {
  border: 1px solid $primaryColor;
  outline: none;

  &:hover {
    background-color: #fff;
    color: $primaryColor;
  }
}

.quantity {
  display: flex;
}

.singleProduct {
  margin-top: 70px;

  i {
    color: $primaryColor;
  }

  .price {
    color: $primaryColor;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
  }

  .btn-primary {
    background-color: $primaryColor;
    color: #fff;
    font-size: 15px;
    margin-left: 20px;
    border: none;
  }
}

.newArrivals {
  background-color: $secondaryColor;
  width: 50px;
  color: white;
  font-size: 12px;
  margin-top: 20px;
}

h2 {
  color: #555;
}

.productDescription {
  h6 {
    margin-top: 50px;
    columns: $primaryColor;
  }

  p {
    margin-top: 30px;
  }

  hr {
    margin-bottom: 50px;
  }
}

hr {
  border: 1px solid #ddd;
}

@media screen and (max-width: 650px) {
  .img img {
    width: 100%;
  }

  .item-contain {
    margin-left: 0 !important;
    width: 95% !important;
  }

  .review {
    width: 90%;
    margin-left: 4%;
  }
}
</style>
