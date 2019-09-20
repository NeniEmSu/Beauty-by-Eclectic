<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
    <div class="back-to-top">
      <a href="#nav"> <img
        title="Back to Top."
        src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png"
        alt="back to top"
      ></a>
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: Cambria;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  font-family: "Franklin Gothic Medium";
}

p,
a,
span {
  font-family: Cambria;
}

.btn,
.btn-primary,
.btn-secondary,
button,
i {
  outline: none;
  border: none;
  transition: 500ms all ease-in-out;
}

.back-to-top {
  padding: 1rem;
  position: fixed;
  bottom: 8%;
  right: 2%;
  z-index: 2;
  opacity: 0.2;
  background-color: rgba(255, 255, 255, 0);
}

.back-to-top:hover {
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 1;
}
</style>
