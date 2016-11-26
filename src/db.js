import firebase from 'firebase'

const app = firebase.initializeApp({
	databaseURL: 'https://suits-data.firebaseio.com'
})
const db = app.database();
export default db;
