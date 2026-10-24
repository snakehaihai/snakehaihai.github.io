/* Add soft density halos to the provider's real visitor markers. No sample data. */
(() => {
  "use strict";
  const host = document.getElementById("visitor-map");
  if (!host) return;
  const ns = "http://www.w3.org/2000/svg";
  let pending = false;
  let serial = 0;
  const observation = { childList: true, subtree: true, attributes: true, attributeFilter: ["cx", "cy", "r", "transform"] };
  const observer = new MutationObserver(schedule);

  function element(name, attributes) {
    const node = document.createElementNS(ns, name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
  }

  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(update);
  }

  function update() {
    pending = false;
    observer.disconnect();
    try {
      const widget = host.querySelector("#mapmyvisitors-widget");
      if (widget) {
        widget.setAttribute("target", "_blank");
        widget.setAttribute("rel", "noopener noreferrer");
        // Retain the exact statistics page supplied by the owner, over HTTPS.
        widget.setAttribute("href", host.dataset.statisticsUrl);
      }
      host.querySelectorAll(".visitor-density-layer, .visitor-density-defs").forEach((node) => node.remove());
      host.querySelectorAll(".mapmyvisitors-map svg").forEach((svg) => {
        const markers = [...svg.querySelectorAll("circle.jvectormap-marker")];
        if (!markers.length) return;
        const id = `visitor-heat-${serial++}`;
        const defs = element("defs", { class: "visitor-density-defs" });
        const gradient = element("radialGradient", { id });
        [
          ["0%", 0.32],
          ["40%", 0.16],
          ["100%", 0],
        ].forEach(([offset, opacity]) => {
          gradient.appendChild(element("stop", { offset, "stop-color": "#d54242", "stop-opacity": opacity }));
        });
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
        const groups = new Map();
        const locations = new Map();
        markers.forEach((marker) => {
          const cx = Number(marker.getAttribute("cx"));
          const cy = Number(marker.getAttribute("cy"));
          const r = Number(marker.getAttribute("r"));
          if (![cx, cy, r].every(Number.isFinite) || r <= 0) return;
          const key = `${cx.toFixed(3)},${cy.toFixed(3)}`;
          // Recent and historical markers can refer to the same location.
          if (!locations.has(key) || r > locations.get(key).r) locations.set(key, { marker, cx, cy, r });
        });
        locations.forEach(({ marker, cx, cy, r }) => {
          const parent = marker.parentNode;
          if (!groups.has(parent)) {
            const group = element("g", { class: "visitor-density-layer", "aria-hidden": "true" });
            parent.insertBefore(group, parent.firstChild);
            groups.set(parent, group);
          }
          // Marker size is provided by MapMyVisitors; overlapping halos accumulate visually.
          const halo = element("circle", { cx, cy, r: Math.max(10, Math.min(42, r * 4.5)), fill: `url(#${id})`, stroke: "none" });
          const transform = marker.getAttribute("transform");
          if (transform) halo.setAttribute("transform", transform);
          groups.get(parent).appendChild(halo);
        });
      });
    } finally {
      observer.observe(host, observation);
    }
  }

  observer.observe(host, observation);
  schedule();
})();
