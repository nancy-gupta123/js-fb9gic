// Import stylesheets
import './style.css';

// Write Javascript code!
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    
   if(results<18.6){
    //results.innerHTML = `<span>${bmi}</span>`;
     results.innerHTML='Under Weight'
   }
   else if(results>18.6 && result<24.9){
    //results.innerHTML = `<span>${bmi}</span>`;
     results.innerHTML='Normal weight'
   }
   else{
    //results.innerHTML = `<span>${bmi}</span>`;
     results.innerHTML='Over weight'
   }
  
  }
 
});

