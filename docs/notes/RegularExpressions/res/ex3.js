const fruitsWithDescription = ["Red apple", "Orange orange", "Green Avocado"];

// Select descriptions that contains 'en' or 'ed' words endings:
const enEdSelection = fruitsWithDescription.filter((descr) =>
  /(en|ed)\b/.test(descr)
);

console.log(enEdSelection); // [ 'Red apple', 'Green Avocado' ]
