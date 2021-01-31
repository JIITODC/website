<style>
nav {
  font-weight: 300;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
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

.nav-link {
  text-decoration: none;
  padding: 0.1em 0.25em;
  display: block;
  text-transform: uppercase;
  font-size: 1.6rem;
  transition: all 0.5s;
  position: relative;
  border-bottom: 2px solid #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 0;
  opacity: 0;
  transition: all 0.6s;
  background-color: #fff;
}

.nav-link:hover::after,
.nav-link.active::after {
  height: 100%;
  opacity: 1;
}

.nav-link:hover,
.nav-link.active {
  color: #000;
}

.burger-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: none;
  z-index: 10;
}

.hamburger-icon {
  width: 30px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.hamburger-icon::before,
.hamburger-icon::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.hamburger-icon::before {
  transform: translateY(-11px);
}

.hamburger-icon::after {
  transform: translateY(11px);
}

.burger-container.open .hamburger-icon {
  transform: translateX(-50px);
  background: transparent;
}

.burger-container.open .hamburger-icon::before {
  transform: rotate(45deg) translate(35px, -35px);
}

.burger-container.open .hamburger-icon::after {
  transform: rotate(-45deg) translate(35px, 35px);
}

.nav-overlay {
  display: none;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .nav-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    transform: translateX(100%);
    transition: all 0.6s ease-in-out;
    z-index: 5;
  }

  .nav-overlay.open {
    transform: translateX(0%);
  }

  .nav-overlay-list {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
  }

  .nav-overlay-list li {
    position: relative;
    list-style: none;
    text-align: center;
    display: block;
  }

  .nav-overlay-list li a {
    position: relative;
    text-decoration: none;
    font-size: 1.4em;
    padding: 0 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 40px;
    border: none;
    margin-bottom: 30px;
  }

  .jodc-mascot-img {
    max-height: 70px;
  }

  li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 1em;
  }

  .burger-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script>
export let segment;
let isOpen = false;

function handleClick() {
  isOpen = !isOpen;
}
</script>

<nav>
  <a href=".">
    <img src="jodcMascotWB.svg" alt="JODC Mascot" class="jodc-mascot-img" />
  </a>
  <div class="burger-container" on:click="{handleClick}" class:open="{isOpen}">
    <div class="hamburger-icon"></div>
  </div>
  <ul class="nav-links">
    <li><a class="nav-link" class:active="{!segment}" href=".">home</a></li>
    <li>
      <a
        sapper:prefetch
        class="nav-link"
        class:active="{segment === 'events'}"
        href="events"
      >events</a>
    </li>
    <li>
      <a
        sapper:prefetch
        class="nav-link"
        class:active="{segment === 'team'}"
        href="team"
      >team</a>
    </li>
    <li>
      <a
        sapper:prefetch
        class="nav-link"
        class:active="{segment === 'blog'}"
        href="blog"
      >blog</a>
    </li>
  </ul>
  <div class="nav-overlay" on:click="{handleClick}" class:open="{isOpen}">
    <ul class="nav-overlay-list">
      <li><a href=".">home</a></li>
      <li><a href="events">events</a></li>
      <li><a href="team">team</a></li>
      <li><a href="blog">blog</a></li>
    </ul>
  </div>
</nav>
