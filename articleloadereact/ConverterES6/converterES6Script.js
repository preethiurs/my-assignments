
import  { convertKilometerToMiles,convertMilesToKilometer } from './lib';

document.getElementById('kilmeterbtn').addEventListener('click', () => {

    let km = document.getElementById("kilometer").value;
    document.getElementById("kilomresult").value = convertKilometerToMiles(km);

});

document.getElementById('milesbtn').addEventListener('click', () => {

    let miles = document.getElementById("miles").value;
    document.getElementById("milesresult").value = convertMilesToKilometer(miles);

});


