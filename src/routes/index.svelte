<style>
  :global(body) {
    background-color: black;
  }

  figure {
    text-align: center;
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  a {
    font-family: "Red Hat Display";
    outline: none;
  }

  #social {
    margin-top: 20px;
    display: flex;
    flex: 1;
    justify-content: space-around;
  }

  #social a {
    text-decoration: none;
    color: white;
  }
</style>

<svelte:head>
  <title>JODC</title>
</svelte:head>

<figure>
  <img alt="JODC Logo" src="jodcLogoWB.svg" />
  <!-- TODO(humancalico) How to change to font of figcaption -->
  <figcaption>JIIT Open-Source Developers Circle</figcaption>
</figure>

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

<!-- TODO(humancalico) add as a list? -->
<div id="social">
  <a href="https://github.com/jiitodc">GITHUB</a>
  <a href="https://t.me/jiitodc">TELEGRAM</a>
  <a href="https://twitter.com/jiitodc">TWITTER</a>
  <a href="https://www.facebook.com/groups/jiitodc">FACEBOOK</a>
</div>
