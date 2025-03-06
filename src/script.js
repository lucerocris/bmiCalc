const radioButton = document.querySelectorAll('input[name="unit"]');
const cmInput = document.getElementById('cmInput');
const kgInput = document.getElementById('kgInput');
let isImperial = false;
let metHeight = 0;
let metWeight = 0;

radioButton.forEach((radio) => {
  radio.addEventListener('change', checkClick);
});

cmInput.addEventListener('input', updateHeight);
kgInput.addEventListener('input', updateWeight);

function checkClick(event) {
  const radio = event.target;
  if (radio.checked) {
    hideBorder(radio.value);
    showImperial(radio.value);
    isImperial = radio.value === 'imperial';
    console.log('isImperial:', isImperial);
  }
}

function updateHeight(e) {
  if (!isImperial) {
    metHeight = parseFloat(e.target.value);
    calculateBMI();
  }
}

function updateWeight(e) {
  if (!isImperial) {
    metWeight = parseFloat(e.target.value);
    calculateBMI();
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

function calculateBMI() {
  if (!isImperial) {
    if (metHeight > 0 && metWeight > 0) {
      const heightInMeters = metHeight / 100;
      const bmi = metWeight / (heightInMeters * heightInMeters);
      bmi.toFixed(1);
      console.log(`BMI: ${bmi}`);
    }
  }
}
