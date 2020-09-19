<svelte:head>
  <title>Team</title>
</svelte:head>

<script>
  import TeamComponent from '../components/TeamComponent.svelte';
</script>


<div class="main-title">TEAMS</div>
<h2 class="team-type">Core Members</h2>
<div class="team-container">
  <TeamComponent imgSrc="Poster.png" name="Aayush Kumar Sahu"
    about="Hi there, i am an open source enthusiast and working on web development."
    gitLink="https://www.github.com/aayushmau5" facebookLink="https://www.facebook.com"
    twitterLink="https://twitter.com/aayushmau5" />
  <TeamComponent imgSrc="Poster.png" name="Aachman Mittal"
    about="Hey, i am an open source enthusiast and love low level system stuff."
    gitLink="https://www.github.com/aarkimos" facebookLink="https://www.facebook.com"
    twitterLink="https://twitter.com/aarkimos" />
</div>


<style>
  .main-title {
    font-size: 3rem;
    font-weight: bold;
  }

  .team-type {
    font-weight: bold;
  }

  .team-container {
    font-family: 'Red Hat Display', sans-serif;
  }

  @media (max-width:700px) {
    .main-title {
      font-size: 2rem;
    }
  }
</style>