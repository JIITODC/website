<style>
:global(body) {
  background-color: black;
  -webkit-tap-highlight-color: transparent;
}

.section-header {
  height: 90vh;
}

.logo-container {
  text-align: center;
  margin: 2em 0 0 0;
  width: 800px;
  height: 300px;
  font-size: 2rem;
  position: relative;
}

.logo-front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  max-width: 600px;
  margin: 0 0 1em 0;
}

.section-about {
  height: 80vh;
}

.about-us {
  width: 100%;
  font-size: 1.1rem;
  display: inline-block;
  margin-top: 5vh;
}

.about-us > p {
  line-height: 1.9;
  word-spacing: 4px;
}

.about-us > h2 {
  color: #fff;
  font-weight: 700;
  margin: 5px;
}

.divider {
  height: 3px;
  width: 140px;
  background-color: orange;
}

a {
  outline: none;
}

#social {
  margin-top: 90px;
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
  -webkit-tap-highlight-color: transparent;
}

a:hover {
  color: white;
}
@media (min-width: 769px) {
  .logo-container {
    max-width: 800px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .section-header {
    height: 87vh;
    position: relative;
  }

  .logo-container {
    display: inline-block;
    max-width: 300px;
    width: 100%;
    height: 160px;
    left: 50%;
    top: 17%;
    transform: translate(-50%, -50%);
  }

  .logo-front > p {
    font-size: 1.1rem;
  }

  #social {
    position: absolute;
    bottom: 25%;
    display: grid;
    grid-template-columns: auto auto;
  }

  #social > a {
    font-size: 1.1rem;
  }

  .section-about {
    height: 100vh;
  }

  .about-us {
    width: 100%;
    font-size: 1rem;
    display: inline-block;
    margin-top: 15vh;
  }

  .about-us > p {
    line-height: 1.5;
    word-spacing: 2px;
  }

  .divider {
    width: 130px;
  }
}
</style>

<script>
import Icon from 'svelte-awesome/components/Icon.svelte';
import { telegram, twitter, facebook, github } from 'svelte-awesome/icons';
</script>

<svelte:head>
  <title>JODC | JIIT Open-Source Developers Circle</title>
</svelte:head>

<section class="section-header">
  <div class="logo-container">
    <div class="logo-front">
      <img alt="JODC Logo" src="jodcLogoWB.svg" />
      <p>JIIT Open-Source Developers Circle</p>
    </div>
  </div>

  <div id="social">
    <a href="https://github.com/jiitodc">
      <Icon style="margin-right: 10px; scale:1.5;" data="{github}" />GITHUB</a>
    <a href="https://t.me/jiitodc">
      <Icon
        style="margin-right: 10px; scale:1.5;"
        data="{telegram}"
      />TELEGRAM</a>
    <a href="https://twitter.com/jiitodc">
      <Icon
        style="margin-right: 10px; scale:1.5;"
        data="{twitter}"
      />TWITTER</a>
    <a href="https://www.facebook.com/groups/jiitodc">
      <Icon
        style="margin-right: 10px; scale:1.5;"
        data="{facebook}"
      />FACEBOOK</a>
  </div>
</section>
<section class="section-about">
  <div class="about-us">
    <h2>ABOUT US</h2>
    <div class="divider"></div>
    <p>
      According to GitHub’s “State of the Octoverse” report 2019, 99% of
      software projects in the world use Open Source Technologies in some way or
      the other. Open source has undoubtably changed the world, and we, the JODC
      (JIIT Open-Source Developers Circle) aim to help students to become a part
      of it.<br /><br />The JODC is an initiative by the students of JIIT-128 to
      promote open source culture. The hub is all about contributing to and
      collaborating on projects, networking, learning together and guiding
      students. We conduct talks, workshops, activities, one-to-one sessions and
      dev-sprints to mentor students.<br /><br />
      We encourage them to volunteer for open source projects and organisations
      and participate in open source initiatives such as Google Summer of Code
      and Outreachy to become better developers and for the betterment of open
      source.
    </p>
  </div>
</section>
