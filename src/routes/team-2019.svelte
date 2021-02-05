<style>
.main-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1rem;
}

.sub-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ff8c00;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7rem 3rem;
}

.other-team {
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
  const res = await this.fetch('Data/2019Team.json');
  const datas = await res.json();
  return { datas };
}
</script>

<script>
import TeamComponent from '../components/TeamComponent.svelte';
export let datas;
</script>

<svelte:head>
  <title>Team - 2019</title>
</svelte:head>
<div class="main-title">OUR TEAM</div>
<div class="sub-title">2019-2020</div>
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

<div class="other-team">
  <div class="year-container">
    <a sapper:prefetch href="/team-2018"> &larr; 2018-2019 </a>
    <a sapper:prefetch href="/team"> 2020-2021 &rarr; </a>
  </div>
</div>
