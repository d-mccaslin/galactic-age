import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './age.js';

$(document).ready(function() {
  $('#formMain').submit(function(event) {
    event.preventDefault();
    //debugger;
    const nameField = $('#nameInput').val();
    const ageField = parseFloat($('#ageInput').val());
    const expectancyField = parseFloat($('#expectancyInput').val());

    const age = new Age(nameField,ageField,expectancyField);
    console.log(age.age);
    console.log("Mercury " + age.mercuryAge());
    console.log("Venus " + age.venusAge());
    console.log("Mars " + age.marsAge());
    console.log("Jupiter " + age.jupiterAge());

    console.log(" ");
    console.log("Mercury years left " + age.mercuryYearsLeft());

  })
})