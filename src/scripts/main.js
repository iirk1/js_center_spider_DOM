'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const positionLeft = wall.offsetWidth / 2 - 25;
const positionRight = wall.offsetHeight / 2 - 25;

spider.style.left = `${positionLeft}px`;
spider.style.top = `${positionRight}px`;
