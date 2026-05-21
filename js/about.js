document.addEventListener('DOMContentLoaded', function () {

  const skillItems = document.querySelectorAll('.skill-item');

  skillItems.forEach(function (item) {

    item.addEventListener('mouseenter', function () {
      skillItems.forEach(function (other) {
        if (other !== item) {
          other.style.opacity = '0.45';
        }
      });
    });

    item.addEventListener('mouseleave', function () {
      skillItems.forEach(function (other) {
        other.style.opacity = '';
      });
    });

  });

});
