// Playback controls only: public media URLs remain retrievable on a static site.
document.addEventListener("contextmenu", (event) => {
  if (event.target.closest("video")) event.preventDefault();
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("button[data-video-src]");
  if (!trigger) return;

  document.querySelectorAll("video").forEach((video) => video.pause());
  const dialog = document.createElement("dialog");
  dialog.className = "research-video-player";
  dialog.setAttribute("aria-label", trigger.dataset.videoTitle || "Research video");
  dialog.innerHTML = `
    <style>
      .research-video-player { width: min(1200px, 94vw); max-width: 94vw; padding: 16px; border: 1px solid #35515c; border-radius: 12px; background: #091820; color: #fff; }
      .research-video-player::backdrop { background: rgba(0, 0, 0, .82); }
      .research-video-player header { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 12px; }
      .research-video-player h2 { font: 500 18px/1.4 system-ui, sans-serif; margin: 0; }
      .research-video-player button { padding: 7px 14px; background: transparent; color: #fff; border: 1px solid #91aab5; border-radius: 5px; cursor: pointer; }
      .research-video-player video { display: block; width: 100%; max-height: 76vh; background: #000; }
    </style>
    <header><h2></h2><button type="button" aria-label="Close video">Close</button></header>
    <video controls controlslist="nodownload" playsinline preload="metadata"></video>`;
  dialog.querySelector("h2").textContent = trigger.dataset.videoTitle || "Research video";
  const video = dialog.querySelector("video");
  video.src = trigger.dataset.videoSrc;
  dialog.querySelector("button").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (click) => {
    if (click.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    video.pause();
    video.removeAttribute("src");
    video.load();
    dialog.remove();
    trigger.focus({ preventScroll: true });
  });
  document.body.append(dialog);
  dialog.showModal();
  video.play().catch(() => {});
});
