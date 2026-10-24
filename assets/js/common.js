$(document).ready(function () {
  // Load and play publication videos only while their cards are visible.
  const previewVideos = document.querySelectorAll("video.preview-video");
  const visibleVideos = new Set();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const playPreview = (video) => {
    if (!document.hidden && !reducedMotion.matches) {
      video.play().catch(() => {});
    }
  };
  if ("IntersectionObserver" in window) {
    const previewObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            visibleVideos.add(target);
            playPreview(target);
          } else {
            visibleVideos.delete(target);
            target.pause();
          }
        });
      },
      { threshold: 0.1 }
    );
    previewVideos.forEach((video) => previewObserver.observe(video));
    document.addEventListener("visibilitychange", () => {
      visibleVideos.forEach((video) => (document.hidden ? video.pause() : playPreview(video)));
    });
    reducedMotion.addEventListener("change", () => {
      visibleVideos.forEach((video) => (reducedMotion.matches ? video.pause() : playPreview(video)));
    });
  }

  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
