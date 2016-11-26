<template lang="pug">
div#app(v-md-theme="'default'")
	div.container
		transition(name="slide-form", appear, mode="out-in")
			join-form.form(v-if="show", v-on:submitted='hideForm')
			div.thank-msg(v-if="!show")
				h2.md-display-1 Thank you for joining SUITS
				h3.md-headline We hope you enjoy our events.
</template>

<script>
import 'babel-polyfill';
import JoinForm from './components/JoinForm.vue';

export default {
	name: 'app',
	components: {
		'join-form': JoinForm
	},
	data () {
		return {
			show: true
		}
	},
	methods: {
		hideForm () {
			this.show = false;
		}
	}
}
</script>

<style>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	height: 100%;
}

body {
	background-color: #f3f9fe;
}

.slide-form-enter-active, .slide-form-leave-active {
	transition: all .5s ease;
}

.slide-form-enter, .slide-form-leave-active {
	transform: translateY(-10%);
	opacity: 0;
}

.thank-msg {
	text-align: center;
}

.form {
	margin: 25px;
}

</style>
