<script>
	import { onMount } from 'svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;

	import 'lazysizes';
  	import 'lazysizes/plugins/parent-fit/ls.parent-fit'

	import AOS from 'aos';
  	import 'aos/dist/aos.css';
	import 'aos/dist/aos.js';
	  
	onMount(() => {
 	   AOS.init();
  	});
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: black;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
