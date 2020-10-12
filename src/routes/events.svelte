<style>
.main-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ff8c00;
}

.sub-title {
  font-size: 2rem;
  margin-top: 4rem;
}

.hide {
  display: none;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
}
</style>

<script context="module">
export async function preload() {
  const res = await this.fetch('Data/events.json');
  const datas = await res.json();
  return { datas };
}
</script>

<script>
import EventComponent from '../components/EventComponent.svelte';

export let datas;
let hide = true;

const compareDate = (prevTime) => {
  const currentDate = new Date();
  const prevDate = new Date(prevTime);
  if (prevDate < currentDate) {
    return false;
  } else {
    hide = false;
    return true;
  }
};
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>
<div class="main-title">EVENTS</div>
<div class="sub-title" class:hide>Upcoming Events</div>
{#each datas as data (data.id)}
  {#if compareDate(data.formatDate)}
    <EventComponent
      title="{data.title}"
      about="{data.about}"
      time="{data.time}"
      location="{data.location}"
      imagelink="{data.imagelink}"
    />
  {/if}
{/each}
<div class="sub-title">Past Events</div>
{#each datas as data (data.id)}
  {#if !compareDate(data.formatDate)}
    <EventComponent
      title="{data.title}"
      about="{data.about}"
      time="{data.time}"
      location="{data.location}"
      imagelink="{data.imagelink}"
    />
  {/if}
{/each}
