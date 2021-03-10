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

.divider-4 {
  width: 168px;
}

.reg-heading {
  display: inline-block;
  margin: 10px 20px 10px 0;
}

.reg-link {
  text-decoration: none;
  font-size: 20px;
  color: orange;
}

.reg-link:hover {
  color: #fff;
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
  -moz-border-image: linear-gradient(to right, #ffa500 0%, #fd9346 100%);
  -webkit-border-image: linear-gradient(to right, #ffa500 0%, #fd9346 100%);
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

.more-info {
  margin-top: 70px;
}

.para-help,
.para-projects {
  display: inline-block;
  margin-left: 30px;
}

.btn-help,
.btn-projects {
  margin-left: 15px;
  padding: 8px 16px;
  border-radius: 3px;
  background: linear-gradient(to right, #ffa500, #fd9346);
  cursor: pointer;
  border: none;
  color: #fff;
  font-weight: 600;
  outline: none;
}

.link-help,
.link-projects {
  text-decoration: none;
  font-size: 1rem;
}

.btn-help:hover .link-help,
.btn-projects:hover .link-projects {
  color: #000;
}

.divider-3 {
  width: 140px;
  margin-bottom: 20px;
}

@media (max-width: 1020px) {
  .divider-1 {
    width: 280px;
  }

  .para-help,
  .para-projects {
    font-size: 20px;
    margin-left: 30px;
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

  .divider-2 {
    width: 125px;
  }

  .divider-3 {
    width: 165px;
  }

  .divider-4 {
    width: 192px;
  }

  .btn-help,
  .btn-projects {
    margin-left: 0;
  }

  .para-help,
  .para-projects {
    font-size: 18px;
    margin-left: 0;
  }

  p {
    font-size: 18px;
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
      The Hack-Week will be a week long event in which you'll get a chance to
      hack on something or if you chose to, mentor a team. You'll be able to
      participate either as a project mentor or a mentee. Project mentors will
      propose projects and mentees will apply individually to work on a proposed
      project of their choice. The JODC team will review mentor applications and
      once a mentor's project is accepted, they'll be able to review and select
      mentees for their project. All successful students will be provided with a
      digital certificate.
    </p>
  </div>
  <div class="registration">
    <h3 class="reg-heading">Mentor Registration &#8594</h3>
    <a
      href="https://www.shorturl.at/rxTX8"
      class="reg-link"
      target="_blank"
    >Here</a>
    <p></p>
    <h3 class="reg-heading">Student Registration &#8594</h3>
    <a href="#" class="reg-link">Releasing on 10th March, 2021</a>
  </div>
  <div class="timeline-container">
    <h2 class="header-styler">Timeline</h2>
    <div class="divider divider-2"></div>

    <div class="timeline-wrapper">
      <p class="timeline-para">
        Mentors Application : March 6, 2021 - March 9, 2021
      </p>
      <p class="timeline-para">Projects Announced: March 10, 2021</p>
      <p class="timeline-para">
        Student Application : March 10, 2021 - March 14, 2021
      </p>
      <p class="timeline-para">Students Project Announced: March 15, 2021</p>
      <p class="timeline-para">
        Coding Period: March 15, 2021 - March 21, 2021
      </p>
      <p class="timeline-para">Results Announced: March 27, 2021</p>
    </div>
  </div>
  <div class="more-info">
    <p class="para-projects">
      List of projects &#8594
      <button class="btn-projects"><a
          href="hackweek/projects"
          class="link-projects"
        >PROJECTS</a></button>
    </p>
    <p class="para-help">
      Student/Mentor Manual &#8594
      <button class="btn-help"><a
          href="hackweek/help"
          class="link-help"
        >HELP</a></button>
    </p>

    <h2 class="header-styler">Contact us</h2>
    <div class="divider divider-3"></div>
    <p>
      Mail us at
      <a
        style="text-decoration:none"
        href="mailto:jiitodc@gmail.com"
      >jiitodc@gmail.com</a>
    </p>
  </div>
</section>
