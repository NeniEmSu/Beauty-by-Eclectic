<template>
  <section class="siteFeatures d-flex ">
    <div class="container my-auto text-center">
      <div class="row my-auto">
        <div class="col-md-3 featureBox">
          <div class="featureBoxInner">
            <img
              src="~/assets/img/satisfactio.png"
              alt="satisfactio"
            >
            <div class="featureText">
              <p><b>10% Original Items</b> is all we provide you.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 featureBox">
          <div class="featureBoxInner">
            <img
              src="~/assets/img/satisfactio.png"
              alt="satisfactio"
            >
            <div class="featureText">
              <p><b>10% Original Items</b> is all we provide you.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 featureBox">
          <div class="featureBoxInner">
            <img
              src="~/assets/img/satisfactio.png"
              alt="satisfactio"
            >
            <div class="featureText">
              <p><b>10% Original Items</b> is all we provide you.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3 featureBox">
          <div class="featureBoxInner">
            <img
              src="~/assets/img/satisfactio.png"
              alt="satisfactio"
            >
            <div class="featureText">
              <p><b>10% Original Items</b> is all we provide you.</p>
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
  img {
    width: 20%;
  }
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
  width: 80%;
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
</style>
