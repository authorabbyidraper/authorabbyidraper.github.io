const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.textContent = 'Thank you for reaching out. Abby will be in touch soon.';
    form.reset();
  });
}
