document.querySelectorAll('Input[type="number"]').forEach(input => {
  input.addEventListener('Input', () => {
    if (input.value > 100)input.value = 100;
    if (input.value < 0) input.value = 0;
  });
});
