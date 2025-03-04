const radioButton = document.querySelectorAll('input[name="unit"]');

radioButton.forEach((radio) => {
  radio.addEventListener('change', checkClick);
});

function checkClick(event) {
  const radio = event.target;
  if (radio.checked) {
    hideBorder(radio.value);
    showImperial(radio.value);
  } else {
    hideBorder(radio.value);
    showImperial(radio.value);
  }
}

function hideBorder(unit) {
  const metric = document.getElementById('metBorder');
  const imperial = document.getElementById('impBorder');
  if (unit === 'metric') {
    metric.classList.remove('border');
    imperial.classList.add('border');
  } else {
    metric.classList.add('border');
    imperial.classList.remove('border');
  }
}

function showImperial(unit) {
  const impericalForm = document.querySelectorAll('#impForm');
  const weigthUnitText = document.getElementById('weight-text');
  const heightUnitText = document.getElementById('height-text');
  const inputContainer = document.getElementById('inputContainer');
  if (unit === 'imperial') {
    impericalForm.forEach((form) => {
      form.classList.remove('hidden');
      form.classList.add('block');
    });
    inputContainer.classList.remove('lg:flex-row');
    heightUnitText.innerHTML = 'ft';
    weigthUnitText.innerHTML = 'st';
  } else {
    impericalForm.forEach((form) => {
      form.classList.remove('block');
      form.classList.add('hidden');
    });

    inputContainer.classList.add('lg:flex-row');
    heightUnitText.innerHTML = 'cm';
    weigthUnitText.innerHTML = 'kg';
  }
}
