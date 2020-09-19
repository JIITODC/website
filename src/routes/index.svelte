<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { telegram, twitter, facebook, github } from 'svelte-awesome/icons';
</script>

<style>
  :global(body) {
    background-color: black;
    font-family: "Red Hat Display";
  }

  .logo-container {
    text-align: center;
    margin: 2em 0 1em 0;
    font-size: 2rem;
    position: relative;
  }

  img {
    width: 100%;
    max-width: 600px;
    margin: 0 0 1em 0;
  }

  a {
    outline: none;
  }

  #social {
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    justify-content: center;
    width: 100%;
    justify-content: space-around;
  }


  a {
    font-size: 1.3rem;
    /* 1.1 * 16px */
    text-decoration: none;
    color: #aaa;
    margin: 10px 0;
    transition: all 0.3s;
  }

  a:hover {
    color: white;
  }

  .about {
    background-color: black;
    display: none;
    font-size: 1.5rem;
    position: absolute;
    top: -10px;
    text-align: center;
  }

  @media (max-width: 700px) {
    .logo {
      font-size: 1.5rem;
    }

    #social {
      flex-direction: column;
    }
  }

  @media (max-width: 500px) {
    .logo {
      font-size: 1rem;
    }
  }
</style>

<svelte:head>
  <title>JODC | JIIT Open-Source Developers Circle</title>
</svelte:head>

<div class="logo-container">
  <div class="logo">
    <img alt="JODC Logo" src="jodcLogoWB.svg" />
    <p>JIIT Open-Source Developers Circle</p>
  </div>
  <div class="about">
    According to GitHub’s “State of the Octoverse” report 2019, 99% of software
    projects in the world use Open Source Technologies in some way or the other.
    Open source has undoubtably changed the world, and we, the JODC (JIIT
    Open-Source Developers Circle) aim to help students to become a part of it. The
    JODC is an initiative by the students of JIIT-128 to promote open source
    culture.<br> The hub is all about contributing to and collaborating on projects,
    networking, learning together and guiding students. We conduct talks, workshops,
    activities, one-to-one sessions and dev-sprints to mentor students. We encourage
    them to volunteer for open source projects and organisations and participate in
    open source initiatives such as Google Summer of Code and Outreachy to become
    better developers and for the betterment of open source.
  </div>
</div>


<!-- TODO(humancalico) add as a list? -->
<div id="social">
  <a href="https://github.com/jiitodc">
    <Icon style="margin-right: 10px; scale:1.5;" data={github} />GITHUB</a>
  <a href="https://t.me/jiitodc">
    <Icon style="margin-right: 10px; scale:1.5;" data={telegram} />TELEGRAM</a>
  <a href="https://twitter.com/jiitodc">
    <Icon style="margin-right: 10px; scale:1.5;" data={twitter} />TWITTER</a>
  <a href="https://www.facebook.com/groups/jiitodc">
    <Icon style="margin-right: 10px; scale:1.5;" data={facebook} />FACEBOOK</a>
</div>