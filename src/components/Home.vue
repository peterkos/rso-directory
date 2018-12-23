<template>
	<div id="home">

		<!-- Search -->
		<Search></Search>

		<!-- Let's show a table of RSOs -->
		<div class="columns is-centered">
			<div class="column is-four-fifths">

				<table class="table is-hoverable is-fullwidth is-striped">
					<thead>
						<th class="has-text-centered">Logo</th>
						<th class="has-text-centered">Name</th>
						<th class="has-text-centered">Description</th>
					</thead>
					<tbody>
						<tr v-for="rso in rsos" :key="rso.name">
							<td class="">
								<!-- @FIXME: Image aspect ratioz -->
								<img :src="imageURLs[rso.imageTag]" class="image is-96x96"/>
							</td>
							<td><p class="is-size-5">{{ rso.name }}</p></td>
							<td>{{ rso.description }}</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	</div>
</template>

<script>
	import Firebase from 'firebase'
	import VueFuse from 'vue-fuse'
	import db from '../db.js'

	import Search from "./Search.vue"

	export default {
		name: 'Home',
		firebase: function() {
			return {
				rsos: db.ref('/')
				// @TODO: See manual bunding in vuefire readme -- may allow for nested properties
			}
		},
		components: {
			Search
		},
		data() {
			return {
				rso: {
					name: "",
					description: "",
					imageTag: "",
				},
				imageURLs: []
			}
		},
		mounted() {

			// Sets proper this
			let current = this

			var storageRef = Firebase.storage().ref() // Reference imaages in storaage
			var imageValues = [] // Image urls themselves, @TODO change name

			// Iterate through each database value
			var query = db.ref("/").orderByChild("imageTag")

			query.once("value").then(function(snapshot) {
				snapshot.forEach(function(childSnapshot) {

					let imageTag = childSnapshot.val().imageTag
					let imageRef = storageRef.child(imageTag.toString() + ".jpg")
					imageRef.getDownloadURL().then(function(url) {

						// Insert at position of imageTag
						imageValues.splice(imageTag, 0, url)

					}).catch(function(error) {

						// @TODO: Add 404 image or something
						console.log("[ERROR] " + error.code + " | " + error.message)
						imageValues.splice(imageTag, 0, "oops")
					})


				})
			}).catch(function(error) {
				console.log("First error: " + error)
			}).then(function() {
				// Write back to main Vue instance for Proper Image Usage
				// @TODO: Clear up loading animation here
				// @TODO: Add a loading animation in the first place
				current.imageURLs = imageValues
			}).catch(function(error) {
				console.log("Second error: " + error)
			})

		},
		methods: {
		}
	}
</script>
