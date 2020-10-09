<style>
main {
  position: relative;
  max-width: 56em;
  background-color: black;
  padding: 2em;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 90vh;
}
</style>

<script>
import { onMount } from 'svelte';
import Nav from '../components/Nav.svelte';

export let segment;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

onMount(() => {
  AOS.init();
});
</script>

<Nav segment="{segment}" />

<main>
  <slot />
</main>
