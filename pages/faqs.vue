<template>
  <section id="privacy-policy">
    <section class="hero">
      <div id="header-hero">
        <div class="header-bg">
          <img
            src="~/assets/img/dayne-topkin-u5Zt-HoocrM-unsplash.jpg"
            alt="Photo about privacy by Dayne Topkin on Unsplash"
          >

          <a
            style="background-color:#F2306F;color:white;text-decoration:none;padding:10px 10px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:0px;boder:none;outline:none;"
            href="https://unsplash.com/@dtopkin1?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
            target="_blank"
            rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Dayne Topkin"
          ><span style="display:inline-block;padding:2px 3px"><svg
            xmlns="http://www.w3.org/2000/svg"
            style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white"
            viewBox="0 0 32 32"
          >
            <title>unsplash-logo</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
          </svg></span><span style="display:inline-block;padding:2px 3px">Dayne Topkin</span></a>

          <div class="header-content">
            <p class="heading-1">
              Your Security Is Paramount.
            </p>
            <h1>Privcy Policy</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <h2>THE FULFILLMENT PROCESS</h2>
      <small>For Virgin Hair/ Wigs/ Beauty Essentials</small>
      <ol>
        <li>You pay for your order</li>
        <li> You will receive an Order Confirmation Email</li>
        <li>The Processing period begins. Processing time is 3-5 business days. Business days exclude weekends and holidays. Processing period is extended for Wigs. Processing period is extended 1-5 Business days during a sales period. (More info below)</li>
        <li> After the processing period is over, your shipping label will be created</li>
        <li>You will receive an Order Fulfillment email. Your <b>tracking number</b> will be inside this email.</li>
        <li>Your package is shipped off via USPS Priority mail (2-3 business days US) (6-10 business days International)</li>
      </ol>

      <h3>PROCESSING TIME (for Virgin Hair & Wigs)</h3>
      <p>This is the time it takes to receive hair from our trusted vendors and enough time for Quality control. It allows us to test out all bundles to make sure they meet our quality standards. Anything we find wrong will immediately be fixed by contacting our vendor and having them send out new bundles if necessary to ensure that you receive the BEST product. Once your order has been processed, you will receive your tracking number via email. This will be the same email you used when you placed your order. Make sure you check you spam folder and wait after 5 business days have passed before contacting us.</p>
      <h3>SHIPPING TIME</h3>
      <small>Shipping time occurs after the processing period has finished.</small>
      <ul>
        <li>(United States) 1-3 BUSINESS DAYS VIA USPS Priority Mail</li>
        <li>(International) 6-10 BUSINESS DAYS via USPS Priority Mail</li>
        <li>This time does not include the processing period</li>
        <li>Expect delays during sales periods & holidays.</li>
      </ul>

      <h3>REFUNDS/RETURNS/CANCELLATIONS</h3>
      <ul>
        <li><b> ALL SALES ARE FINAL</b>. Due to the nature of this product, refunds will not be issued. What is the nature of this product? Hair extensions. Hair extensions cannot be resold after being handled or worn by the buyer. For this reason, ALL SALES ARE FINAL.</li>
        <li>If you have placed an order and would like to cancel your order, there will be a <b>$25 flat rate fee deducted</b>. Cancellations are only accepted within <b>48 hours</b> of original purchase date.</li>
        <li>Returns are only accepted when you have received the wrong items.</li>
      </ul>

      <h3>INTERNATIONAL ORDERS</h3>
      <ul>
        <li>(International) 6-10 BUSINESS DAYS via USPS Priority Mail</li>
      </ul>
      <p>We cannot ship internationally to a postal box or mailing center. A physical address is required. CUSTOM FEES may apply. Some countries put a tax on orders that come in from other countries. This is a fee that you, the buyer, are responsible for. It is vital to research or have an understanding on the custom fees where you live. Some places require you to pay the fee before you are able to pick up your packages. Also when the package is being held in customs it may take an <b>additional 1-5 days</b> for them to inspect the package.</p>

      <h3>LOST/STOLEN PACKAGES</h3>
      <ul>
        <li>We are <b>NOT</b> responsible for any lost or stolen packages. You will not receive a refund for lost/stolen packages. Your order will not be replaced. </li>
        <li>All Packages come with a Tracking number. USPS updates their system every time they put their hands on your package. </li>
        <li><b>If you will not be home</b> on the expected arrival date/time, you can request to have you package held at your local USPS post office via WWW.USPS.COM</li>
      </ul>
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

h2 {
  margin: 6vw auto;
  font-size: 3rem;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 2vw;
}

h3 {
  margin: 0 auto;
  font-size: 2rem;
  font-style: normal;
  margin-bottom: 1.2vw;
}
</style>
