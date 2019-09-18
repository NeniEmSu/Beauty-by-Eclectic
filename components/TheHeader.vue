<template>
  <header class="fixed-top">
    <TheBanner />
    <nav
      id="nav"
      class="navbar"
    >
      <div class="container">
        <nuxt-link to="/">
          <img
            src="~/assets/img/Beauty-By-Eclectic-Logo.jpg"
            alt="Logo img"
          >
        </nuxt-link>

        <ul>
          <li>
            <nuxt-link
              exact
              to="/"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/all">
              Shop
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/women">
              Hair
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/men">
              Cosmetics
            </nuxt-link>
          </li>

          <li>
            <div
              v-if="cartCount > 0"
              class="carttotal"
            >
              {{ cartCount }}
            </div>
            <nuxt-link to="/cart">
              <i class="fas fa-shopping-cart" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import TheBanner from '~/components/TheBanner.vue'
export default {
  components: {
    TheBanner
  },
  data () {
    return {
      cartCount: 5
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('nav')
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop >= 500) {
          if (navClasses.contains('shrink') === false) {
            navClasses.toggle('shrink')
          }
        } else if (navClasses.contains('shrink') === true) {
          navClasses.toggle('shrink')
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
nav.shrink {
  padding: 4px;
  background: #ffffff;

  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  img {
    height: 80px;
    width: auto;
  }
}

nav {
  display: flex;
  width: 100vw;
  margin-top: 0;
  justify-content: center;
  align-items: center;

  padding: 8px 0;
  img {
    height: 100px;
  }

  ul {
    padding-left: 0;
    margin-left: auto;

    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        color: $blackColor;
        &:hover {
          color: $primaryColor;
        }
      }
    }
  }
}
.carttotal {
  position: absolute;
  border-radius: 1000px;
  background: $primaryColor;
  color: white;
  font-size: 10px;
  padding: 3px;
  top: -18px;
  right: -5px;
  width: 25px;
  text-align: center;
  height: 25px;
  font-size: 10px;
  padding: 6px 10px;
  font-weight: bold;
}
@media screen and (max-width: 850px) {
  h1 {
    margin: 0;
  }
  nav ul li {
    padding: 0 5px !important;
    border-left: none !important;
    border-right: none !important;
  }
}
</style>
