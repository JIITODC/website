<style>
.main-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ff8c00;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 3rem;
}

.previous-team {
  margin-top: 6rem;
}

.year-container {
  display: flex;
  justify-content: space-around;
}

.year-container a {
  text-decoration: none;
  font-size: 2rem;
}

@media (max-width: 700px) {
  .main-title {
    font-size: 2.5rem;
  }
  .card-list {
    grid-template-columns: 1fr;
    gap: 2rem 1rem;
  }

  .year-container {
    flex-direction: column;
    align-items: center;
  }

  .year-container a {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>

<script context="module">
export async function preload() {
  const res = await this.fetch('Data/currentTeam.json');
  const datas = await res.json();
  return { datas };
}
</script>

<script>
import TeamComponent from '../components/TeamComponent.svelte';
export let datas;
</script>

<svelte:head>
  <title>Team</title>
</svelte:head>
<div class="main-title">OUR TEAM</div>

<section class="card-list">
  {#each datas as data (data.id)}
    <TeamComponent
      imgSrc="{data.imgSrc}"
      name="{data.name}"
      role="{data.role}"
      gitLink="{data.gitlink}"
    />
  {/each}
</section>

<div class="previous-team">
  <div class="year-container">
    <a sapper:prefetch href="/team-2019"> &larr; 2019-2020</a>
  </div>
</div>
