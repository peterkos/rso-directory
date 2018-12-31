<template>
	<div id="main">

		<!-- I'm gonna need a hero, hero -->
		<section class="hero is-medium hasHeroColor">
			<div class="hero-body">

				<!-- Actual heaader content -->
				<div class="columns is-centered has-more-padding">
					<div class="column is-half">

						<h1 class="title is-1 has-text-white">RSO Directory</h1>
						<h1 class="subtitle is-3 has-text-grey"><i>Find your next passion on campus.</i></h1>
						<br>

						<!-- Big CTA to browse -->
						<div>
							<a class="button is-large hasBrowseColor">Browse RSOs</a>
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
		<section class="section is-medium hasSectionColor">

			<div class="columns is-centered has-more-padding">

				<div class="column">
					<div class="outlineBox">
						<h1 class="title size-6 has-text-centered">Make a difference</h1>
						<figure class="image">
							<img src="https://placeimg.com/640/480/nature" />
						</figure>
						<p class="text is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
					</div>
				</div>
				<div class="column">
					<div class="outlineBox">
						<h1 class="title size-6 has-text-centered">Have some fun</h1>
						<figure class="image">
							<img src="https://placeimg.com/640/480/nature" />
						</figure>
						<p class="text is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
					</div>
				</div>
				<div class="column">
					<div class="outlineBox">
						<h1 class="title size-6 has-text-centered">Meet someone new</h1>
						<figure class="image">
							<img src="https://placeimg.com/640/480/nature" />
						</figure>
						<p class="text is-size-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
					</div>
				</div>

			</div>

		</section>

		<!-- Select RSO category -->
		<section class="section rsoCategories is-medium hasCategoryColor">


			<h1 class="title has-text-centered has-text-white is-2 is-paddingless">Let's find your place on campus.</h1>

			<div class="container">
				<br>
				<h1 class="title has-text-white">What kind of RSO are you looking for?</h1>

				<!-- Row 1 -->
				<div class="tile is-ancestor">

					<!-- Column 1 -->
					<div class="tile is-parent is-vertical">
						<div class="tile is-child notification is-info">
							<p class="subtitle">Academic</p>
						</div>

					</div>

					<!-- Column 2 -->
					<div class="tile is-vertical">
						<div class="tile is-parent is-vertical ">
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Associated Students University Of Washington (Asuw)</p>
							</div>
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Business</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child is-vertical notification is-white">
								<p class="subtitle">Cultural / International</p>
								<p class="subtitle">Engineering</p>
							</div>
						</div>
					</div>

					<!-- Column 3 -->
					<div class="tile is-vertical">
						<div class="tile is-parent is-vertical ">
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Environmental</p>
							</div>
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Fraternities & Sororities - Ifc / Ph</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child is-vertical notification is-white">
								<p class="subtitle">Gaming / Esports</p>
							</div>
						</div>
					</div>

					<!-- Column 4 -->
					<div class="tile is-vertical">
						<div class="tile is-parent is-vertical ">
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Graduate / Professional</p>
							</div>
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Health Sciences</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child is-vertical notification is-white">
								<p class="subtitle">Honorary</p>
							</div>
						</div>
					</div>

				</div>

				<div class="tile is-ancestor">

					<!-- Column 1 -->
					<div class="tile is-parent is-vertical">
						<div class="tile is-child notification is-info">
							<p class="subtitle">Law</p>
						</div>
						<div class="tile is-child notification is-info">
							<p class="subtitle">Sports</p>
						</div>
					</div>

					<!-- Column 2 -->
					<div class="tile is-vertical">
						<div class="tile is-parent is-vertical ">
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Living Groups</p>
							</div>
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Medical / Dental / Nursing / Pharmacy</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child is-vertical notification is-white">
								<p class="subtitle">Na</p>
							</div>
						</div>
					</div>

					<!-- Column 3 -->
					<div class="tile is-vertical">
						<div class="tile is-parent is-vertical ">
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Performing</p>
							</div>
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Political / Social Action</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child is-vertical notification is-white">
								<p class="subtitle">Recreation</p>
							</div>
						</div>
					</div>

					<!-- Column 4 -->
					<div class="tile is-vertical">
						<div class="tile is-parent is-vertical ">
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Religious / Spiritual</p>
							</div>
							<div class="tile is-child notification is-dark">
								<p class="subtitle">Sciences</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child is-vertical notification is-white">
								<p class="subtitle">Special Interest</p>
							</div>
						</div>
					</div>

				</div>

			</div>
		</section>

		<!-- All subviews go inside here! -->
		<section class="section">
			<!-- <div class="container"> -->
				<h1 class="title is-1">Browse below.</h1>
				<router-view></router-view>
				<!-- </div> -->
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
