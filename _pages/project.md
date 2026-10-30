---
layout: page
permalink: /project/
title: Project
description: NTU–A*STAR joint project on spatial intelligence for manufacturing robots.
nav: true
nav_order: 7
og_image: /assets/img/projects/wp22-gearbox-blender-piper-20261030.jpg
---

<style>
  .wp22-project { margin-top: 1.8rem; }
  .wp22-project .wp22-kicker { color: var(--global-theme-color); font-weight: 600; letter-spacing: .04em; margin-bottom: .55rem; }
  .wp22-project h2 { font-size: clamp(1.55rem, 3.4vw, 2.15rem); line-height: 1.24; max-width: 850px; margin-bottom: 1.1rem; }
  .wp22-project .wp22-intro { font-size: 1.1rem; line-height: 1.65; max-width: 820px; }
  .wp22-project .wp22-section { margin-top: 2.25rem; scroll-margin-top: 5.5rem; }
  .wp22-project h3 { font-size: 1.35rem; margin-bottom: 1rem; }
  .wp22-project .wp22-objectives { padding-left: 1.25rem; }
  .wp22-project .wp22-objectives li { padding-left: .3rem; margin-bottom: .85rem; line-height: 1.65; }
  .wp22-project .wp22-demo { margin: 1.1rem 0 0; }
  .wp22-project video { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; background: #0c1b26; border: 1px solid var(--global-divider-color); border-radius: 8px; }
  .wp22-project .wp22-pharma-video { aspect-ratio: 16 / 9; }
  .wp22-project figcaption { color: var(--global-text-color-light); font-size: .88rem; line-height: 1.55; margin-top: .65rem; }
  .wp22-project .wp22-actions { display: flex; flex-wrap: wrap; gap: .7rem 1.4rem; margin: 1rem 0 1.5rem; }
  .wp22-project .wp22-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 0; list-style: none; border-top: 1px solid var(--global-divider-color); border-bottom: 1px solid var(--global-divider-color); }
  .wp22-project .wp22-flow li { padding: .9rem 1rem .9rem 0; line-height: 1.5; }
  .wp22-project .wp22-flow span { display: block; font-size: .75rem; font-weight: 600; color: var(--global-theme-color); margin-bottom: .25rem; }
  .wp22-project .wp22-note { color: var(--global-text-color-light); font-size: .9rem; line-height: 1.6; }
  .wp22-project .wp22-contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.4rem; }
  .wp22-project .wp22-contact-grid h5 { font-size: 1.05rem; margin-bottom: .6rem; }
  .wp22-project #contact-cases { scroll-margin-top: 5.5rem; margin-top: 2rem; }
  @media (max-width: 767px) { .wp22-project .wp22-contact-grid { grid-template-columns: 1fr; } }
  @media (max-width: 575px) { .wp22-project .wp22-flow { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
</style>

<section class="wp22-project" aria-labelledby="wp22-title">
  <p class="wp22-kicker">NTU–A*STAR Joint Project · WP 2.2</p>
  <h2 id="wp22-title">Spatially-Grounded Perception and Planning for Embodied AI Agents</h2>
  <p class="wp22-intro">Build a reusable, planner-ready spatial layer that bridges perception and planning for manufacturing robots.</p>

  <div class="wp22-section" aria-labelledby="wp22-objectives-title">
    <h3 id="wp22-objectives-title">Project objectives</h3>
    <ul class="wp22-objectives">
      <li><strong>Connect perception to planning.</strong> Build a reusable spatial layer that organizes the objects, places and relationships a manufacturing robot needs to plan its actions.</li>
      <li><strong>Support long-horizon, safe mobile manipulation.</strong> Combine navigation and pick-and-place in dynamic, semi-structured shop-floor environments.</li>
      <li><strong>Validate reusability.</strong> Evaluate two manufacturing demos and transfer across at least two robot embodiments or layouts with minimal reconfiguration.</li>
    </ul>
  </div>

  <div class="wp22-section" id="planetary-gearbox-assembly" aria-labelledby="wp22-demo-title">
    <h3 id="wp22-demo-title">Application 1: planetary gearbox assembly</h3>
    <p>A mobile dual-arm robot explores the workcell, builds an object graph and selects a task-dependent chain of objects. It collects gear components from separate tables, assembles the gearbox, retrieves a wall-mounted driver, fastens the cover and returns the tool.</p>

    <figure class="wp22-demo">
      <video controlslist="nodownload" controls playsinline preload="metadata" poster="{{ '/assets/img/projects/wp22-gearbox-blender-piper-20261030.jpg' | relative_url }}" aria-label="Simulated planetary gearbox assembly with RGB-D perception, Graph as Policy and a camera-aligned 3D object graph">
        <source src="{{ '/assets/video/wp22-gearbox-blender-piper-20261030.mp4' | relative_url }}" type="video/mp4">
        <p>Your browser does not support embedded video.</p>
      </video>
      <figcaption>Blender reconstruction · Ranger Mini 3.0 with dual PiPER arms · Complete 14-step demo, 5 min 22 s · 1080p · 3× replay. Mission, Interaction and Object Graph windows sit on the left; head RGB-D with visible-object boxes and both wrist-mounted D405 cameras sit on the right.</figcaption>
    </figure>

    <div class="wp22-actions">
      <a href="{{ '/project/gearbox-demo/' | relative_url }}" target="_blank" rel="noopener">Open the full-screen gearbox player</a>
    </div>

    <ol class="wp22-flow" aria-label="Demonstrated workflow">
      <li><span>01 · OBSERVE</span>Explore and build the object graph</li>
      <li><span>02 · PLAN</span>Select the task-dependent object chain</li>
      <li><span>03 · COLLECT</span>Navigate between tables and pick parts</li>
      <li><span>04 · ASSEMBLE</span>Place the gears, carrier and cover</li>
      <li><span>05 · FASTEN</span>Retrieve the driver and tighten three screws</li>
      <li><span>06 · RETURN</span>Return the driver to its wall cradle</li>
    </ol>
    <p class="wp22-note">This full-workflow Blender replay preserves the workpiece, screw and tool motion from the recorded MuJoCo assembly run and retargets the robot motion to the laboratory demo's dual PiPER platform. It retains the recorded task and object graphs. Object boxes come from visible rendered instance masks. Separate PiPER contact simulations are shown below.</p>

    <section id="contact-cases" aria-labelledby="contact-cases-title">
      <h4 id="contact-cases-title">PiPER contact simulation: successes and failures</h4>
      <p>Recorded contact dynamics, rendered in Blender at normal speed. Motor-driven arms and fingers manipulate free parts under gravity.</p>
      <div class="wp22-contact-grid">
        <figure class="wp22-demo">
          <h5>Successful stages · carrier and cover insertion</h5>
          <video controlslist="nodownload" id="contact-success" controls playsinline preload="metadata" poster="{{ '/assets/img/projects/wp22-piper-contact-success-20261031.jpg' | relative_url }}" aria-label="Successful PiPER carrier and cover insertion contact simulations">
            <source src="{{ '/assets/video/wp22-piper-contact-success-20261031.mp4' | relative_url }}" type="video/mp4">
            <p>Your browser does not support embedded video.</p>
          </video>
          <figcaption>30.1 s · Both stages pass grip-retention, seating and model-contact checks. Final vertical error: carrier 1.00 mm; cover 0.07 mm.</figcaption>
        </figure>
        <figure class="wp22-demo">
          <h5>Failed stages · grasp, gear insertion and fastening</h5>
          <video controlslist="nodownload" id="contact-failure" controls playsinline preload="metadata" poster="{{ '/assets/img/projects/wp22-piper-contact-failure-20261031.jpg' | relative_url }}" aria-label="Failed PiPER grasp, gear insertion and screw contact simulations">
            <source src="{{ '/assets/video/wp22-piper-contact-failure-20261031.mp4' | relative_url }}" type="video/mp4">
            <p>Your browser does not support embedded video.</p>
          </video>
          <figcaption>41.9 s · Sun gear slips 9.31 mm; planet gear stops 14.00 mm above its target; screw advances 0.41 mm against a 3 mm target. The insertion and screw cases also fail the initial-contact check.</figcaption>
        </figure>
      </div>
      <p class="wp22-note">These are fixed-mount stage tests initialized from recorded states, with illustrative motor and contact parameters. Of 16 nominal tests, 0/7 grasps, 2/6 insertions and 0/3 fastening stages pass; six additional timestep/control checks complete the 22-case audit. The complete PiPER assembly sequence has not yet passed contact validation.</p>
      <div class="wp22-actions">
        <a href="{{ '/project/gearbox-demo/#contact-cases' | relative_url }}">Open contact-case players and results</a>
        <a href="{{ '/assets/video/wp22-piper-contact-results-20261031.json' | relative_url }}">View all 22 test results (JSON)</a>
      </div>
    </section>

  </div>

  <div class="wp22-section" id="pharmaceutical-sample-handling" aria-labelledby="wp22-pharma-title">
    <h3 id="wp22-pharma-title">Application 2: pharmaceutical sample handling</h3>
    <p>A Ranger Mini mobile base with a lifting carriage and two PiPER arms carries out a complete 15-step training work order across five laboratory stations: materials storage, liquid handling, mixing, centrifugation and finished-sample storage. It collects and identifies sample S01, adds wash solution, mixes and centrifuges the sample, retains the pellet, resuspends it and prepares two labeled aliquots, S01-A and S01-B, before inspection, storage and cleanup.</p>
    <p>The replay connects recorded semantic observations to an authored Mission Graph. The incremental Object Graph joins objects, stations and the room; mission dependencies and equipment gates control the work order; and the Interaction Graph shows current actions, grasps and support relationships. Target-tube preparation runs alongside centrifugation. Unloading becomes available only after preparation is complete, the rotor has stopped and the lid is unlocked.</p>

    <figure class="wp22-demo">
      <video controlslist="nodownload" class="wp22-pharma-video" controls playsinline preload="metadata" poster="{{ '/assets/img/projects/wp22-pharmaceutical-integrated-base-20261030.jpg' | relative_url }}" aria-label="Complete pharmaceutical sample-handling training simulation with Mission Graph, Interaction Graph, RGB-D and incremental object graphs">
        <source src="{{ '/assets/video/wp22-pharmaceutical-integrated-base-20261030.mp4' | relative_url }}" type="video/mp4">
        <p>Your browser does not support embedded video.</p>
      </video>
      <figcaption>Blender reconstruction · Ranger Mini 3.0 with dual PiPER arms · Complete 15-step demo, 1 min 52 s · 1080p. Mission, Interaction and Object Graph windows sit on the left; head RGB-D with visible-object boxes and both wrist-mounted D405 cameras sit on the right. The rear enclosure joins the chassis, while the front retains an open LiDAR recess beneath the canopy.</figcaption>
    </figure>

    <div class="wp22-actions">
      <a href="{{ '/project/pharmaceutical-demo/' | relative_url }}" target="_blank" rel="noopener">Open the full-screen pharmaceutical player</a>
    </div>

    <ol class="wp22-flow" aria-label="Pharmaceutical sample-handling workflow">
      <li><span>01 · EXPLORE AND IDENTIFY</span>Build the object graph, collect S01 and verify its barcode</li>
      <li><span>02 · WASH AND MIX</span>Fixture and uncap the tube, add W, recap and mix</li>
      <li><span>03 · RUN IN PARALLEL</span>Centrifuge S01 with balance tube B01 while preparing labeled targets</li>
      <li><span>04 · RELEASE AND RESUSPEND</span>Wait for stopped and unlocked signals, retain the pellet, add R and mix</li>
      <li><span>05 · ALIQUOT AND INSPECT</span>Dispense into S01-A and S01-B, cap, scan and inspect</li>
      <li><span>06 · STORE AND CLOSE</span>Register finished samples, return materials and clear the work area</li>
    </ol>
    <p class="wp22-note">This is a kinematic training replay with an authored Mission Graph and symbolic liquid, barcode and equipment acknowledgements. Object boxes are simulation annotations from visible rendered instance masks. Tubes have modeled support fixtures; the robot and objects pass sampled geometric intersection checks at 120 Hz. Demonstration timings are not production parameters. Physical process validation and cross-embodiment evaluation remain project objectives.</p>

  </div>
</section>
