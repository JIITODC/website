<script>
  import Icon from 'svelte-awesome/components/Icon.svelte';
  import { telegram, twitter, facebook, github } from 'svelte-awesome/icons';

  let isOpen = false;
    
    function handleClick() {
        isOpen = !isOpen
    }

</script>

<style>
  :global(body) {
    background-color: black;
    font-family: "Red Hat Display";
  }

  .logo-container {
    text-align: center;
    margin: 2em 0 1em 0;
    width: 800px;
    height: 300px;
    font-size: 2rem;
    position: relative;
    transform-style: preserve-3d;
    transition: .9s;
    perspective: 800px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .logo-front{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateX(0deg);
    transition: .9s;
  }

  .logo-container.open .logo-front{
    transform: rotateX(-180deg);
  }

  .about-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1.1rem;
    backface-visibility: hidden;
    transform: rotateX(180deg);
    transition: .9s;
  }

  .about-back > p{
    line-height: 1.9;
    word-spacing: 1.5;
  }

  .about-back > h2{
    background-image: linear-gradient(to right,#ffc7d1, #5a03cc);
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 700;
    margin: 5px;
  }  

  .divider{
    height: 3px;
    width: 140px;
    background-image: linear-gradient(to right, #ffc7d1, #5a03cc);
    position: absolute;
    left: 50%;
    transform: translate(-50%, -30%);
  }

  .logo-container.open .about-back{
    transform: rotateX(0deg);

  }

  img {
    width: 100%;
    max-width: 600px;
    margin: 0 0 1em 0;
  }

  .about-info{
    text-align: center;
    word-spacing: 3px;
    font-size: 1rem;
  }

  .about-info.open{
    visibility: hidden;
  }

  a {
    outline: none;
  }

  #social {
    margin-top: 70px;
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

  @media (max-width: 700px) {
    .logo-front {
      font-size: 1.5rem;
    }

    #social {
      flex-direction: column;
    }
  }

  @media (max-width: 500px) {
    .logo-container {
      display: inline-block;
      width: 300px;
      height: 160px;
      left: 50%;
      transform: translateX(-50%);
    }

    .logo-front > p{
      font-size: 1.1rem;
    }

    .about-back{
      display: none;
    }

    .about-info{
      display: none;
    }

    .logo-container.open .logo-front{
      transform: none;
    }

    #social {  
      margin-top: 110px;
    }
  }
</style>

<svelte:head>
  <title>JODC | JIIT Open-Source Developers Circle</title>
</svelte:head>

<div class="logo-container" on:click={handleClick} class:open={isOpen}>
  <div class="logo-front">
    <img alt="JODC Logo" src="jodcLogoWB.svg" />
    <p>JIIT Open-Source Developers Circle</p>
  </div>
  <div class="about-back">
    <h2>ABOUT US</h2>
    <div class="divider"></div>
    <p>According to GitHub’s “State of the Octoverse” report 2019, 99% of software
    projects in the world use Open Source Technologies in some way or the other.
    Open source has undoubtably changed the world, and we, the JODC (JIIT
    Open-Source Developers Circle) aim to help students to become a part of it.<br />The
    JODC is an initiative by the students of JIIT-128 to promote open source
    culture.The hub is all about contributing to and collaborating on projects,
    networking, learning together and guiding students. We conduct talks, workshops,
    activities, one-to-one sessions and dev-sprints to mentor students. We encourage
    them to volunteer for open source projects and organisations and participate in
    open source initiatives such as Google Summer of Code and Outreachy to become
    better developers and for the betterment of open source.</p>
  </div>
</div>
<div class="about-info" on:click={handleClick} class:open={isOpen}>
<p>Want to know more? Click on JODC !</p>
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