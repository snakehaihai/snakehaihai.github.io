---
layout: page
permalink: /project/
title: Project
description: NTU–A*STAR joint project on spatial intelligence for manufacturing robots.
nav: true
nav_order: 7
og_image: /assets/img/projects/wp22-gearbox-assembly-poster.jpg
---

<style>
  .wp22-project { margin-top: 1.8rem; }
  .wp22-project .wp22-kicker { color: var(--global-theme-color); font-weight: 600; letter-spacing: .04em; margin-bottom: .55rem; }
  .wp22-project h2 { font-size: clamp(1.55rem, 3.4vw, 2.15rem); line-height: 1.24; max-width: 850px; margin-bottom: 1.1rem; }
  .wp22-project .wp22-intro { font-size: 1.1rem; line-height: 1.65; max-width: 820px; }
  .wp22-project .wp22-section { margin-top: 2.25rem; }
  .wp22-project h3 { font-size: 1.35rem; margin-bottom: 1rem; }
  .wp22-project .wp22-objectives { padding-left: 1.25rem; }
  .wp22-project .wp22-objectives li { padding-left: .3rem; margin-bottom: .85rem; line-height: 1.65; }
  .wp22-project .wp22-demo { margin: 1.1rem 0 0; }
  .wp22-project video { display: block; width: 100%; height: auto; aspect-ratio: 16 / 9; background: #0c1b26; border: 1px solid var(--global-divider-color); border-radius: 8px; }
  .wp22-project figcaption { color: var(--global-text-color-light); font-size: .88rem; line-height: 1.55; margin-top: .65rem; }
  .wp22-project .wp22-actions { display: flex; flex-wrap: wrap; gap: .7rem 1.4rem; margin: 1rem 0 1.5rem; }
  .wp22-project .wp22-flow { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); padding: 0; list-style: none; border-top: 1px solid var(--global-divider-color); border-bottom: 1px solid var(--global-divider-color); }
  .wp22-project .wp22-flow li { padding: .9rem 1rem .9rem 0; line-height: 1.5; }
  .wp22-project .wp22-flow span { display: block; font-size: .75rem; font-weight: 600; color: var(--global-theme-color); margin-bottom: .25rem; }
  .wp22-project .wp22-note { color: var(--global-text-color-light); font-size: .9rem; line-height: 1.6; }
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

  <div class="wp22-section" aria-labelledby="wp22-demo-title">
    <h3 id="wp22-demo-title">Simulation demonstrator: planetary gearbox assembly</h3>
    <p>A mobile dual-arm robot explores the workcell, builds an object graph and selects a task-dependent chain of objects. It collects gear components from separate tables, assembles the gearbox, retrieves a wall-mounted driver, fastens the cover and returns the tool.</p>

    <figure class="wp22-demo">
      <video controls playsinline preload="metadata" poster="{{ '/assets/img/projects/wp22-gearbox-assembly-poster.jpg' | relative_url }}" aria-label="Simulated planetary gearbox assembly with RGB-D perception, Graph as Policy and a camera-aligned 3D object graph">
        <source src="{{ '/assets/video/wp22-gearbox-assembly.mp4' | relative_url }}" type="video/mp4">
        <p>Your browser does not support embedded video. <a href="{{ '/assets/video/wp22-gearbox-assembly.mp4' | relative_url }}">Download the assembly demonstration</a>.</p>
      </video>
      <figcaption>Ranger Mini 3.0 with two RealMan RM75 arms · 5 min 22 s · 3× replay. Floating views show RGB-D perception, Graph as Policy, object relations and a 3D object graph aligned with the main camera.</figcaption>
    </figure>

    <div class="wp22-actions">
      <a href="{{ '/assets/video/wp22-gearbox-assembly.mp4' | relative_url }}" download="NTU_ASTAR_WP22_Gearbox_Assembly.mp4">Download demo video (MP4)</a>
      <a href="{{ '/assets/video/wp22-gearbox-assembly.mp4' | relative_url }}" target="_blank" rel="noopener">Open video in a new tab</a>
    </div>

    <ol class="wp22-flow" aria-label="Demonstrated workflow">
      <li><span>01 · OBSERVE</span>Explore and build the object graph</li>
      <li><span>02 · PLAN</span>Select the task-dependent object chain</li>
      <li><span>03 · COLLECT</span>Navigate between tables and pick parts</li>
      <li><span>04 · ASSEMBLE</span>Place the gears, carrier and cover</li>
      <li><span>05 · FASTEN</span>Retrieve the driver and tighten three screws</li>
      <li><span>06 · RETURN</span>Return the driver to its wall cradle</li>
    </ol>
    <p class="wp22-note">This demonstrator uses a MuJoCo factory simulation with semantic RGB-D observations, registered assembly fixtures and captive screw joints. The two-demo and cross-embodiment evaluations are project objectives.</p>

  </div>
</section>
