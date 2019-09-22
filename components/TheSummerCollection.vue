<template>
  <section id="summer-collection">
    <div class="container">
      <div class="sc-content">
        <h2>African Print collection</h2>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
          has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <nuxt-link to="/fabrics">
          Discover now
        </nuxt-link>
      </div>
      <div class="sc-media">
        <div class="sc-media-bg">
          <img
            src="~/assets/img/africanPrint.jpg"
            alt="Photo of an africn woman in an african print head gear by Oladimeji Odunsi on Unsplash"
          >
          <a
            style="background-color:#F2306F;color:white;text-decoration:none;padding:10px 10px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:0px;boder:none;outline:none;"
            href="https://unsplash.com/@oladimeg?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Oladimeji Odunsi"
          ><span style="display:inline-block;padding:2px 3px"><svg
            xmlns="http://www.w3.org/2000/svg"
            style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg></span><span style="display:inline-block;padding:2px 3px">Oladimeji Odunsi</span></a>
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
