<template>
  <header class="fixed-top">
    <TheBanner />
    <nav
      id="nav"
      class="navbar"
    >
      <div class="container">
        <nuxt-link
          class="imgWrapper"
          to="/"
        >
          <img
            loading="lazy"
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
            <nuxt-link to="#">
              Shop
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              Hair
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">
              skin Care
            </nuxt-link>
          </li>

          <li>
            <nuxt-link to="/cart">
              Fabrics
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

    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('nav')
        const navClasses = navbar.classList
        if (document.documentElement.scrollTop >= 100) {
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

  .imgWrapper {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid $primaryColor;

    &:hover img {
      transform: scale(1.1);
    }
  }
  img {
    border-radius: 50%;
    border: 1px solid $primaryColor;
    height: 100px;
    display: block;
    transform: scale(1);
    transition: 1s;
  }

  ul {
    padding-left: 0;
    margin-left: auto;

    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 14px;
      font-weight: bold;
      padding: 0 15px;
      // border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        text-decoration: none;
        color: $blackColor;
        &:hover {
          color: $primaryColor;
        }
      }
    }
  }
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
