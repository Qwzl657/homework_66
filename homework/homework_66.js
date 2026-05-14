'use strict';

window.onload = function () {

    const string3 = document.getElementById('string-3');
    const string5 = document.getElementById('string-5');
    const string2 = document.getElementById('string-2');
    const string6 = document.getElementById('string-6');
    const string4 = document.getElementById('string-4');
    const string1 = document.getElementById('string-1');

    console.log(string3.innerHTML);
    console.log(string5.innerHTML);
    console.log(string2.innerHTML);
    console.log(string6.innerHTML);
    console.log(string4.innerHTML);
    console.log(string1.innerHTML);

    const elements = document.getElementsByClassName('element');

    for (let i = 0; i < elements.length; i++) {
        if (i < 3) {
            elements[i].style.color = 'red';
        } else {
            elements[i].style.color = 'green';
        }
    }

    const container = document.getElementById('container');

    for (let i = 1; i <= 5; i++) {
        const newElement = document.createElement('div');
        newElement.classList.add('element');
        newElement.innerHTML = 'Element ' + i;
        container.append(newElement);
    }

};