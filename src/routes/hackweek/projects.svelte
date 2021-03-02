<style>
.main-title {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
}

.divider {
  height: 3px;
  background-color: orange;
  width: 255px;
}

h2 {
  font-size: 30px;
}

.gitlink,
.gitlink:visited {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  color: orange;
}

.gitlink:hover {
  color: #fff;
}

hr {
  border: 1px solid orange;
}

@media (max-width: 768px) {
  .divider {
    width: 220px;
  }

  p {
    font-size: 18px;
  }

  .gitlink {
    font-size: 16px;
  }
}
</style>

<script context="module">
export async function preload() {
  const res = await this.fetch('Data/hwProjects.json');
  const projects = await res.json();
  return { projects };
}
</script>

<script>
export let projects;
</script>

<svelte:head>
  <title>Hack Week | Projects</title>
</svelte:head>
<h1 class="main-title">PROJECTS</h1>
<div class="divider"></div>

<section class="project-list">
  {#each projects as project}
    <h2>{project.name}</h2>
    <p>Mentor(s) : {project.mentor}</p>
    <p>{project.description}</p>
    <a class="gitlink" href="{project.github}">Github link</a>
    <hr />
  {/each}
</section>
