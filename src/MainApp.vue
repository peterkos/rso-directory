<template>
	<div id="main">

		<!-- I'm gonna need a hero, hero -->
		<section class="hero is-medium is-info">
			<div class="hero-body">

				<!-- Actual heaader content -->
				<div class="columns is-centered has-more-padding">
					<div class="column is-half">

						<h1 class="title is-1">RSO Directory</h1>
						<h1 class="subtitle is-3">Find your next passion on campus.</h1>
						<br>

						<!-- Big CTA to browse -->
						<div>
							<a class="button is-large is-success">Browse RSOs</a>
							<!-- <a class="button is-large is-white is-outlined">Learn more</a> -->
							<p class="text"><b>Or, <u>learn more.</u></b></p>
						</div>
					</div>
					<div class="column is-half">
						<!-- @TODO: Put some fun pictures here -->
						<div class="box" style="height: 300px">insert happy people here</div>
					</div>
				</div>


			</div>
		</section>

		<!-- Informaation section -->
		<section class="section is-medium">

			<div class="columns is-centered has-more-padding">

				<div class="column">
					<div class="box">
						<h1 class="title size-6 has-text-centered">Make a difference</h1>
						<p class="text is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h1 class="title size-6 has-text-centered">Have some fun</h1>
						<p class="text is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h1 class="title size-6 has-text-centered">Meet someone new</h1>
						<p class="text is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
					</div>
				</div>

			</div>

		</section>

		<!-- All subviews go inside here! -->
		<section class="section">
			<div class="container">
				<h1 class="title is-1">Browse below.</h1>
				<router-view></router-view>
			</div>
		</section>
	</div>

</template>

<script>
	export default {
		name: "MainApp",
		data() {
			return {
			}
		},
		methods: {
		}
	}
</script>
