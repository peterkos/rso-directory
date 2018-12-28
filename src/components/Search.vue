<template>

	<!-- Search bar -->
	<!-- @FIXME: tokenize, etc. params aren't parsed as bool, but string -->
	<section class="section">


		<div class="field has-addons">
			<div class="control is-expanded">
				<vue-fuse class="input searchBar is-large"
				placeholder="Dubstech"
				eventName="results"
				tokenize=true
				matchAllToken=true
				threshold=0.2
				:list="rsos"
				:keys="searchKeys"
				:defaultAll="true"
				:eventName="fuseResultsUpdated"
				@fuseResultsUpdated="showResults($event)"/>
			</div>
			<div class="control">
				<a class="button is-info is-large">asdf</a>
			</div>
		</div>



	</section>
</template>

<script>
	import VueFuse from 'vue-fuse'

	export default {
		name: 'Search',
		data() {
			return {
				// Prop from parent Home, containing RSO data to filter
				rsos: [],
				rso: {
					name: "",
					description: "",
					imageTag: "",
				},
				// Searching
				searchKeys: [{name: 'rso.name', weight: 0.5}], // @TODO: Tags for RSOs?
				searchResults: [],
				filterClass: ""
			}
		},
		mounted() {

			// Get data from Home component

		},
		methods: {
		}
	}
</script>
