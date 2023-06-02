'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const themesData = [
      {
        theme_name: 'Спорт',
        theme_img:
          'https://cs12.pikabu.ru/images/big_size_comm/2021-06_4/1624199024153191399.png',
      },
      {
        theme_name: 'Математика 2 класс',
        theme_img:
          'https://edvisrb.ru/media/zoo/images/683880-1_ed193a6068796450f0d97534a681f208.jpg',
      },
      {
        theme_name: 'Великолепная семёрка Эльбруса 🏔 ',
        theme_img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRky-rfpOriWtmLDtZwesbPMedE5F1hXQ8Fqg&usqp=CAU',
      },

    ];

    const themes = themesData.map((theme) => ({
      ...theme,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Themes', themes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
  },
};
