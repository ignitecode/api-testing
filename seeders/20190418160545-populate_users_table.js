'use strict';
const _ = require('lodash');
const faker = require('faker');

// Runs this 50 times!
const users = _.times(50, () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.imageUrl(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: +faker.address.zipCode().substring(0, 5),
    createdAt: new Date(),
    updatedAt: new Date()
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
