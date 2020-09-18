<script>
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
    height: 90px;
    width: auto;
    margin-left: 40px;
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

  li:not(:last-child){
    margin-right: 50px;
  }

  a {
    text-decoration: none;
    padding: .1em 0.25em;
    display: block;
    text-transform: uppercase;
    font-size: 1.6rem;
    transition: all .5s;
    border-radius: 3px;
    position: relative;
    border-bottom: 2px solid #fff;
  }

  a::after{
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

  a:hover::after{
    height: 100%;
    opacity: 1;
  }

  a:hover{
    color: #000;
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