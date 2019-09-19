<template>
  <section class="onSale text-center">
    <div class="container">
      <div class="title-box">
        <h2>
          On Sale
        </h2>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="productTop">
            <img
              src="~/assets/img/hairProduct.jpg"
              alt="hero"
            >
            <div class="overlayRight">
              <button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
              >
                <i
                  class="fas fa-eye"
                  aria-hidden="true"
                />
              </button>
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
        </div>

        <div class="col-md-3">
          <div class="productTop">
            <img
              src="~/assets/img/hairProduct.jpg"
              alt="hero"
            >
            <div class="overlayRight">
              <button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
              >
                <i
                  class="fas fa-eye"
                  aria-hidden="true"
                />
              </button>
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
        </div>

        <div class="col-md-3">
          <div class="productTop">
            <img
              src="~/assets/img/hairProduct.jpg"
              alt="hero"
            >
            <div class="overlayRight">
              <button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
              >
                <i
                  class="fas fa-eye"
                  aria-hidden="true"
                />
              </button>
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
              class="fa fa-star-o"
              aria-hidden="true"
            />
            <i
              class="fa fa-star-o"
              aria-hidden="true"
            />
            <h3>Kinky Marley Extensions</h3>
            <h5>$20.00</h5>
          </div>
        </div>

        <div class="col-md-3">
          <div class="productTop">
            <img
              src="~/assets/img/hairProduct.jpg"
              alt="hero"
            >
            <div class="overlayRight">
              <button
                type="button"
                class="btn btn-secondary"
                title="Quick Shop"
              >
                <i
                  class="fas fa-eye"
                  aria-hidden="true"
                />
              </button>
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
              class="fa fa-star-half"
              aria-hidden="true"
            />
            <i
              class="fa fa-star-o"
              aria-hidden="true"
            />
            <h3>Kinky Marley Extensions</h3>
            <h5>$20.00</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.title-box {
  background-color: $primaryColor;
  color: #fff;
  width: 180px;
  padding: 4px 10px;
  height: 40px;
  margin-bottom: 30px;
  display: flex;

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
</style>
