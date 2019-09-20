<template>
  <section id="summer-collection">
    <div class="container">
      <div class="sc-content">
        <h1>summer collection</h1>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <a href="#">discover now</a>
      </div>
      <div class="sc-media">
        <div class="sc-media-bg">
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412556/E-commerce%20landing%20page/summer-collection/cold-fashion-man-women_3x.jpg"
            alt="sc-image"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#summer-collection {
  width: 100%;
  display: block;
  margin: 6rem 0rem;
}

#summer-collection .container {
  margin: 0 auto;
  width: 80%;
  background-color: #ffffff;
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

#summer-collection .container .sc-content h1 {
  font-family: "Franklin Gothic Medium";
  color: #000000;
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: 1rem;
  line-height: 6rem;
  text-transform: uppercase;
  margin-bottom: 2vw;
}

#summer-collection .container .sc-content p.description {
  font-family: Cambria;
  color: rgba(89, 89, 89, 0.8);
  font-size: 1rem;
  font-style: italic;
  line-height: 2rem;
  margin-bottom: 4vw;
  padding-right: 4rem;
}

#summer-collection .container .sc-content a {
  border-bottom: 2px solid #a61458;
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

@media only screen and (max-width: 1024px) {
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
    -ms-flex-direction: column;
    flex-direction: column;
  }
  #summer-collection .container .sc-content {
    width: 80vw;
    padding: 8rem 2rem 2rem;
  }
  #summer-collection .container .sc-media {
    width: 80vw;
  }
  #summer-collection .container .sc-content h1 {
    font-size: 5.6vw;
    letter-spacing: 1rem;
    line-height: 4rem;
  }
}

@media only screen and (max-width: 768px) {
  #summer-collection .container .sc-content h1 {
    font-size: 5.6vw;
    letter-spacing: 0.6rem;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 480px) {
  #summer-collection .container .sc-content p.description {
    font-size: 1rem;
    line-height: 1.8rem;
    margin-bottom: 4vw;
    padding-right: 1.2rem;
    text-align: justify;
    margin-bottom: 2rem;
  }
}
</style>
