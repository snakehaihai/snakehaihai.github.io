---
layout: page
permalink: /project/
title: Project
description: NTU–A*STAR joint project on spatial intelligence for manufacturing robots.
nav: true
nav_order: 7
og_image: /assets/img/projects/wp22-meter-real-2-20261101.jpg
---

<style>
  .wp22-project { margin-top: 1.8rem; }
  .wp22-project .wp22-kicker { color: var(--global-theme-color); font-weight: 600; letter-spacing: .04em; margin-bottom: .55rem; }
  .wp22-project h2 { font-size: clamp(1.55rem, 3.4vw, 2.15rem); line-height: 1.24; max-width: 850px; margin-bottom: 1.1rem; }
  .wp22-project .wp22-intro { font-size: 1.1rem; line-height: 1.65; max-width: 820px; }
  .wp22-project .wp22-section { margin-top: 2.8rem; scroll-margin-top: 5.5rem; }
  .wp22-project h3 { font-size: 1.35rem; margin-bottom: .8rem; }
  .wp22-project h4 { font-size: 1.12rem; margin: 1.6rem 0 .8rem; }
  .wp22-project .wp22-demo { margin: 1rem 0 0; }
  .wp22-project video { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; background: #0c1b26; border: 1px solid var(--global-divider-color); border-radius: 8px; }
  .wp22-project figcaption { color: var(--global-text-color-light); font-size: .88rem; line-height: 1.5; margin-top: .6rem; }
  .wp22-project .wp22-evidence, .wp22-project .wp22-contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.2rem; }
  .wp22-project .wp22-evidence { margin: 1.3rem 0 2rem; }
  .wp22-project .wp22-evidence figure { margin: 0; border: 1px solid var(--global-divider-color); border-radius: 8px; overflow: hidden; }
  .wp22-project .wp22-evidence figure h5 { margin: 0; padding: .8rem 1rem; font-size: .98rem; }
  .wp22-project .wp22-evidence .wp22-media { display: flex; align-items: center; justify-content: center; aspect-ratio: 16 / 10; background: #f4f6f7; }
  .wp22-project .wp22-media img { display: block; width: 100%; height: 100%; object-fit: contain; }
  .wp22-project .wp22-evidence figcaption { color: var(--global-text-color); margin: 0; padding: .8rem 1rem; }
  .wp22-project .wp22-gif-caption { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }
  .wp22-project .wp22-gif-toggle { border: 1px solid var(--global-divider-color); border-radius: 4px; padding: .1rem .55rem; color: var(--global-text-color); background: transparent; cursor: pointer; }
  .wp22-project #electric-meter-learning-process, .wp22-project #contact-cases { scroll-margin-top: 5.5rem; margin-top: 2rem; }
  .wp22-project .wp22-contact-grid h5 { font-size: 1rem; margin-bottom: .6rem; }
  @media (max-width: 767px) {
    .wp22-project .wp22-evidence, .wp22-project .wp22-contact-grid { grid-template-columns: 1fr; }
    .wp22-project .wp22-evidence .wp22-real-one { order: 0; }
    .wp22-project .wp22-evidence .wp22-real-two { order: 1; }
    .wp22-project .wp22-evidence .wp22-challenge-one { order: 2; }
    .wp22-project .wp22-evidence .wp22-challenge-two { order: 3; }
  }

.wp22-project .wp22-objectives-section { margin-top: 2.25rem; }
.wp22-project .wp22-objectives { padding-left: 1.25rem; }
.wp22-project .wp22-objectives li { padding-left: .3rem; margin-bottom: .85rem; line-height: 1.65; }
</style>
<section aria-labelledby="wp22-title" class="wp22-project">
<p class="wp22-kicker">NTU–A*STAR Joint Project · WP 2.2</p>
<h2 id="wp22-title">Spatially-Grounded Perception and Planning for Embodied AI Agents</h2>
<p class="wp22-intro">Build a reusable, planner-ready spatial layer that bridges perception and planning for manufacturing robots.</p><div aria-labelledby="wp22-objectives-title" class="wp22-objectives-section">
<h3 id="wp22-objectives-title">Project objectives</h3>
<ul class="wp22-objectives">
<li><strong>Connect perception to planning.</strong> Build a reusable spatial layer that organizes the objects, places and relationships a manufacturing robot needs to plan its actions.</li>
<li><strong>Support long-horizon, safe mobile manipulation.</strong> Combine navigation and pick-and-place in dynamic, semi-structured shop-floor environments.</li>
<li><strong>Validate reusability.</strong> Evaluate two manufacturing demos and transfer across at least two robot embodiments or layouts with minimal reconfiguration.</li>
</ul>
</div>
<div aria-labelledby="wp22-meter-title" class="wp22-section" id="electric-meter-handling">
<h3 id="wp22-meter-title">Application 1: electric meter testing and calibration</h3>
<p><strong>Task. </strong>Pre-shipment testing and calibration in an electric-meter manufacturing and assembly plant.<br/><strong>Challenge. </strong>Reliable tray handling and precise rack insertion despite uncertain depth and object boundaries.</p><p class="wp22-description">A mobile robot with two RealMan RM65 arms and custom grippers collects a loaded tray from an external roller station, installs two pairs of meters along 60-degree guide channels, moves the empty tray to the rear deck and returns it to the station.</p><p class="wp22-description">The column-foot joint turns the mast and upper body together. Lift, arm, column and base movements run sequentially. Mission, Interaction and 3D Object Graphs follow the task; the head RGB-D view and both wrist-mounted D405 views show the same operation from their rigid camera mounts.</p>
<h4 id="electric-meter-learning-result">Simulated Pipeline</h4>
<figure class="wp22-demo">
<video aria-label="Electric meter unit-testing system demonstration" controls="" controlslist="nodownload" playsinline="" poster="{{ '/assets/img/projects/wp22-electric-meter-rm65-graph-v7-20261101.jpg' | relative_url }}" preload="metadata">
<source src="{{ '/assets/video/wp22-electric-meter-rm65-graph-v7-20261101.mp4' | relative_url }}" type="video/mp4"/>
<p>Your browser does not support embedded video.</p>
</video>
<figcaption>Dual RealMan RM65 arms · Custom grippers · Simulation</figcaption>
</figure>
<section aria-labelledby="wp22-meter-learning-title" id="electric-meter-learning-process">
<h4 id="wp22-meter-learning-title">Recursive self-improvement (RSI)</h4><p>The intermediate RSI learning process improves the meter-insertion policy through execution feedback. The first graph requests insertion before the lift settles. Adding a wait lets the lower pair complete; adding wrist observation and lateral alignment then resolves the upper-row offset. Three runs of the same task model complete 0, 2 and 4 target meters.</p>
<figure class="wp22-demo">
<video aria-label="Recursive self-improvement across three graph policy revisions" controls="" controlslist="nodownload" playsinline="" poster="{{ '/assets/img/projects/wp22-electric-meter-rsi-ava-20261101.jpg' | relative_url }}" preload="metadata">
<source src="{{ '/assets/video/wp22-electric-meter-rsi-ava-20261101.mp4' | relative_url }}" type="video/mp4"/>
<p>Your browser does not support embedded video.</p>
</video>
</figure>
</section>
<section aria-labelledby="wp22-deployment-title" id="electric-meter-deployment"><h4 id="wp22-deployment-title">Real-world deployment &amp; open challenges</h4>
<p class="wp22-description">The real robot can complete the basic tray-handling and meter-insertion workflow, though execution is still relatively slow. Perception remains a challenge: uncertain object boundaries, noisy depth estimates and residual scene points can affect grasping and alignment.</p>
<div aria-label="Real robot operation and remaining perception challenges" class="wp22-evidence">
<figure class="wp22-real-one" data-gif-card="">
<h5>Real robot · view 1</h5>
<div class="wp22-media"><img alt="Real robot transferring a tray beside the production-line test racks" data-animation="{{ '/assets/img/projects/wp22-meter-real-1-20261101.gif' | relative_url }}" data-still="{{ '/assets/img/projects/wp22-meter-real-1-20261101.jpg' | relative_url }}" height="248" loading="lazy" src="{{ '/assets/img/projects/wp22-meter-real-1-20261101.gif' | relative_url }}" width="512"/></div>
<figcaption class="wp22-gif-caption"><span>Tray handling · 2×</span><button aria-label="Pause real robot view 1" class="wp22-gif-toggle" data-view-label="real robot view 1" type="button">Ⅱ</button></figcaption>
</figure>
<figure class="wp22-challenge-one">
<h5>Challenge 1 · Uncertain 3D boundaries</h5>
<a aria-label="Enlarge the boundary and depth uncertainty figure" class="wp22-media" href="{{ '/assets/img/projects/wp22-meter-boundary-depth-20261101.png' | relative_url }}" rel="noopener" target="_blank"><img alt="Meter boundary overlays and a seven-frame depth variation map showing greater uncertainty near the edges" height="752" loading="lazy" src="{{ '/assets/img/projects/wp22-meter-boundary-depth-20261101.png' | relative_url }}" width="1061"/></a>
<figcaption>Unstable boundaries and frame-to-frame depth variation make the meter’s 3D extent uncertain, complicating grasp placement and clearance checks.</figcaption>
</figure>
<figure class="wp22-real-two" data-gif-card="">
<h5>Real robot · view 2</h5>
<div class="wp22-media"><img alt="Real robot picking meters from a tray and inserting them into the test rack" data-animation="{{ '/assets/img/projects/wp22-meter-real-2-20261101.gif' | relative_url }}" data-still="{{ '/assets/img/projects/wp22-meter-real-2-20261101.jpg' | relative_url }}" height="248" loading="lazy" src="{{ '/assets/img/projects/wp22-meter-real-2-20261101.gif' | relative_url }}" width="512"/></div>
<figcaption class="wp22-gif-caption"><span>Meter loading · 5×</span><button aria-label="Pause real robot view 2" class="wp22-gif-toggle" data-view-label="real robot view 2" type="button">Ⅱ</button></figcaption>
</figure>
<figure class="wp22-challenge-two">
<h5>Challenge 2 · False obstacles near the grasp</h5>
<a aria-label="Enlarge the residual obstacle figure" class="wp22-media" href="{{ '/assets/img/projects/wp22-meter-residual-obstacles-20261101.png' | relative_url }}" rel="noopener" target="_blank"><img alt="RGB, depth and point-cloud cross-sections showing residual environment points inside the meter volume" height="567" loading="lazy" src="{{ '/assets/img/projects/wp22-meter-residual-obstacles-20261101.png' | relative_url }}" width="801"/></a>
<figcaption>Residual points can remain inside the meter’s volume after it is removed from the scene model. A planner may treat these points as obstacles and reject a feasible grasp.</figcaption>
</figure>
</div></section></div>
<div aria-labelledby="wp22-pharma-title" class="wp22-section" id="pharmaceutical-sample-handling">
<h3 id="wp22-pharma-title">Application 2: biological sample handling</h3>
<p><strong>Task. </strong>Prepare biological samples through washing, mixing, centrifugation, aliquoting and storage.<br/><strong>Challenge. </strong>Handle small tubes accurately, track sample identity and coordinate parallel steps with equipment readiness.</p><p class="wp22-description">A Ranger Mini mobile base with a lifting carriage and two PiPER arms carries out a 15-step workflow across five laboratory stations: materials storage, liquid handling, mixing, centrifugation and finished-sample storage. It collects and identifies sample S01, adds wash solution, mixes and centrifuges the sample. It then retains the pellet—the material collected at the bottom of the tube—mixes it back into liquid and prepares two labeled aliquots, or measured portions, S01-A and S01-B, before inspection, storage and cleanup.</p><p class="wp22-description">The Mission Graph organizes the work order and its dependencies. The Object Graph connects samples, equipment and the room; the Interaction Graph tracks current actions, grasps and support relationships. Target-tube preparation runs alongside centrifugation. Unloading becomes available only after preparation is complete, the rotor has stopped and the lid is unlocked.</p>
<figure class="wp22-demo">
<video aria-label="Biological sample-handling system demonstration" controls="" controlslist="nodownload" playsinline="" poster="{{ '/assets/img/projects/wp22-pharmaceutical-integrated-base-20261030.jpg' | relative_url }}" preload="metadata">
<source src="{{ '/assets/video/wp22-pharmaceutical-integrated-base-20261030.mp4' | relative_url }}" type="video/mp4"/>
<p>Your browser does not support embedded video.</p>
</video>
<figcaption>Ranger Mini 3.0 · Dual PiPER arms · Simulation</figcaption>
</figure>
</div>
<div aria-labelledby="wp22-demo-title" class="wp22-section" id="planetary-gearbox-assembly">
<h3 id="wp22-demo-title">Application 3: planetary gearbox assembly</h3>
<p><strong>Task. </strong>Collect components, assemble a planetary gearbox and fasten its cover.<br/><strong>Challenge. </strong>Align parts within tight clearances while maintaining stable grasps and coordinating both arms.</p><p class="wp22-description">A mobile dual-arm robot explores the workcell, builds an object graph and selects a task-dependent chain of objects. It collects gear components from separate tables, assembles the gearbox, retrieves a wall-mounted driver, fastens the cover and returns the tool.</p>
<figure class="wp22-demo">
<video aria-label="Planetary gearbox assembly system demonstration" controls="" controlslist="nodownload" playsinline="" poster="{{ '/assets/img/projects/wp22-gearbox-blender-piper-20261030.jpg' | relative_url }}" preload="metadata">
<source src="{{ '/assets/video/wp22-gearbox-blender-piper-20261030.mp4' | relative_url }}" type="video/mp4"/>
<p>Your browser does not support embedded video.</p>
</video>
<figcaption>Ranger Mini 3.0 · Dual PiPER arms · Simulation</figcaption>
</figure>
<section aria-labelledby="contact-cases-title" id="contact-cases">
<h4 id="contact-cases-title">Contact simulation</h4>
<div class="wp22-contact-grid">
<figure class="wp22-demo">
<h5>Carrier and cover insertion</h5>
<video aria-label="Successful carrier and cover insertion stages" controls="" controlslist="nodownload" id="contact-success" playsinline="" poster="{{ '/assets/img/projects/wp22-piper-contact-success-20261031.jpg' | relative_url }}" preload="metadata">
<source src="{{ '/assets/video/wp22-piper-contact-success-20261031.mp4' | relative_url }}" type="video/mp4"/>
<p>Your browser does not support embedded video.</p>
</video>
<figcaption>Both stages reach their seated positions.</figcaption>
</figure>
<figure class="wp22-demo">
<h5>Remaining manipulation challenges</h5>
<video aria-label="Grasp, insertion and fastening failure cases" controls="" controlslist="nodownload" id="contact-failure" playsinline="" poster="{{ '/assets/img/projects/wp22-piper-contact-failure-20261031.jpg' | relative_url }}" preload="metadata">
<source src="{{ '/assets/video/wp22-piper-contact-failure-20261031.mp4' | relative_url }}" type="video/mp4"/>
<p>Your browser does not support embedded video.</p>
</video>
<figcaption>Grasp slip, incomplete insertion and limited screw travel.</figcaption>
</figure>
</div>
</section>
</div>
</section>
<script defer="" src="{{ '/assets/js/project-media.js' | relative_url | bust_file_cache }}"></script>
