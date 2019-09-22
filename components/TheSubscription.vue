<template>
  <section
    id="subscription"
    class="jumbotron mb-0"
  >
    <div class="container">
      <h4>Subscribe To Our News Letter</h4>
      <p>By signing up to opt to recieve information on <b>latest updates</b>, <b>product discounts</b> , <b>sales</b> and <b>events</b> .</p>
      <p><small>Email information provided here will not be used to send spam and We'll never share your email with anyone else.</small></p>

      <form class="mx-auto text-center">
        <label for="subscription">
          <input
            id="subscription"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></label>
        <input
          id="submit"
          type="submit"
          value="Submit"
        >
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#subscription {
  width: 100%;
  height: auto;

  h4 {
    color: $blackColor;
    font-weight: 400;
    letter-spacing: 0.056rem;
    text-align: center;
    text-transform: uppercase;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  p {
    color: $darkColor;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.044rem;
    text-align: center;
    // padding: 0.2rem 0rem;
  }

  label {
    width: 30%;
  }

  input[type="email"],
  input[type="submit"] {
    border-radius: 45px;
    padding-left: 15px;
    padding-right: 15px;
    outline: none;
  }
  input[type="email"] {
    background-color: $darkColor;
    border: solid $darkColor;
    color: $lightColor;
  }

  input[type="submit"] {
    background-color: $primaryColor;
    border: solid $primaryColor;
    color: white;
    margin-left: -80px;
  }

  ::selection {
    background-color: $primaryColor;
  }
}

@media only screen and (min-width: 501px) and (max-width: 990px) {
  #subscription {
    label {
      width: 60%;
    }

    input[type="submit"] {
      background-color: $primaryColor;
      border: solid $primaryColor;
      color: white;
      margin-left: -80px;
    }
  }
}

@media only screen and (min-width: 350px) and (max-width: 500px) {
  #subscription {
    label {
      width: 80%;
    }

    input[type="submit"] {
      background-color: $primaryColor;
      border: solid $primaryColor;
      color: white;
      margin-left: -40px;
    }
  }
}

@media only screen and (max-width: 349px) {
  #subscription {
    label {
      width: 100%;
    }

    input[type="submit"] {
      background-color: $primaryColor;
      border: solid $primaryColor;
      color: white;
      margin: auto;
    }
  }
}
</style>
