const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const controlMe = checkbox.parentElement.querySelector('.control-me');
    controlMe.textContent = checkbox.checked ? controlMe.getAttribute('data-content') : '';
  });
});