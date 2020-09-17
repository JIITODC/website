<script>
  export let segment;
</script>

<style>
  nav {
    font-weight: 300;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .jodc-mascot-img {
    height: 100px;
    width: auto;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  a {
    text-decoration: none;
    padding: .5em 0.5em;
    display: block;
    text-transform: uppercase;
    font-size: 2rem;
    transition: all .5s;
  }

  a:hover {
    background-color: white;
    color: black;
  }
</style>

<nav>
  <img src="jodcMascotWB.svg" alt="JODC Mascot" class="jodc-mascot-img">
  <ul class="nav-links">
    <li><a href=".">home</a></li>
    <li><a href="events">events</a></li>
    <li><a href="team">team</a></li>
  </ul>
</nav>