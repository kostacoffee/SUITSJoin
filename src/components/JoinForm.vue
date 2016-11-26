<template lang="pug">
md-card.suits-card

	md-card-header.header
		div.md-title Join SUITS!
		img.suits-image(src="assets/logo.svg", width=60, height=50)

	form#join(v-on:submit="submitForm")

		div.name-container
			md-input-container.name-field
				label First Name
				md-input(v-model="firstName", required)
			md-input-container.name-field
				label Last Name
				md-input(v-model="lastName", required)

		div.gender-container
			md-radio(md-value="male", v-model="gender") Male
			md-radio(md-value="female", v-model="gender") Female
			md-radio(md-value="other", v-model="gender") Other

		md-input-container
			label Email
			md-input(type="email", v-model="email", required)

		div.number-container
			md-input-container
				label Access Number
				md-input(type="number", v-model="access")
			md-input-container
				label Student ID
				md-input(type="number", v-model="sid")

		md-checkbox.newsletter(v-model="newsletter") I want to receive weekly updates from SUITS.

		md-card-actions
			md-button.submit-button.md-raised.md-primary(type="submit") Join Suits
</template>

<script>
import db from '../db';
import md5 from '../md5';

export default {
	name: 'join-form',
	methods: {
		submitForm: async function(e) {
			e.preventDefault();
			let data = {
				firstName: this.firstName,
				lastName: this.lastName,
				gender: this.gender,
				email: this.email.trim().toLowerCase(),
				access: this.access,
				sid: this.sid,
				newsletter: this.newsletter
			}
			let memberid = md5(this.email);
			let member =  db.ref('members/'+memberid);
			await member.set(data)
			this.$emit('submitted');
		}
	},
	data () {
		return {
			firstName: "",
			lastName: "",
			gender: "other",
			email: "",
			access: "",
			sid: "",
			newsletter: false,
		}
	}
}
</script>

<style>
.suits-card {
	padding: 25px;
	margin-top: -125px;
}
.gender-container {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.name-container {
	display: flex;
	justify-content: space-between;
}
.name-field {
	width: 45%;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.loader {
	float: left
}
.suits-image {
	width: 60px;
	height: 50px;
}
.submit-button {
	float: right;
}
</style>
