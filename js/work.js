document.addEventListener('DOMContentLoaded', function () {

  const filterBtns   = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyMsg     = document.getElementById('projects-empty');

  filterBtns.forEach(function (btn) {

    btn.addEventListener('click', function () {

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(function (card) {
        const category = card.getAttribute('data-category');
        const show = (filter === 'all' || category === filter);
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      if (emptyMsg) {
        emptyMsg.style.display = (visibleCount === 0) ? 'block' : 'none';
      }

    });

  });

});
