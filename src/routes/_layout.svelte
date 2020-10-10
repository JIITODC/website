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

<script>
import Nav from '../components/Nav.svelte';

export let segment;

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
</script>

<Nav segment="{segment}" />

<main>
  <slot />
</main>
