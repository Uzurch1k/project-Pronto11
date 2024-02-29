const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const detectToggleOnce = e => {
  e.target.classList.add('toggled-once');
};

export const toggle =  checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', detectToggleOnce, { once: true });
});
