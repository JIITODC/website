<script>
  let active = false;

  const toggleLinks = () => {
    active = !active;
  }
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
    max-height: 90px;
    width: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    list-style: none;
  }

  li:not(:last-child) {
    margin-right: 50px;
  }

  a {
    text-decoration: none;
    padding: .1em 0.25em;
    display: block;
    text-transform: uppercase;
    font-size: 1.6rem;
    transition: all .5s;
    position: relative;
    border-bottom: 2px solid #fff;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 0;
    opacity: 0;
    transition: all .6s;
    background-color: #fff;
  }

  a:hover::after {
    height: 100%;
    opacity: 1;
  }

  a:hover {
    color: #000;
  }

  .toggle-button {
    font-size: 2rem;
    position: absolute;
    display: none;
    right: 28px;
  }

  @media (max-width:700px) {
    .toggle-button {
      display: block;
    }

    .nav-links {
      display: none;
      margin-top: 1em;
      width: 100%;
      text-align: center;
    }

    .nav-links.active {
      display: block;
    }

    .jodc-mascot-img {
      max-height: 70px;

    }

    nav {
      flex-direction: column;
      align-items: flex-start;
    }

    li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 1em;
    }
  }
</style>

<nav>
  <img src="jodcMascotWB.svg" alt="JODC Mascot" class="jodc-mascot-img">
  <a href="#" class="toggle-button" on:click={toggleLinks}>&#9776;</a>
  {#if active}
    <ul class="nav-links active">
      <li><a href=".">home</a></li>
      <li><a href="events">events</a></li>
      <li><a href="team">team</a></li>
    </ul>
  {:else}
    <ul class="nav-links">
      <li><a href=".">home</a></li>
      <li><a href="events">events</a></li>
      <li><a href="team">team</a></li>
    </ul>
  {/if}
</nav>