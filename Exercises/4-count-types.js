'use strict';

const countTypesInArray = arr => {
  const coll = {};
  for (const elem of arr) {
    const state = typeof elem;
    coll[state] !== undefined ? coll[state] += 1 : coll[state] = 1;
  }
  return coll;
};

module.exports = { countTypesInArray };
