<template>
  <section
    class="singleProduct"
    style="margin-top:200px;"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div>
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
                    src="~/assets/img/hairProduct.jpg"
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
                    src="~/assets/img/hairProduct.jpg"
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
                    src="~/assets/img/hairProduct.jpg"
                    alt="image slot"
                  >
                </template>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
        <div class="col-md-7">
          <p class="newArrivals text-center">
            New
          </p>
          <h1>Kinky Marley Extensions</h1>
          <p><b>Product code:</b> KJ552FFI</p>
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

          <p class="price">
            USD $20.00
          </p>
          <p>
            <b>Availability:</b> In Stock
          </p>
          <p>
            <b>Condition:</b> New
          </p>
          <p>
            <b>Brand:</b> McBucyano
          </p>
          <label for="quantity">Quantity:
            <input
              id="quantity"
              type="text"
              value="1"
            >
          </label>
          <button
            type="button"
            class="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <div class="container productDescription">
      <h6>Reviews</h6>
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
      <h6>Product Description</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem accusamus exercitationem veniam nesciunt illo reprehenderit. Sit modi labore libero beatae atque, distinctio voluptate accusantium odio. Architecto qui, consequatur sapiente tempore accusamus natus temporibus nihil, ex eveniet nostrum commodi harum voluptas dolorem! Sequi dolore ea perspiciatis deleniti id aspernatur blanditiis officia!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem accusamus exercitationem veniam nesciunt illo reprehenderit. Sit modi labore libero beatae atque, distinctio voluptate accusantium odio. Architecto qui, consequatur sapiente tempore accusamus natus temporibus nihil, ex eveniet nostrum commodi harum voluptas dolorem! Sequi dolore ea perspiciatis deleniti id aspernatur blanditiis officia!</p>
      <hr>
    </div>

    <TheFeaturedProducts />
  </section>
</template>

<script>
import TheFeaturedProducts from '~/components/TheFeaturedProducts'
export default {
  components: {
    TheFeaturedProducts
  },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
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
.singleProduct {
  margin-top: 70px;

  i {
    color: $primaryColor;
  }

  .price {
    color: $secondaryColor;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
  }

  input {
    border: 1px solid #ddd;
    font-weight: bold;
    height: 33px;
    text-align: center;
    width: 30px;
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
  background-color: green;
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
</style>
