<template>
  <section class="footer ">
    <div class="container ">
      <div class="row">
        <div class="col-sm-3 col-6 d-block">
          <h4>Useful Links</h4>
          <p>
            <nuxt-link
              class="d-block"
              to="/faqs"
            >
              Faqs
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="terms-of-use"
            >
              Terms of use
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="/privacy-policy"
            >
              Privacy Policy
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="/return-policy"
            >
              Return Policy
            </nuxt-link>
          </p>
        </div>

        <div class="col-sm-3 col-6 d-block">
          <h4>Navigation</h4>
          <p>
            <nuxt-link
              class="d-block"
              to="/"
            >
              Home
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="/shop"
            >
              Shop
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="/about-us"
            >
              About Us
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="contact-us"
            >
              Contact Us
            </nuxt-link>
          </p>
        </div>

        <div class="col-sm-3 col-6 d-block">
          <h4>Find Us On Social Media</h4>
          <p>
            <nuxt-link
              class="d-block"
              to="#"
              target="_blank"
            >
              <i class="fab fa-facebook-square" /> Facebook
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="https://www.instagram.com/EBEAUTY_EMPIRE/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram" /> Ebeauty Empire
            </nuxt-link>
          </p>
          <p>
            <nuxt-link
              class="d-block"
              to="https://www.instagram.com/ECLECTIC_ACCESSORY/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram" /> Eclectic Accessories
            </nuxt-link>
          </p>
        </div>

        <div class="col-sm-3 col-6 d-block footerImage">
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
        &copy;2019 - {{ new Date().getFullYear() }} — by <a
          href="#"
          style="color: #F2306F;"
          target="_blank"
          rel="noopener noreferrer"
        >NeniEmSu</a>
        @
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
    font-size: 22px;
    margin: 25px 0;
  }

  a,
  i {
    font-size: 18px;
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

@media screen and (max-width: 480px) {
  .footer {
    h4 {
      font-size: 15px;
      margin: 25px 0;
    }

    a,
    i {
      font-size: 12px;
    }
  }

  .footerImage {
    img {
      height: auto;
      width: 100px;
    }
  }
}
</style>
