<script>
  let active = false;
  let addActive = "";

  const toggleLinks = () => {
    active = !active;
    if (active) addActive = "active";
    else addActive = "";
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

  a,
  .toggle-button {
    text-decoration: none;
    padding: .1em 0.25em;
    display: block;
    text-transform: uppercase;
    font-size: 1.6rem;
    transition: all .5s;
    position: relative;
    border-bottom: 2px solid #fff;
  }

  a::after,
  .toggle-button::after {
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

  a:hover::after,
  .toggle-button:hover::after {
    height: 100%;
    opacity: 1;
  }

  a:hover,
  .toggle-button:hover {
    color: #000;
  }

  .toggle-button {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #fff;
    color: white;
    font-size: 2rem;
    position: absolute;
    display: none;
    right: 28px;
    cursor: pointer;
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
  <button class="toggle-button" on:click={toggleLinks}>&#9776;</button>
  <ul class="nav-links {addActive}">
    <li><a href=".">home</a></li>
    <li><a href="events">events</a></li>
    <li><a href="team">team</a></li>
  </ul>
</nav>