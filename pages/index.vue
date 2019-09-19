<template>
  <div>
    <TheHeader />
    <TheTopCarousel />
    <TheFeaturedCategory />
    <TheOnSale />
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader.vue'
import TheTopCarousel from '~/components/TheTopCarousel.vue'
import TheFeaturedCategory from '~/components/TheFeaturedCategory.vue'
import TheOnSale from '~/components/TheOnSale.vue'
export default {
  components: {
    TheHeader,
    TheTopCarousel,
    TheFeaturedCategory,
    TheOnSale
  }
}
</script>

<style>
</style>
