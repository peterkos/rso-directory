


// Vue!
import Vue from "vue"
import VueRouter from "vue-router"
import VueFire from "vuefire"
import VueFuse from "vue-fuse"


Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(VueFuse)


// Class imports
import MainApp from "./MainApp.vue" // Stores router-view, nesting everything below:
import Home from "./components/Home.vue"

// Setup routing
const routes = [
	{ path: "/", component: Home},
]

const router = new VueRouter({
	routes
})

// Main instance
new Vue({
	el: "#mainapp",
	components: { MainApp },
	router,
	render: h => h(MainApp)
// }).$mount('Main')
})






