<template>
  <div>
    <TheTopCarousel />
    <TheFeaturedCategory />
    <TheOnSale />
    <TheNewProducts />
    <TheSiteFeatures />
  </div>
</template>

<script>

import TheTopCarousel from '~/components/TheTopCarousel.vue'
import TheFeaturedCategory from '~/components/TheFeaturedCategory.vue'
import TheOnSale from '~/components/TheOnSale.vue'
import TheNewProducts from '~/components/TheNewProducts.vue'
import TheSiteFeatures from '~/components/TheSiteFeatures.vue'
export default {
  components: {
    TheTopCarousel,
    TheFeaturedCategory,
    TheOnSale,
    TheNewProducts,
    TheSiteFeatures
  }
}
</script>

<style>
</style>
