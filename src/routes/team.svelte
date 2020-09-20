<svelte:head>
  <title>Team</title>
</svelte:head>

<script>
  import TeamComponent from '../components/TeamComponent.svelte';
</script>

<div class="main-title">TEAMS</div>
<h2 class="team-type">Core Members</h2>

<section class="card-list">
  <TeamComponent portLink="#" imgSrc="#" name="Aayush Sahu" about="Hey there,i'm currently working on web development."
    gitLink="https://www.github.com/aayushmau5" twitterLink="https://www.twitter.com/aayushmau5" />
  <TeamComponent portLink="#" imgSrc="#" name="Aayush Sahu" about="Hey there,i'm currently working on web development."
    gitLink="https://www.github.com/aayushmau5" twitterLink="https://www.twitter.com/aayushmau5" />
  <TeamComponent portLink="#" imgSrc="#" name="Aayush Sahu" about="Hey there,i'm currently working on web development."
    gitLink="https://www.github.com/aayushmau5" twitterLink="https://www.twitter.com/aayushmau5" />
  <TeamComponent portLink="#" imgSrc="#" name="Aayush Sahu" about="Hey there,i'm currently working on web development."
    gitLink="https://www.github.com/aayushmau5" twitterLink="https://www.twitter.com/aayushmau5" />
  <TeamComponent portLink="#" imgSrc="#" name="Aayush Sahu" about="Hey there,i'm currently working on web development."
    gitLink="https://www.github.com/aayushmau5" twitterLink="https://www.twitter.com/aayushmau5" />
  <TeamComponent portLink="#" imgSrc="#" name="Aayush Sahu" about="Hey there,i'm currently working on web development."
    gitLink="https://www.github.com/aayushmau5" twitterLink="https://www.twitter.com/aayushmau5" />
</section>

<style>
  .main-title {
    font-size: 3rem;
    font-weight: bold;
  }

  .card-list {
    display: flex;
    padding: 3rem;
    overflow-x: scroll;
  }

  .card-list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .card-list::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, .25), inset -2px -2px 2px rgba(0, 0, 0, .25);
  }

  .card-list::-webkit-scrollbar-track {
    background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
  }
</style>