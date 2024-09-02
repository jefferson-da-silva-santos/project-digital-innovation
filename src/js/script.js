document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-login').addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.overflow = 'hidden';
    document.querySelector('.group-option-login').style.display = 'flex';
  });

  document.querySelector('.group-option-login').addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    document.querySelector('.group-option-login').style.display = 'none';
  })
});