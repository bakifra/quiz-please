'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const usersData = [
      {
        name: 'Друзь',
        password: '123',
        score: 10000,
      },
      {
        name: 'Скипский',
        password: '222',
        score: 9999,
      },
      {
        name: 'Айсен Колесов',
        password: '9889',
        score: 4,
      },
      {
        name: 'АняТолий',
        password: '666666666',
        score: 789,
      },
      {
        name: 'Билл Хэрингтон',
        password: '3212',
        score: 1337,
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
