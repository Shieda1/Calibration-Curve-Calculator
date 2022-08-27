// https://www.omnicalculator.com/chemistry/calibration-curve#the-standard-addition-method

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const signalRadio = document.getElementById('signalRadio');
const sensitivityRadio = document.getElementById('sensitivityRadio');
const backgroundRadio = document.getElementById('backgroundRadio');
const concentrationRadio = document.getElementById('concentrationRadio');

let signal;
let sensitivity = v1;
let background = v2;
let concentration = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

signalRadio.addEventListener('click', function() {
  variable1.textContent = 'Sensitivity';
  variable2.textContent = 'Background';
  variable3.textContent = 'Concentration';
  sensitivity = v1;
  background = v2;
  concentration = v3;
  result.textContent = '';
});

sensitivityRadio.addEventListener('click', function() {
  variable1.textContent = 'Signal';
  variable2.textContent = 'Background';
  variable3.textContent = 'Concentration';
  signal = v1;
  background = v2;
  concentration = v3;
  result.textContent = '';
});

backgroundRadio.addEventListener('click', function() {
  variable1.textContent = 'Signal';
  variable2.textContent = 'Sensitivity';
  variable3.textContent = 'Concentration';
  signal = v1;
  sensitivity = v2;
  concentration = v3;
  result.textContent = '';
});

concentrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Signal';
  variable2.textContent = 'Sensitivity';
  variable3.textContent = 'Background';
  signal = v1;
  sensitivity = v2;
  background = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(signalRadio.checked)
    result.textContent = `Signal = ${computeSignal().toFixed(2)}`;

  else if(sensitivityRadio.checked)
    result.textContent = `Sensitivity = ${computeSensitivity().toFixed(2)}`;

  else if(backgroundRadio.checked)
    result.textContent = `Background = ${computeBackground().toFixed(2)}`;

  else if(concentrationRadio.checked)
    result.textContent = `Concentration = ${computeConcentration().toFixed(2)}`;
})

// calculation

function computeSignal() {
  return (Number(sensitivity.value) * Number(concentration.value)) + Number(background.value);
}

function computeSensitivity() {
  return (Number(signal.value) - Number(background.value)) / Number(concentration.value);
}

function computeBackground() {
  return Number(signal.value) - (Number(sensitivity.value) * Number(concentration.value));
}

function computeConcentration() {
  return (Number(signal.value) - Number(background.value)) / Number(sensitivity.value);
}