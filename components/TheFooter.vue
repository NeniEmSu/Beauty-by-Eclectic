<template>
  <section class="footer">
    <div class="container ">
      <div class="row">
        <div class="col-md-3 d-block">
          <h4>Useful Links</h4>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Faq
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Terms of use
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Privacy Policy
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Return Policy
            </nuxt-link>
          </p>
        </div>

        <div class="col-md-3 d-block">
          <h4>Navigation</h4>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Home
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Shop
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              About Us
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              Contact Us
            </nuxt-link>
          </p>
        </div>

        <div class="col-md-3 d-block">
          <h4>Find Us On Social Media</h4>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              <i class="fab fa-facebook-square" />Facebook
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              <i class="fab fa-instagram" />Intstagram
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              <i class="fab fa-twitter-square" />Twitter
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
            >
              <i class="fab fa-linkedin" />Linkedin
            </nuxt-link>
          </p>
        </div>

        <div class="col-md-3 d-block footerImage">
          <h4>Payment options</h4>
          <img
            class="d-block "
            src="~/assets/img/payment-options.png"
            alt="card options"
          >
        </div>
      </div>
      <hr>
      <div class="mx-auto text-center copyright">
        &copy;2019 - {{ new Date().getFullYear() }} —
        <strong>Beauty by eclectic</strong>
        All rights reserved
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.footer {
  background-color: $darkColor;
  color: $lightColor;

  h4 {
    font-size: 15px;
    margin: 25px 0;
  }

  a,
  i {
    font-size: 12px;
    color: $lightColor;
  }
}

.footerImage {
  img {
    height: auto;
    width: 150px;
  }
}

hr {
  border: 1px solid #ddd;
}

.copyright {
  margin-bottom: -80px;
  text-align: center;
  font-size: 15px;
  padding-bottom: 20px;
}
</style>
