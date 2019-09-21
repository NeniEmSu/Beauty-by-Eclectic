<template>
  <header
    id="header"
    v-click-outside="closeMobileNavbar"
    v-handle-scroll="closeMobileNavbar"
    class="fixed-top"
  >
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
            width="100"
            height="100"
            src="~/assets/img/Beauty-By-Eclectic-Logo.jpg"
            alt="Logo img"
          >
        </nuxt-link>

        <div
          id="nav-icon2"
          class="d-block d-md-none"
          :class="{open : mobileNavOpen}"
          @click="mobileNavOpen = !mobileNavOpen"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <ul class="d-none d-md-block">
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
    <div
      class="navbar-toggle mt-5"
      :class="{'navbar-toggle-open': mobileNavOpen}"
    >
      <b-navbar-nav class="mt-5">
        <b-nav-item to="#">
          Home
        </b-nav-item>
        <b-nav-item to="#">
          Shop
        </b-nav-item>
        <b-nav-item to="#">
          Hair
        </b-nav-item>

        <b-nav-item to="#">
          skin Care
        </b-nav-item>
        <b-nav-item to="#">
          Fabrics
        </b-nav-item>
      </b-navbar-nav>
    </div>
  </header>
</template>

<script>
import clickOutside from '@/directives/click-outside'
import handleScroll from '@/directives/handle-scroll'
import TheBanner from '~/components/TheBanner.vue'
export default {
  components: {
    TheBanner
  },
  directives: {
    clickOutside,
    handleScroll
  },
  data () {
    return {
      mobileNavOpen: false,
      lastScrollPosition: 0
    }
  },
  watch: {
    $route () {
      this.mobileNavOpen = false
      this.cartOpen = false
      this.reservationOpen = false
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
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
  },

  methods: {
    closeUserDropdown () {
      this.userDropdownOpen = false
    },
    closeMobileNavbar () {
      this.mobileNavOpen = false
    },
    hide () {
      this.mobileNavOpen = false
    },

    onScroll () {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
        return
      }
      this.showHeader = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
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
  padding: 1px;
  background: $whiteColor;

  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  img {
    height: 80px;
    width: auto;
  }

  ul {
    li {
      a {
        text-decoration: none;
        color: $darkColor;
        &:hover {
          color: $primaryColor;
        }
      }
    }
  }
}

nav {
  display: flex;
  width: 100vw;
  margin-top: 0;
  justify-content: center;
  align-items: center;

  padding: 2px 0;

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
      color: #ddd;

      border-right: 1px solid #ddd;
      position: relative;
      a {
        text-decoration: none;
        color: gray;
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

#nav-icon2 {
  width: 60px;
  height: 45px;
  right: 17vw;
  position: absolute;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  z-index: 1000000;
}

#nav-icon2 span {
  display: block;
  position: absolute;
  height: 5px;
  width: 50%;
  background: $primaryColor;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon2 span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#nav-icon2 span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#nav-icon2 span:nth-child(1),
#nav-icon2 span:nth-child(2) {
  top: 0px;
}

#nav-icon2 span:nth-child(3),
#nav-icon2 span:nth-child(4) {
  top: 18px;
}

#nav-icon2 span:nth-child(5),
#nav-icon2 span:nth-child(6) {
  top: 36px;
}

#nav-icon2.open span:nth-child(1),
#nav-icon2.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon2.open span:nth-child(2),
#nav-icon2.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon2.open span:nth-child(1) {
  left: 5px;
  top: 7px;
}

#nav-icon2.open span:nth-child(2) {
  left: calc(50% - 5px);
  top: 7px;
}

#nav-icon2.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(5) {
  left: 5px;
  top: 29px;
}

#nav-icon2.open span:nth-child(6) {
  left: calc(50% - 5px);
  top: 29px;
}

.header.header--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.nav-link {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #000000;

  margin-right: 50px;
}

.navbar-toggle {
  position: fixed;
  top: 0;
  display: block;

  transition: all 0.3s ease-in-out;
  transform: translateX(-100%);

  padding: 30px 50px;
  background: white;

  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0px;
  text-align: center;
}

.btn-hamburger {
  cursor: pointer;
}

.navbar-toggle-open {
  transform: translateX(0);
}

@media screen and (max-width: 575px) {
  .nav-link {
    font-size: 18px;
    line-height: 21px;
  }
  #nav-icon2 {
    right: 15px;
  }
}

@media screen and (min-width: 576px) and (max-width: 760px) {
  #nav-icon2 {
    right: 8em;
  }
}
</style>
