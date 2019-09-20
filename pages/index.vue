<template>
  <div>
    <TheHero />
    <TheSummerCollection />
    <TheOnSale />
    <TheNewProducts />
    <TheSiteFeatures />
    <TheSubscription />
  </div>
</template>

<script>

import TheHero from '~/components/TheHero.vue'
import TheSummerCollection from '~/components/TheSummerCollection.vue'
import TheOnSale from '~/components/TheOnSale.vue'
import TheNewProducts from '~/components/TheNewProducts.vue'
import TheSiteFeatures from '~/components/TheSiteFeatures.vue'
import TheSubscription from '~/components/TheSubscription.vue'
export default {
  components: {
    TheHero,
    TheSummerCollection,
    TheOnSale,
    TheNewProducts,
    TheSiteFeatures,
    TheSubscription
  }
}
</script>

<style>
</style>
