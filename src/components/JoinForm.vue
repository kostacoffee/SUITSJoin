<template lang="pug">
md-card.suits-card

	md-card-header.header
		div.md-title Join SUITS
		img.suits-image(src="../assets/logo.svg", width=60, height=50)

	form#join(@submit.prevent="submitForm")
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
			md-input-container.num-field
				label Access Number
				md-input(type="number", v-model="access")
			md-input-container.num-field
				label Student ID
				md-input(type="number", v-model="sid")

		div.extra-details
			md-checkbox(v-model="isPenultimate") I am in my penultimate (second last) year of university.
			md-checkbox(v-model="doingIT") I am doing an IT/CompSci related degree.
			md-switch(v-model="newsletter") I want to receive weekly updates from SUITS.

		md-card-actions
			md-button.submit-button.md-raised.md-primary(type="submit") Join Suits
</template>

<script>
export default {
	name: 'join-form',
	methods: {
		submitForm: async function(e) {
			let dataOrUndefined = (data) => {
				return data ? data : undefined;
			}

			let data = {
				firstName: dataOrUndefined(this.firstName),
				lastName: dataOrUndefined(this.lastName),
				gender: dataOrUndefined(this.gender),
				email: dataOrUndefined(this.email).trim().toLowerCase(),
				access: parseInt(dataOrUndefined(this.access)),
				sid: parseInt(dataOrUndefined(this.sid)),
				newsletter: dataOrUndefined(this.newsletter),
				isPenultimate: dataOrUndefined(this.isPenultimate),
				doingIT: dataOrUndefined(this.doingIT),
				registered: true
			}

			// create and send an async post
			let req = new XMLHttpRequest();
			req.open('POST', 'https://api.suits.org.au/members');
			req.setRequestHeader('Content-Type', 'application/json');
			let comp = this;
			req.onload = function () {
				if (req.status == 200)
					comp.$emit('submitted');
			}
			req.send(JSON.stringify(data));
			
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
			isPenultimate: false,
			doingIT: false,
			newsletter: true
		}
	}
}
</script>

<style lang="sass">

.suits-card
	padding: 25px
	max-width: 460px

.gender-container
	display: flex
	justify-content: space-around
	align-items: center

.name-container, .number-container
	display: flex
	justify-content: space-between

.name-field, .num-field
	width: 40%

.header
	display: flex
	justify-content: space-between
	align-items: center

.loader
	float: left

.suits-image
	width: 60px
	height: 50px
.submit-button
	float: right

</style>
