<template>
  <section id="privacy-policy">
    <section class="hero">
      <div id="header-hero">
        <div class="header-bg">
          <img
            src="~/assets/img/privacyPolicy.jpg"
            alt="Photo about privacy by Dayne Topkin on Unsplash"
          >
          <a
            style="background-color:#F2306F;color:white;text-decoration:none;padding:10px 10px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:0px;boder:none;outline:none;"
            href="https://unsplash.com/@lianhao?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Lianhao Qu"
          ><span style="display:inline-block;padding:2px 3px"><svg
            xmlns="http://www.w3.org/2000/svg"
            style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg></span><span style="display:inline-block;padding:2px 3px">Lianhao Qu</span></a>

          <div class="header-content">
            <p class="heading-1">
              Learn more about who we are and what we do.
            </p>
            <h1>About us</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="summer-collection">
      <div class="container">
        <div class="sc-content">
          <h2>ECLECTIC BEAUTY BRAND</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel perspiciatis voluptas deserunt. Facilis esse quam ipsum nobis veniam! Ullam veritatis consequatur cumque iusto modi ad exercitationem officia culpa quod!</p>

          <p>Some of out core values are:</p>
          <ul>
            <li>We are dedicated to delivery of Quality And Satifaction.</li>
            <li>Known for Unwavering Honesty & Courtesy </li>
            <li>99% positive feed back rate</li>
            <li>Shipping to any part of the world</li>
            <li>WITH ECLECTIC ,YOUR SATISFACTION IS PARAMOUNT </li>
          </ul>
          <strong>BEAUTY IS A PRIORITY</strong>
        </div>
        <div class="sc-media">
          <div class="sc-media-bg">
            <img
              src="~/assets/img/aboutUsImg.jpg"
              alt="Photo of a beautiful young lady by Leon Ell' on Unsplash"
            >
            <a
              style="background-color:#F2306F;color:white;text-decoration:none;padding:10px 10px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:0px;boder:none;outline:none;"
              href="https://unsplash.com/@elldot_?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
              target="_blank"
              rel="noopener noreferrer"
              title="Download free do whatever you want high-resolution photos from Leon Ell&#x27;"
            ><span style="display:inline-block;padding:2px 3px"><svg
              xmlns="http://www.w3.org/2000/svg"
              style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
              viewBox="0 0 32 32"
            >
              <title>unsplash-logo</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
            </svg></span><span style="display:inline-block;padding:2px 3px">Leon Ell&#x27;</span></a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 50vh;
  display: block;
  position: relative;
}

#header-hero .header-bg {
  width: 100%;
  height: 50vh;
}

#header-hero .header-bg img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: top center;
}

#header-hero .header-content {
  width: 100%;
  height: 50vh;
  background-color: rgba(14, 13, 13, 0.5);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  text-align: center;
  color: #f2f2f2;
  padding: 3vw 0.4rem;
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

  font-size: 4rem;
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
    height: 50vh;
    overflow: hidden;
  }
  #header-hero .header-bg img {
    width: 100rem;
    height: 50vh;
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
    height: 50vh;
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
    height: 50vh;
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

#summer-collection {
  width: 100%;
  display: block;
  margin: 6rem 0rem;
}

#summer-collection .container {
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

#summer-collection .container .sc-content {
  width: 60%;
  padding-top: 3.4rem;
  padding-right: 3rem;
  padding-bottom: 2rem;
}

#summer-collection .container .sc-content h2 {
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 1rem;
  line-height: 6rem;
  text-transform: uppercase;
  margin-bottom: 2vw;
}

#summer-collection .container .sc-content p.description {
  font-size: 1rem;
  font-style: normal;
  line-height: 2rem;
  margin-bottom: 4vw;
  padding-right: 4rem;
}

#summer-collection .container .sc-content a {
  border-bottom: 2px solid $primaryColor;
  text-decoration: none;
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-weight: 400;
  text-transform: uppercase;
}

#summer-collection .container .sc-media {
  width: 40vw;
}

#summer-collection .container .sc-media .sc-media-bg {
  width: 100%;
  height: auto;
  padding-top: 3vw;
}

#summer-collection .container .sc-media .sc-media-bg img {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 985px) {
  #summer-collection {
    width: 100vw;
    display: block;
    margin-top: 0rem;
  }
  #summer-collection .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  #summer-collection .container .sc-content {
    width: 100%;
    padding: 3rem 0rem 0rem;
  }
  #summer-collection .container .sc-media {
    width: 100%;
  }
  #summer-collection .container .sc-content h2 {
    font-size: 3vw;
    letter-spacing: 1rem;
    line-height: 2rem;
  }
}

@media only screen and (max-width: 768px) {
  #summer-collection .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  #summer-collection .container .sc-content h2 {
    font-size: 5.6vw;
    letter-spacing: 0.6rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  #summer-collection .container {
    width: 80%;
  }
  #summer-collection .container .sc-content p.description {
    font-size: 1rem;
    line-height: 1.8rem;
    margin-bottom: 4vw;
    padding-right: 0rem;
    text-align: left;
    margin-bottom: 2rem;
  }
}
</style>
