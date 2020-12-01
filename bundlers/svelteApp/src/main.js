import App from './App.svelte';

const main = new App({
	target: document.body,
	props: {
		name: 'ya'
	}
});

export default [header,main];