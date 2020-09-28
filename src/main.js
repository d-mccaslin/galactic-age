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
  })
})