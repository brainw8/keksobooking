'use strict';

var ADVERT_TITLES = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];
var priceLow = 1000;
var priceHight = 1000000;
var ADVERT_TYPES = ['flat', 'house', 'bungalo'];
var minRooms = 1;
var maxRooms = 3;
var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
var CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
var ADVERT_FEATURIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var ADVERT_PHOTOS = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// function getRandomLine() {
//
//   for (var i = 0; i < getRandomInt(0, ADVERT_FEATURIES.length + 1); i++) {
//
//     var lines = ADVERT_FEATURIES[i] + ' ';
//   }
// }


// debugger;
var similarAdvert = {
  author: {
    avatar: 'img/avatars/user0' + getRandomInt(1, 9) + '.png'
  },

  offer: {
    title: ADVERT_TITLES[getRandomInt(0, ADVERT_TITLES.length)],
    address: 'location.x' + ',' + 'location.y',
    price: getRandomInt(priceLow, priceHight + 1),
    type: ADVERT_TYPES[getRandomInt(0, ADVERT_TYPES.length)],
    rooms: getRandomInt(minRooms, maxRooms + 1),
    guests: getRandomInt(1, 5 + 1),
    checkin: CHECKIN_TIMES[getRandomInt(0, 3)],
    checkout: CHECKOUT_TIMES[getRandomInt(0, 3)],
    features: '',
    description: '',
    photos: ADVERT_PHOTOS
  },
  location: {
    x: getRandomInt(300, 901),
    y: getRandomInt(100, 501)
  }
};

// document.querySelector('.map').classList.remove('map--faded');
// var advertMap = document.querySelector('map__pins');
// var advertTemplate = document.querySelector('template').content.querySelector('.map__pin').cloneNode(true);
// advertTemplate.setAttribute('style', 'left:' + similarAdvert.location.x + 'px;' + ' top:' + similarAdvert.location.y + 'px;');
// advertTemplate.querySelector('img').setAttribute('src', similarAdvert.author.avatar + ' width="40" height="40" draggable="false"');
// var fragment = document.createDocumentFragment();


document.querySelector('.map').classList.remove('map--faded');

var advertMap = document.querySelector('.map__pins');

var advertTemplate = document.querySelector('template').content.querySelector('.map__pin').cloneNode(true);
advertTemplate.setAttribute('style', 'left:' + similarAdvert.location.x + 'px;' + ' top:' + similarAdvert.location.y + 'px;');
advertTemplate.querySelector('img').setAttribute('src', similarAdvert.author.avatar);
var fragment = document.createDocumentFragment();
fragment.appendChild(advertTemplate);
advertMap.appendChild(fragment);


var articleMapCard = document.querySelector('template').content.querySelector('.map__card').cloneNode(true);
articleMapCard.querySelector('img').setAttribute('src', similarAdvert.author.avatar);
articleMapCard.querySelector('h3').textContent = similarAdvert.offer.title;
articleMapCard.querySelector('.popup__price').innerHTML = similarAdvert.offer.price + '&#x20bd;/ночь';
articleMapCard.querySelector('h4').textContent = similarAdvert.offer.type;
articleMapCard.children[6].textContent = similarAdvert.offer.rooms + ' для ' + similarAdvert.offer.guests + ' гостей';
articleMapCard.children[7].textContent = 'Заезд после ' + similarAdvert.offer.checkin + ', ' + 'выезд до ' + similarAdvert.offer.checkout;
articleMapCard.children[9].textContent = similarAdvert.offer.description;

var fragmentMap = document.createDocumentFragment();
var articleMapAdvert = document.querySelector('.map');
fragmentMap.appendChild(articleMapCard);
articleMapAdvert.appendChild(fragmentMap);


// console.log(getRandomInt(0, ADVERT_TITLES.length));
console.dir(articleMapCard);
