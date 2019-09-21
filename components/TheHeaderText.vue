<template>
  <div id="theHeader">
    <header
      id="header"
      v-click-outside="closeMobileNavbar"
      v-handle-scroll="closeMobileNavbar"
      class="header"
    >
      <div
        class="btn-hamburger"
        @click="mobileNavOpen = !mobileNavOpen"
      >
        <div
          id="nav-icon2"
          :class="{open : mobileNavOpen}"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        class="navbar-toggle"
        :class="{'navbar-toggle-open': mobileNavOpen}"
      >
        <b-navbar-nav class="mt-5">
          <b-nav-item to="#">
            home
          </b-nav-item>
          <b-nav-item to="#">
            menu
          </b-nav-item>
          <b-nav-item to="#">
            delivery
          </b-nav-item>

          <b-nav-item to="#">
            kitchen
          </b-nav-item>
          <b-nav-item to="#">
            aboutUs
          </b-nav-item>
          <b-nav-item
            v-b-modal.modal-1
            tag="button"
          >
            vacancy
          </b-nav-item>
          <b-nav-item to="#">
            contact
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </header>
  </div>
</template>

<script>
import clickOutside from '@/directives/click-outside'
import handleScroll from '@/directives/handle-scroll'

export default {
  components: {

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
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
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
#nav-icon2 {
  width: 60px;
  height: 45px;
  position: relative;
  margin: auto;
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

header {
  background-size: cover;
  background-color: black;
  width: 100vw;
  min-height: 100px;
  height: 100%;
  max-height: 100px;
  right: 0;
  left: 0px;
  top: 0px;
  position: fixed;
  padding: 20px 50px;
  box-shadow: none;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  z-index: 1000;
}

.nav-link {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;

  color: #000000;

  margin-right: 50px;
}

.theHeader-nav-brand img {
  left: 50%;
  position: absolute;

  transform: translateX(-50%);

  min-height: 60px;
  max-height: 60px;
  height: 100%;
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

.close-hamburger {
  display: block;
}

.close-navbar-hamburger {
  display: block;
}

@media screen and (max-width: 375px) {
  header {
    background-size: cover;
    background-color: black;
    width: 100vw;
    min-height: 60px;
    height: 60%;
    max-height: 100px;
    right: 0;
    left: 0px;
    top: 0px;
    position: fixed;
    padding: 20px 40px;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    z-index: 1000;
  }

  .nav-link {
    font-size: 18px;
    line-height: 21px;
  }

  .theHeader-nav-brand img {
    min-height: 50px;
    max-height: 50px;
  }
}
</style>
