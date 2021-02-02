<style>
:global(body) {
  background-color: black;
  -webkit-tap-highlight-color: transparent;
}

.about-event {
  width: 100%;
  font-size: 1.1rem;
  display: inline-block;
}

.about-event > p {
  line-height: 1.9;
  word-spacing: 4px;
}

.header-styler {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
}

.about-event > h1 {
  margin: 0;
}

.divider {
  height: 3px;
  background-color: orange;
}

.divider-1 {
  width: 375px;
}

.divider-2 {
  width: 110px;
  margin-bottom: 60px;
}

.reg-heading {
  display: inline-block;
  margin: 10px 20px 10px 0;
}

.reg-link {
  text-decoration: none;
  font-size: 20px;
}

.reg-link:hover {
  color: orange;
}

.timeline-wrapper {
  min-width: 200px;
  max-width: 400px;
  margin: auto;
}

.timeline-para {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px solid;
  -o-border-image: linear-gradient(to right, #ffa500 0%, #fd9346 100%);
  border-image: linear-gradient(to right, #ffa500 0%, #fd9346 100%);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  color: #fff;
}
.timeline-para:before {
  content: counter(section);
  position: absolute;
  border-radius: 50%;
  padding: 10px;
  height: 1.25em;
  width: 1.25em;
  background-color: #34435e;
  text-align: center;
  line-height: 1.25em;
  color: #ffffff;
  font-size: 1em;
}

.timeline-para:nth-child(odd) {
  border-right: 3px solid;
  padding-left: 0;
}
.timeline-para:nth-child(odd):before {
  left: 100%;
  margin-left: -20px;
}

.timeline-para:nth-child(even) {
  border-left: 3px solid;
  padding-right: 0;
}
.timeline-para:nth-child(even):before {
  right: 100%;
  margin-right: -20px;
}

.timeline-para:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.timeline-para:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

@media (max-width: 1020px) {
  .divider-1 {
    width: 280px;
  }
}

@media (max-width: 768px) {
  .section-about {
    height: 100vh;
  }

  .about-event {
    width: 100%;
    font-size: 1rem;
    display: inline-block;
  }

  .about-event > p {
    line-height: 1.5;
    word-spacing: 2px;
  }

  .divider-1 {
    width: 250px;
  }
}
</style>

<script>
</script>

<svelte:head>
  <title>JODC | Hack Week</title>
</svelte:head>

<section class="section-landing">
  <div class="about-event">
    <h1 class="header-styler">Hack week</h1>
    <div class="divider divider-1"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
      reiciendis porro totam aliquam ex impedit sequi temporibus blanditiis quod
      ipsa qui voluptas dicta pariatur atque repudiandae. Minima, totam
      laudantium culpa corrupti sed velit eius? Reiciendis accusantium repellat
      deserunt praesentium quam ea neque exercitationem mollitia, sint odio
      aliquid velit at ipsum?
    </p>
  </div>
  <div class="registration">
    <h3 class="reg-heading">Mentor Registration &#8594</h3>
    <a href="#" class="reg-link">%Insert link here%</a>
    <p></p>
    <h3 class="reg-heading">Student Registration &#8594</h3>
    <a href="#" class="reg-link">%Insert link here%</a>
  </div>
  <div class="timeline-container">
    <h2 class="header-styler">Timeline</h2>
    <div class="divider divider-2"></div>

    <div class="timeline-wrapper">
      <p class="timeline-para">Doggo ipsum .</p>
      <p class="timeline-para">Big ol</p>
      <p class="timeline-para">very good spot.</p>
      <p class="timeline-para">borking doggo.</p>
    </div>
  </div>
</section>
