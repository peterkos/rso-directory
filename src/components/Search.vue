<template>

	<!-- Search bar -->
	<!-- @FIXME: tokenize, etc. params aren't parsed as bool, but string -->
	<vue-fuse class="input searchBar"
	placeholder="Dubstech, LUX, UniteUW..."
	eventName="results"
	tokenize=true
	matchAllToken=true
	threshold=0.2
	:list="rsos"
	:keys="searchKeys"
	:defaultAll="true"
	:eventName="fuseResultsUpdated"
	@fuseResultsUpdated="showResults($event)"/>

</template>

<script>
	import VueFuse from 'vue-fuse'

	export default {
		name: 'Search',
		data() {
			return {
				imageURLs: []
			}
		},
		mounted() {

			// Get data from Home component

		},
		methods: {
		}
	}
</script>
