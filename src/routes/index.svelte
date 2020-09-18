<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import {telegram, twitter, facebook, github } from 'svelte-awesome/icons';
</script>

<style>
  :global(body) {
    background-color: black;
    font-family: "Red Hat Display";
  }

  figure {
    text-align: center;
    margin: 2em 0 1em 0;
    font-size: 2rem;
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
    display: none;
  }

  @media (max-width: 700px) {
    figure {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 500px) {
    figure {
      font-size: 1rem;
    }
  }
</style>

<svelte:head>
  <title>JODC | JIIT Open-Source Developers Circle</title>
</svelte:head>

<figure>
  <img alt="JODC Logo" src="jodcLogoWB.svg" />
  <!-- TODO(humancalico) How to change to font of figcaption -->
  <figcaption>JIIT Open-Source Developers Circle</figcaption>
</figure>

<!-- We are gonna animate the about content so it will show when user hovers or something -->
<div class="about">
  According to GitHub’s “State of the Octoverse” report 2019, 99% of software
  projects in the world use Open Source Technologies in some way or the other.
  Open source has undoubtably changed the world, and we, the JODC (JIIT
  Open-Source Developers Circle) aim to help students to become a part of it. The
  JODC is an initiative by the students of JIIT-128 to promote open source
  culture. The hub is all about contributing to and collaborating on projects,
  networking, learning together and guiding students. We conduct talks, workshops,
  activities, one-to-one sessions and dev-sprints to mentor students. We encourage
  them to volunteer for open source projects and organisations and participate in
  open source initiatives such as Google Summer of Code and Outreachy to become
  better developers and for the betterment of open source.
</div>

<!-- TODO(humancalico) add as a list? -->
<div id="social">
  <a href="https://github.com/jiitodc"><Icon style="margin-right: 10px" data={github}/>GITHUB</a>
  <a href="https://t.me/jiitodc"><Icon style="margin-right: 10px"  data={telegram}/>TELEGRAM</a>
  <a href="https://twitter.com/jiitodc"><Icon style="margin-right: 10px" data={twitter}/>TWITTER</a>
  <a href="https://www.facebook.com/groups/jiitodc"><Icon style="margin-right: 10px; font-size:40px;" data={facebook}/>FACEBOOK</a>
</div>