<template>
  <section class="hero">
    <div id="header-hero">
      <div class="header-bg">
        <img
          src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg"
          alt="header-image"
        >
      </div>
      <div class="header-content">
        <p class="heading-1">
          Beauty, Cosmetics & Personal Care
        </p>
        <h1>wellcome to Beauty <span class="logo-style">By</span> Eclectic</h1>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <b-button
          class="button"
          to="/shop"
        >
          shop now
        </b-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
}

#header-hero .header-bg {
  width: 100%;
  height: 100vh;
}

#header-hero .header-bg img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

#header-hero .header-content {
  width: 100%;
  height: 100vh;
  background-color: rgba(14, 13, 13, 0.5);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  text-align: center;
  color: #f2f2f2;
  padding: 5vw 0.4rem;
}

#header-hero .header-content p.heading-1 {
  text-transform: uppercase;
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2vw;
  padding-top: 15vw;
}

#header-hero .header-content h1 {
  margin: 0 auto;
  font-family: "Lato", sans-serif;
  font-size: 3rem;
  font-style: italic;
  text-transform: uppercase;
  margin-bottom: 2.4vw;
}

#header-hero .header-content h1 .logo-style {
  color: $primaryColor;
}

#header-hero .header-content p.description {
  margin: 0 auto;
  width: 30%;
  font-family: Cambria;
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: 5vw;
}

#header-hero .header-content .button {
  margin: 0 auto;
  background-color: $primaryColor;
  -webkit-box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  width: 10rem;
  padding: 0.8rem;

  &:hover {
    background-color: #fff;
  }
}

#header-hero .header-content .button {
  font-family: Cambria;
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
}

@media only screen and (max-width: 1440px) {
  #header-hero .header-content p.description {
    width: 40%;
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }
  #header-hero .header-content p.heading-1 {
    padding-top: 8vw;
  }
}

@media only screen and (max-width: 1024px) {
  #header-hero .header-bg {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  #header-hero .header-bg img {
    width: 100rem;
    height: 40rem;
    margin-left: -50%;
  }
  #header-hero .header-content p.heading-1 {
    padding-top: 20vw;
  }
  #header-hero .header-content p.description {
    width: 60%;
    margin-bottom: 4rem;
  }
}

@media only screen and (max-width: 480px) {
  #header-hero .header-content h1 {
    font-size: 2rem;
    padding: 1rem 0rem;
  }
  #header-hero .header-bg img {
    width: 100rem;
    height: 40rem;
    margin-left: -140%;
  }
  #header-hero .header-content p.description {
    width: 50%;
    margin-bottom: 3rem;
    text-align: left;
  }
  button {
    width: 8rem;
    padding: 0.6rem;
  }
  #header-hero .header-content .button {
    font-size: 1rem;
  }
}
</style>
