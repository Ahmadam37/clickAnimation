document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('toggle-view').addEventListener('click', () => {
    // for all anchors within the list, add a view-transition-name attribute
    document.querySelectorAll('.movies li img').forEach((anchor, index) => {
        anchor.style.viewTransitionName = `movie-${index}`;
    });
    document.startViewTransition(() => {
        document.querySelector('.movies').classList.toggle('column');
    });
  });
});