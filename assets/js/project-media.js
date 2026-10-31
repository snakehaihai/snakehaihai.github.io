(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-gif-card]").forEach(function (card) {
    var image = card.querySelector("[data-animation]");
    var button = card.querySelector("button");
    var playing = !reducedMotion;
    function update() {
      image.src = playing ? image.dataset.animation : image.dataset.still;
      button.textContent = playing ? "Ⅱ" : "▶";
      button.setAttribute("aria-label", (playing ? "Pause " : "Play ") + button.dataset.viewLabel);
    }
    if (reducedMotion) update();
    button.onclick = function () {
      playing = !playing;
      update();
    };
  });
})();
