const progress = document.getElementById("progress");

const scroll_progress = () => {
  if (progress) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  }
};

window.addEventListener("load", scroll_progress, true);

window.addEventListener(
  "scroll",
  () => {
    scroll_progress();
  },
  true
);
