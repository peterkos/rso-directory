<template>
	<div id="home">

		<!-- This is the first view shown to the user. -->
		<h1 class="title has-text-centered is-vcentered">Hello, World!</h1>


		<!-- Let's show a table of RSOs -->
		<div class="columns is-centered">
			<div class="column is-half">
				<table class="table is-hoverable is-fullwidth is-striped">
					<thead>
						<th class="has-text-centered">Logo</th>
						<th class="has-text-centered">Name</th>
						<th class="has-text-centered">Description</th>
					</thead>
					<tbody>
						<tr v-for="rso in rsos" :key="rso.imageTag">
							<td class="">
								<!-- @FIXME: Image aspect ratioz -->
								{{ getImage(rso) }}
								<!-- <img :src="imageURLs[rso.imageTag]" class="image is-96x96"/> -->
								<p>{{imageURLs[rso.imageTag]}}</p>
							</td>
							<td>{{ rso.name }}</td>
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


	export default {
		name: 'Home',
		firebase: function() {
			return {
				rsos: db.ref('/')
				// @TODO: See manual bunding in vuefire readme -- may allow for nested properties
			}
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
		methods: {
			getImage(currentRSO) {

				// Sets proper this
				let current = this

				// @TODO: Update rso.image for each RSO given its tag
				// Setting up FB Storage
				var storageRef = Firebase.storage().ref()
				var firstImageRef = storageRef.child(currentRSO.imageTag.toString() + ".png")


				// if (firstImageRef == null) {
				// 	console.log("not null")
				// 	return
				// } else {
				// 	console.log("not null")
				// }
				// console.log(currentRSO.imageTag)

				// @FIXME Fixme, please.
				// Don't grab URL if url already exists
				// Precondition: imageTag is a index corresponding to the RSO
				if (this.imageURLs[currentRSO.imageTag]) {
					return
				}

				// Actually grab it
				firstImageRef.getDownloadURL().then(function(url) {
					current.imageURLs.push(url)
					console.log(url)
				}).catch(function(error) {
					// console.log(error)
				})

			},
		}
	}
</script>
