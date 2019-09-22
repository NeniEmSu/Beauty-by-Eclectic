<template>
  <section class="siteFeatures d-flex ">
    <div class="container my-auto text-center">
      <div class="row my-auto">
        <div class="col-md-3 col-sm-6 col-6 featureBox">
          <div class="featureBoxInner">
            <i class="far fa-question-circle fa-2x" />
            <div class="featureText">
              <h5>Original Items</h5>
              <p class="d-none d-sm-block">
                Only quality
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-6 featureBox">
          <div class="featureBoxInner">
            <i class="fas fa-smile fa-2x" />
            <div class="featureText">
              <h5>99% Satisfied</h5>
              <p class="d-none d-sm-block">
                Call us any time
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-6 featureBox">
          <div class="featureBoxInner">
            <i class="fas fa-undo-alt fa-2x" />
            <div class="featureText">
              <h5>EASY RETURNS</h5>
              <p class="d-none d-sm-block">
                30 Days
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-6 col-6 featureBox">
          <div class="featureBoxInner">
            <i class="fas fa-shipping-fast fa-2x" />
            <div class="featureText">
              <h5>SHIP GLOBALLY</h5>
              <p class="d-none d-sm-block">
                From 5 Days
              </p>
            </div>
          </div>
        </div>
      </div>
      <b-button
        to="/shop"
        class="btn btn-secondary"
      >
        Start Shopping
      </b-button>
    </div>
  </section>
</template>

<style lang="scss">
.siteFeatures {
  margin: 60px 0 0 0;
  background-image: url(~assets/img/callout.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 300px;
}

.featureBox {
  padding: 20px;
  margin: auto;
  text-align: center;
}

.featureBoxInner {
  background-color: white;
  padding: 10px;
}

.featureText {
  margin: auto;
  margin-top: 10px;
  h5 {
    text-transform: uppercase;
  }
}

.btn-secondary {
  background-color: $primaryColor;
  margin-top: 20px;
  outline: none;
  border: none;
  transition: 500ms all ease-in-out;

  &:hover {
    color: $primaryColor;
    background-color: white;
  }
}

@media screen and (max-width: 580px) {
  .siteFeatures {
    margin: 60px 0 0 0;
    background-image: url(~assets/img/callout.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
  }
}

@media screen and (max-width: 990px) {
  .siteFeatures {
    margin: 60px 0 0 0;
    background-image: url(~assets/img/callout.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 500px;
  }

  .featureText {
    margin: auto;
    margin-top: 10px;
    h5 {
      text-transform: uppercase;
      font-size: 1rem;
    }
  }
}
</style>
