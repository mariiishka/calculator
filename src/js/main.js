function calculatorFieldSettings() {
  const calcField = document.querySelector('.calculator__input');

  calcField.addEventListener('input', () => {
    const replaced = calcField.value.replace(/[^0-9.+-/*()]/g, '');

    calcField.value = replaced;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  calculatorFieldSettings();
});