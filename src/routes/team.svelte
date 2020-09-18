<svelte:head>
  <title>Team</title>
</svelte:head>

<script></script>


<div class="main-title">TEAMS</div>
<h2 class="team-type">Core Members</h2>
<div class="team-container">
  <div class="team-member">
    <div class="left">
      <img src="Poster.png" alt="event poster">
    </div>
    <div class="right">
      <h2 class="name">HACKTOBERFEST</h2>
      <p class="about">WORLD’S GREATEST DETECTIVE. HE SOLVES CRIME AND HATES THE WORLD. GO TO HIS REPO TO SOLVE MURDER
        MYSTERIES.</p>
      <div class="socails">
        <a href="#">GITHUB</a>
        <a href="#">FACEBOOK</a>
        <a href="#">TWITTER</a>
      </div>
    </div>
  </div>
</div>


<style>
  .main-title {
    font-size: 3rem;
    font-weight: bold;
  }

  .team-container {
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid white;
  }

  .team-member {
    display: flex;
  }

  .right {
    padding: 0 0 0 2rem;
  }

  .name {
    font-size: 3rem;
    font-weight: bold;
  }
</style>