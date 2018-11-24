

import Firebase from 'firebase'

// Initialization of Firebase
let config = {
	apiKey: "AIzaSyAjhS1-CXXS-7A2_fv1rtpfse68yrC4GYU",
	authDomain: "rso-directory-bb286.firebaseapp.com",
	databaseURL: "https://rso-directory-bb286.firebaseio.com",
	projectId: "rso-directory-bb286",
	storageBucket: "rso-directory-bb286.appspot.com",
	messagingSenderId: "949346070033"
}

let app = Firebase.initializeApp(config)
const db = app.database()
export default db
