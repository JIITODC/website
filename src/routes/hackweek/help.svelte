<style>
:global(body) {
  background-color: black;
  -webkit-tap-highlight-color: transparent;
}

.header {
  text-transform: uppercase;
  font-size: 30px;
}

.divider {
  height: 3px;
  background-color: orange;
}

.divider-1 {
  width: 245px;
}

.divider-2 {
  width: 235px;
}

@media (max-width: 1020px) {
}

@media (max-width: 768px) {
  p,
  li {
    font-size: 18px;
  }
}
</style>

<script>
</script>

<svelte:head>
  <title>Hack Week | Help</title>
</svelte:head>

<section class="student-manual">
  <h2 class="header">Student Manual</h2>
  <div class="divider divider-1"></div>
  <p>
    Students are expected to apply as a participant by January 6 2020. The
    selected projects and mentor contact details for each project will be listed
    on the website by January 3, 2020 for students to go through. The
    contribution period begins on January 5, 2020 and will end on February 5,
    2020.<br />
    Students may select any issue to work on from the projects listed, inform
    the same to the mentor monitoring the project and join the project’s
    communication channel. Students may ask for help on any issue from the
    project mentor, and mentors shall monitor student progress on issues.
  </p>
  <h2>Why should you participate?</h2>
  <ul>
    <li>To expand your skillset.</li>
    <li>To learn how to work with Git and GitHub.</li>
    <li>To learn how to work in an open-source project</li>
    <li>To get connected with mentors and similar-minded students.</li>
    <li>Swags!</li>
    <li>For the spirit of open-source culture!</li>
  </ul>
</section>
<section class="mentor-manual">
  <h2 class="header">Mentor Manual</h2>
  <div class="divider divider-2"></div>
  <p>
    Mentors will be required to help students in any type of problem related to
    the project. Mentors can give overview, resources and a general direction of
    the project.
  </p>
  <h2>Why should you apply?</h2>
  <ul>
    <li>To get help with your project.</li>
    <li>To gain publicity for your project.</li>
    <li>Swags!</li>
    <li>For the spirit of open-source culture!</li>
  </ul>
</section>
