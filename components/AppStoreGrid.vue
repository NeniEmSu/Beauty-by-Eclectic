<template>
  <div class="storegrid container">
    <transition-group
      name="items"
      tag="section"
      class="content"
    >
      <div
        v-for="item in filteredprice"
        :key="item.id"
        class="item"
      >
        <div class="img-contain">
          <NuxtLink :to="`product/${item.id}`">
            <img :src="`/products/${item.img}`">
          </NuxtLink>
        </div>
        <star-rating
          :rating="item.starrating"
          active-color="#F2306F"
          :star-size="15"
          :show-rating="false"
          style="margin: 5px 0"
        />
        <h3>{{ item.name }}</h3>
        <h4 class="price">
          {{ item.price | currency }}
        </h4>
      </div>
    </transition-group>
    <aside>
      <h3>Filter by Products:</h3>
      <nuxt-link to="/shop">
        All
      </nuxt-link><br>
      <nuxt-link to="/men">
        Men
      </nuxt-link><br>
      <nuxt-link to="/women">
        Women
      </nuxt-link>
      <h3>Filter by Price:</h3>
      <p style="margin-top: 5px">
        Max Price <br>
        <strong>${{ pricerange }}</strong>
      </p>
      <input
        id="pricerange"
        v-model="pricerange"
        class="slider"
        type="range"
        :min="min"
        :max="max"
        step="0.1"
      >
      <span class="min">${{ min }}</span>
      <span class="max">${{ max }}</span>
    </aside>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating/src/star-rating.vue'

export default {
  components: {
    StarRating
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      min: 0,
      max: 200,
      pricerange: 200
    }
  },
  computed: {
    filteredprice () {
      return this.data.filter(el => el.price < this.pricerange)
    }
  }
}
</script>

<style lang="scss" scoped>
.storegrid {
  margin-top: 200px;
}

.content {
  height: 100%;
  width: 100%;
}

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  img {
    width: 100%;
  }
}

.item {
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
}

aside {
  height: 100%;
  width: 100%;
}

.max {
  // display: inline-block;
  float: right;
}

button {
  border: 1px solid #ccc;
  background: white;
  padding: 10px 14px;
  cursor: pointer;
  color: black;
  font-weight: 700;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  transition: 0.3s all ease;
  &:hover {
    background: black;
    border: 1px solid black;
    color: white;
  }
}

button.purchase {
  background: $brandprimary;
  color: white;
  font-size: 16px;
  border: none;
  &:hover {
    background: #c14103;
  }
}

button.pay-with-stripe {
  background: black;
  color: white;
  font-size: 16px;
  border: none;
  &:hover {
    background: #c14103;
  }

  &:disabled {
    background: #999;
  }
}

/*------------  Store Grid   -----------*/

.storegrid {
  width: 95%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}

.content {
  /*no grid support*/
  float: right;
  width: 79.7872%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}

@media (max-width: 600px) {
  aside {
    width: 100% !important;
    margin-bottom: 10px !important;
  }

  .content {
    width: 100% !important;
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 601px) and (max-width: 900px) {
  .content {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media screen and (max-width: 550px) {
  .storegrid {
    width: 90%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
  }
}

/* --- items animation --- */

.items-leave-active {
  transition: opacity 0.2s ease-out, scale 0.2s ease-out;
}

.items-move {
  transition: opacity 0.2s ease-out, scale 0.2s ease-out;
}

.items-enter-active {
  transition: opacity 0.2s ease-out, scale 0.2s ease-out;
}

.items-enter,
.items-leave-to {
  opacity: 0;
  transform: scale(0.9);
  transform-origin: 50% 50%;
}

/* --- range --- */

input[type="range"].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 25px 0 5px;
}

input[type="range"].slider:focus {
  outline: none;
}

input[type="range"].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 4.3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: $brandprimary;
  border-radius: 13.7px;
  border: 0px solid rgba(1, 1, 1, 0);
}

input[type="range"].slider::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 62, 0), 0px 0px 0px rgba(0, 0, 88, 0);
  border: 1.9px solid $brandprimary;
  height: 17px;
  width: 17px;
  border-radius: 31px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6.35px;
}

input[type="range"].slider:focus::-webkit-slider-runnable-track {
  background: $brandprimary;
}

input[type="range"].slider::-moz-range-track {
  width: 100%;
  height: 4.3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: $brandprimary;
  border-radius: 13.7px;
  border: 0px solid rgba(1, 1, 1, 0);
}

input[type="range"].slider::-moz-range-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 62, 0), 0px 0px 0px rgba(0, 0, 88, 0);
  border: 1.9px solid $brandprimary;
  height: 17px;
  width: 17px;
  border-radius: 31px;
  background: #ffffff;
  cursor: pointer;
}

input[type="range"].slider::-ms-track {
  width: 100%;
  height: 4.3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"].slider::-ms-fill-lower {
  background: $brandprimary;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 27.4px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}

input[type="range"].slider::-ms-fill-upper {
  background: $brandprimary;
  border: 0px solid rgba(1, 1, 1, 0);
  border-radius: 27.4px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
}

input[type="range"].slider::-ms-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 62, 0), 0px 0px 0px rgba(0, 0, 88, 0);
  border: 1.9px solid $brandprimary;
  height: 17px;
  width: 17px;
  border-radius: 31px;
  background: #ffffff;
  cursor: pointer;
  height: 4.3px;
}

input[type="range"].slider:focus::-ms-fill-lower {
  background: $brandprimary;
}

input[type="range"].slider:focus::-ms-fill-upper {
  background: $brandprimary;
}
</style>
