<template>
	<div id="main">

		<!-- Navigation links -->
		<!-- <section class="hero mainNavHero is-small">
			<div class="hero-body">

			</div>
		</section> -->

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
