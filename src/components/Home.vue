<template>
	<div id="home">

		<!-- This is the first view shown to the user. -->
		<h1 class="title has-text-centered is-vcentered">Hello, World!</h1>

		<a class="button is-info" @click="test()">Press me</a>

		<!-- Let's show a table of RSOs -->
		<div class="columns is-centered">
			<div class="column is-half">
				<table class="table is-hoverable is-fullwidth">
					<thead>
						<th class="has-text-centered">Logo</th>
						<th class="has-text-centered">Name</th>
						<th class="has-text-centered">Description</th>
					</thead>
					<tbody>
						<tr v-for="rso in rsos">
							<td> <img :src="imageURL" /></td>
							<td>{{ rso.logo }}</td>
							<td>{{ rso.name }}</td>
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
					imageTag: ""
				},
				imageURL: "",
			}
		},
		methods: {
			test() {


				// Sets propre this
				let current = this

				// @TODO: Update rso.image for each RSO given its tag
				// Setting up FB Storage
				var storageRef = Firebase.storage().ref()
				var firstImageRef = storageRef.child("0.png")

				// Actually grab it
				firstImageRef.getDownloadURL().then(function(url) {
					console.log(url)
					current.imageURL = url
					console.log(current.imageURL)
				})

			},
		}
	}
</script>
