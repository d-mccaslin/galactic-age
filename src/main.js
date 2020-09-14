import Age from './age.js';
//import './css/styles.css';

$(document).ready(function() {
  $('#formMain').submit(function(event) {
    event.preventDefault();
    const nameField = $('#nameInput').val();
    const ageField = parseInt($('#ageInput').val());

    const age = new Age(nameField,ageField);
    console.log(age.text());

  })
})