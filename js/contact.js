document.addEventListener('DOMContentLoaded', function () {

  const form       = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  const submitBtn  = form ? form.querySelector('[type="submit"]') : null;

  if (!form || !submitBtn) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();   

    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    setTimeout(function () {
      form.reset();

      submitBtn.disabled    = false;
      submitBtn.textContent = 'Send Message';

      if (successMsg) {
        successMsg.style.display = 'block';

        setTimeout(function () {
          successMsg.style.display = 'none';
        }, 5000);
      }
    }, 1000);

  });

});
