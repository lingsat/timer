'use strict';

// Timer windows
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const millisecondEl = document.querySelector('.millisecond');

// Buttons
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');

// Events listeners
startBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    hour = minute = second = millisecond = 0;
    hourEl.innerHTML = '00';
    minuteEl.innerHTML = '00';
    secondEl.innerHTML = '00';
    millisecondEl.innerHTML = '00';
});

// Variables
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let interval;

let startTimer = function () {
    millisecond++;

    // Milliseconds
    if(millisecond < 9) {
        millisecondEl.innerHTML = `0${millisecond}`;
    }
    if (millisecond > 9) {
        millisecondEl.innerHTML = millisecond;
    }
    if(millisecond > 99) {
        second++;
        secondEl.innerHTML = `0${second}`;
        millisecond = 0;
        millisecondEl.innerHTML = `0${millisecond}`;
    }

    // Seconds
    if (second > 9) {
        secondEl.innerHTML = second;
    }
    if(second > 59) {
        minute++;
        minuteEl.innerHTML = `0${minute}`;
        second = 0;
        secondEl.innerHTML = `0${second}`;
    }

    // Minutes
    if (minute > 9) {
        minuteEl.innerHTML = minute;
    }
    if(minute > 59) {
        hour++;
        hourEl.innerHTML = `0${hour}`;
        minute = 0;
        minuteEl.innerHTML = `0${minute}`;
    }
    // Hours
    if (hour > 9) {
        hourEl.innerHTML = hour;
    }
    if(hour > 23) {
        hour = 0;
        hourEl.innerHTML = `0${hour}`;
    }
}