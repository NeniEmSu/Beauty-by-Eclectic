<template>
  <div class="banners">
    <div class="banner container">
      <p class="my-auto d-none d-md-flex">
        <strong class="my-auto">FREE SHIPPING</strong> US ORDERS OVER $25
      </p>

      <ul class="my-auto">
        <li
          v-click-outside="closeSearch"
          v-handle-scroll="closeSearch"
          class="my-auto"
        >
          <span
            class="search"
            to="#"
          >
            <label for="search" />
            <input
              id="search"
              :class="{ open: isActive }"
              type="text"
              placeholder="Search"
              class="searchTerm"
            >
            <button
              v-if="!isActive"
              class="searchButton"
              @click="opened"
            >
              <i class="fas fa-search" />
            </button>
            <button
              v-if="isActive"
              type="submit"
              class="searchButton"
            >
              <i class="fas fa-search" />
            </button>
          </span>
        </li>
        <li class="my-auto">
          <nuxt-link to="#">
            <i class="fas fa-globe" />
          </nuxt-link>
        </li>
        <li class="my-auto">
          <nuxt-link to="#">
            <i class="fas fa-user" />
          </nuxt-link>
        </li>
        <li class="my-auto">
          <div
            v-if="cartCount > 0"
            class="carttotal"
          >
            {{ cartCount }}
          </div>
          <nuxt-link to="#">
            <i class="fas fa-shopping-cart" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import clickOutside from '@/directives/click-outside'
import handleScroll from '@/directives/handle-scroll'
export default {
  directives: {
    clickOutside,
    handleScroll
  },
  data () {
    return {
      cartCount: 5,
      isActive: false
    }
  },
  methods: {
    opened () {
      this.isActive = !this.isActive
    },
    closeSearch () {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.banners {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $darkColor;
  color: $lightColor;
  height: 50px;
  width: 100vw;
  text-align: center;
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  padding-left: 0;
  margin-left: auto;
  list-style: none;

  li {
    display: inline;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 13px;
    padding: 0 20px;
    border-right: 1px solid #ddd;
    position: relative;
    list-style: none;
    text-decoration: none;
    a,
    span {
      color: $blackColor;
      text-decoration: none;
      &:hover {
        color: $primaryColor;
      }
    }
    i {
      color: $lightColor;
      &:hover {
        color: $primaryColor;
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
  font-size: 14px;
  padding: 2px 8.5px;
  font-weight: bold;
}

.searchButton {
  background: transparent;
  border: none;
}

input {
  border: none;
  padding: 0 5px;

  background: transparent;
  width: 0px;
  transition: 250ms all ease-in-out;
  outline: none;

  &:focus {
    background-color: $whiteColor;
  }

  &.open {
    border-left: 1px solid #ddd;
    width: 100px;
  }
}
</style>
