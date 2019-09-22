<template>
  <section class="hero">
    <div id="header-hero">
      <div class="header-bg">
        <img
          src="~/assets/img/Beauty-By-Eclectic-Hero.jpg"
          alt="3 beautiful african women Photo by Eloise Ambursley on Unsplash"
        >
        <a
          style="background-color:#F2306F;color:white;text-decoration:none;padding:10px 10px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:0px;boder:none;outline:none;"
          href="https://unsplash.com/@e_ambursley?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          target="_blank"
          rel="noopener noreferrer"
          title="Download free do whatever you want high-resolution photos from Eloise Ambursley"
        ><span style="display:inline-block;padding:2px 3px"><svg
          xmlns="http://www.w3.org/2000/svg"
          style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
          viewBox="0 0 32 32"
        >
          <title>unsplash-logo</title>
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
        </svg></span><span style="display:inline-block;padding:2px 3px">Eloise Ambursley</span></a>
      </div>
      <div class="header-content">
        <p class="heading-1">
          Beauty, Cosmetics & Personal Care
        </p>
        <h1>wellcome to Beauty By Eclectic</h1>
        <p class="description text-center">
          Beautity By Eclectic deriving ideas, style, or taste from a broad and diverse range of sources to make you fabulous.
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

  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2vw;
  padding-top: 15vw;
}

#header-hero .header-content h1 {
  margin: 0 auto;

  font-size: 3rem;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 2.4vw;
}

#header-hero .header-content h1 .logo-style {
  color: $primaryColor;
}

#header-hero .header-content p.description {
  margin: 0 auto;
  width: 30%;

  font-size: 1.4rem;
  font-style: normal;
  margin-bottom: 5vw;
}

#header-hero .header-content .button {
  margin: 0 auto;
  background-color: $primaryColor;
  -webkit-box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  box-shadow: 0px 1px 3.84px 0.16px rgba(0, 0, 0, 0.35);
  width: 10rem;
  padding: 0.8rem;
  border-radius: 0;

  &:hover {
    background-color: #fff;
  }
}

#header-hero .header-content .button {
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
    height: 100vh;
    overflow: hidden;
  }
  #header-hero .header-bg img {
    width: 100rem;
    height: 100vh;
    margin-left: -50%;
  }
  #header-hero .header-content p.heading-1 {
    padding-top: 25vw;
  }
  #header-hero .header-content p.description {
    width: 70%;
    margin-bottom: 4rem;
  }
}

@media only screen and (max-width: 520px) {
  #header-hero .header-content p.heading-1 {
    font-size: 1rem;
    padding-top: 40vw;
  }

  #header-hero .header-content h1 {
    font-size: 2rem;
    padding: 1rem 0rem;
  }
  #header-hero .header-bg img {
    width: 100rem;
    height: 100vh;
    margin-left: -140%;
  }
  #header-hero .header-content p.description {
    width: 80%;
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

@media only screen and (max-width: 400px) {
  #header-hero .header-content p.heading-1 {
    font-size: 1rem;
    padding-top: 50vw;
  }

  #header-hero .header-content h1 {
    font-size: 2rem;
    padding: 1rem 0rem;
  }
  #header-hero .header-bg img {
    width: 100rem;
    height: 100vh;
    margin-left: -140%;
  }
  #header-hero .header-content p.description {
    width: 80%;
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
