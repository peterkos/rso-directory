<template>
	<div id="home">

		<!-- This is the first view shown to the user. -->
		<h1 class="title has-text-centered is-vcentered">Hello, World!</h1>

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
						<!-- <tr>
							<td>asdf</td>
							<td>Dubstech</td>
							<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</td>
						</tr> -->

						<tr v-for="rso in rsos">
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
				},
			}
		},
		methods: {

		}
	}
</script>
