<template>
  <div>
    <TheHeader />
    <TheTopCarousel />
    <TheFeaturedCategory />
  </div>
</template>

<script>

import TheHeader from '~/components/TheHeader.vue'
import TheTopCarousel from '~/components/TheTopCarousel.vue'
import TheFeaturedCategory from '~/components/TheFeaturedCategory.vue'
export default {
  components: {
    TheHeader,
    TheTopCarousel,
    TheFeaturedCategory
  }
}
</script>

<style>
</style>
