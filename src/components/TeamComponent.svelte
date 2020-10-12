<style>
.card {
  margin-top: 4rem;
  text-align: center;
}

.card-header {
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 900;
}

.role p {
  color: #6c715d;
}

img {
  width: 200px;
  border-radius: 50%;
  border: 5px solid #ffa500;
}

a {
  color: #ccc;
}

a:hover {
  color: white;
}

@media (max-width: 700px) {
  .card-header {
    font-size: 1.2rem;
  }
}
</style>

<script>
import { fly } from 'svelte/transition';
export let imgSrc;
export let name;
export let gitLink;
export let role;
</script>

<div class="card" in:fly="{{ y: 50, duration: 700 }}">
  <div class="card-author">
    <img
      alt="author-avatar"
      src="Poster.png"
      data-src="{imgSrc}"
      class="lazyload"
    />
  </div>
  <header class="card-header">
    <h2>{name}</h2>
  </header>
  <div class="role">
    <p>{role}</p>
  </div>
  <div class="link"><a href="{gitLink}">Github</a></div>
</div>
