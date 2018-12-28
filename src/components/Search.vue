<template>

	<!-- Search bar -->
	<!-- @FIXME: tokenize, etc. params aren't parsed as bool, but string -->
	<section class="section">


		<div class="field has-addons">
			<div class="control is-expanded">
 				<vue-fuse class="input searchBar is-large"
				placeholder="Dubstech, HuskyRobotics...."
				:tokenize=true
				:list="rsos"
				:threshold="0.3"
				:keys="searchKeys"
				:default-all="false"
				event-name="fuse-results-updated"
				@fuse-results-updated="showResults($event)"/>
			</div>
			<div class="control">
				<a class="button is-info is-large">asdf</a>
			</div>
		</div>


		<!-- <p>{{searchResults}}</p> -->
		<ul v-for="result in searchResults">
			<li>{{result.name}}</li>
		</ul>



	</section>
</template>

<script>
	import VueFuse from 'vue-fuse'

	export default {
		name: 'search',
		props: ['rsos'],
		data() {
			return {
				// Prop from parent Home, containing RSO data to filter
				rso: {
					name: "",
					description: "",
					imageTag: "",
				},
				// Searching
				searchKeys: [{name: 'name'}], // @TODO: Tags for RSOs?
				searchResults: [],
			}
		},
		methods: {
			showResults(results) {
				this.searchResults = results
				console.log("SHOWING")
			}
		}
	}
</script>
