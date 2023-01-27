

<style>

	#home {
		position: relative;
		overflow: hidden;
		background-color: rgb(179, 226, 248);
	}

	#home-big-svg {
		position: absolute;
		width: 500px;
		top: -250px;
		filter: drop-shadow(3px 3px 2px rgb(0 0 0 / 0.2));
	}

	#home-small-svg {
		position: absolute;
		width: 300px;
		right: -150px;
		bottom: -150px;
		filter: drop-shadow(-5px -2px 6px rgb(0 0 0 / 0.2));
	}

	#home-title-1, #home-subtitle-1 {font-weight: 400;}

	@media screen and (max-width: 576px) {
		#home-big-svg {
			top: -30%;
			left: -5%;
			transform: translateY(-20%);
			width: 80%;
			max-width: 270px;
		}

		#home-small-svg {
			bottom: -40%;
			right: -25%;
			transform: translateY(-15%);
			width: 60%;
			max-width: 200px;
		}
	}

</style>

<template>
	<div id="home" class="d-block w-100 h-auto">
		
		<!-- svg1 -->
		<svg id="home-big-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<path fill="#3F2AFA" d="M55.6,-18.3C63.3,5.6,54.8,34.6,33.1,51.9C11.4,69.1,-23.4,74.6,-45.1,59.4C-66.8,44.3,-75.5,8.5,-65.8,-18.2C-56.1,-44.8,-28,-62.4,-2,-61.7C24,-61,47.9,-42.2,55.6,-18.3Z" transform="translate(100 100)" />
		</svg>

		<!-- svg2 -->
		<svg id="home-small-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<path fill="#3F2AFA" d="M55.6,-18.3C63.3,5.6,54.8,34.6,33.1,51.9C11.4,69.1,-23.4,74.6,-45.1,59.4C-66.8,44.3,-75.5,8.5,-65.8,-18.2C-56.1,-44.8,-28,-62.4,-2,-61.7C24,-61,47.9,-42.2,55.6,-18.3Z" transform="translate(100 100)" />
		</svg>

		<!-- text -->
		<div class="container position-relative mx-auto my-5 w-auto">
			<div class="row">
				<div class="col-12 col-md-8 offset-md-2">
					<div class="d-flex flex-column justify-content-center align-items-center">
						<div class="d-block my-5 w-auto">
							<span id="home-title-1" class="display-5 lead text-light p-0">Philipp Andrew Redondo</span>
							<p id="home-subtitle-1" class="lead text-light mb-2">
								|Computer Programmer
							</p>
							<a class="btn btn-success rounded-pill" href="#about">
								Read more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>	
</template>

<script>
	export default {
		name: "home"
	}	
</script>