'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  options: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Section 103 Destructuring arrays
// 1. Destructure categories
const [first, second] = restaurant.categories;
console.log(first, second);
// 2. Add a function that returns a destructured array of both a starterMenu and mainMenu item based on index number passed to it

const [starter, main] = restaurant.options(0, 1);
console.log(starter, main);
//3. Reverse the order of the function returns.
const [revMain, revStarter] = [main, starter];
console.log(revMain, revStarter);
//4. Create an example of a nested destructured array
const nested = [3, 4, [5, 6]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);
//5. Set default value for destructured array items
const shortArray = [1, 2];
const [a = 5, b = 5, c = 5] = shortArray;
console.log(a, b, c);
