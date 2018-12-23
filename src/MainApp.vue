<template>
	<div id="main">

		<!-- I'm gonna need a hero, hero -->
		<section class="hero is-medium is-info">
			<div class="hero-body">

				<!-- Outer wrapper for content -->
				<div class="columns is-centered">
					<div class="column is-two-thirds">

						<!-- Actual heaader content -->
						<div class="columns">
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
				</div>


			</div>
		</section>

		<!-- Informaation section -->
		<section class="section">

		</section>

		<!-- All subviews go inside here! -->
		<section class="section">
			<router-view></router-view>
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
