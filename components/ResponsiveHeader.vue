<template>
  <header>
    <div class="topheader">
      <ul class="social">
        <li><a href=""><i class="ion-social-facebook" /></a></li>
        <li><a href=""><i class="ion-social-twitter" /></a></li>
        <li><a href=""><i class="ion-social-instagram-outline" /></a></li>
      </ul>
      <ul class="shopping">
        <li><a href="">Login</a></li>
        <li><a href="">Register</a></li>
        <li><a href=""><i class="ion-ios-cart" />Cart</a></li>
      </ul>
    </div>
    <!--end .topheader-->

    <div id="home">
      <a
        id="logo"
        href=""
      ><img
        src="https://s3-us-west-2.amazonaws.com/creatix.io/creatix-new-logo-v1.svg"
        alt="Logo"
      ></a>

      <div
        id="burger"
        href=""
      >
        <i class="ion-navicon" />
      </div>
    </div>
    <!--end #home-->

    <div class="menu">
      <ul class="menu-ul">
        <li><a href="">About</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Retailers</a></li>
        <li><a href="">Contact</a></li>

        <li class="mobile">
          <a href="">Login</a>
        </li>
        <li class="mobile">
          <a href="">Register</a>
        </li>
        <li class="mobile">
          <a href="">Cart</a>
        </li>

        <li class="social-mobile mobile">
          <a href=""><i class="ion-social-facebook" /></a>
        </li>
        <li class="social-mobile mobile">
          <a href=""><i class="ion-social-twitter" /></a>
        </li>
        <li class="social-mobile mobile">
          <a href=""><i class="ion-social-instagram-outline" /></a>
        </li>
      </ul>
    </div>
    <!--end .menu-->
  </header>
</template>

<style lang="sass" scoped>

@import url(https://fonts.googleapis.com/css?family=Lora:400,700)

$text: #212121
$light: #4A4A4A

$sml: "only screen and (max-width : 38rem)"

*
	box-sizing: border-box

body
	font:
		family: 'Lora', serif
		size: 16px
	line-height: 1.4
	padding: 1rem
	text-rendering: optimizeLegibility

h1, h2, h3
	text-align: center
	line-height: 1.1
h2
	font-size: 2.5rem

p
	margin: 1.5rem auto
	max-width: 40rem

a
	color: $light
	text-decoration: none !important
	transition: all .25s ease-in-out
	&:hover
		color: lighten($text, 30%)

header
	max-width: 60rem
	margin: 0 auto

	.topheader
		display: flex
		justify-content: space-between
		flex-flow: row nowrap

		@media #{$sml}
			.social, .shopping
				display: none

		ul
			li
				display: inline-block

		.social
			li
				margin: 0 1rem 0 0
				a
					i
						font-size: 1.5rem
		.shopping
			li
				margin: 0 0 0 1rem
				i
					margin: 0 .5rem 0 0

	#home
		display: flex
		justify-content: center
		margin: 1rem 0

		#logo
			img
				max-width: 6rem
				height: auto

		#burger
			display: none
			cursor: pointer
			align-self: center
			margin: 0
			padding: 0

		@media #{$sml}
			margin: 0 0 1rem
			justify-content: space-between

			#logo img
				max-width: 4rem

			#burger
				display: block
				i
					font-size: 3rem

	.menu
		display: flex
		flex-flow: row wrap
		justify-content: center
		margin-bottom: 2rem
		&:before, &:after
			content: ""
			background: hsla(0, 0%, 39%, 1)
			padding: .5px
			flex: 100%

		.menu-ul
			@media #{$sml}
				display: none
			li
				display: inline-block
				margin: 1.25rem 1rem
				text-align: center

			.mobile
				display: none
				@media #{$sml}
					display: inline-block

		@media #{$sml}
			ul
				width: 100%
				li, .mobile
					display: block
					margin: 0
					a
						display: block
						padding: 1rem
						font-size: 1.25rem
						&:hover
							background: $text
							color: white
				.social-mobile
					display: inline-block
					width: 32%
					a
						i
							font-size: 2rem

.red
	background: red

</style>
