'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// debugger;
var similarAdvert = {
  author: {
    avatar: 'img/avatars/user0' + getRandomInt(1, 9) + '.png'
  },

  offer: {
    title: '',
    addres: '',
  },
};

console.log(similarAdvert);
