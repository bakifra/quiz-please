'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
 const questData = [
  {
    q_text: 'Сколько длится марафон?',
    theme_id: '1',
    q_img: 'https://marathonec.ru/wp-content/uploads/2020/04/strategiya-na-marafone.jpg', 
    answer: '42',
  },
  {
    q_text: 'Сколько игроков в бейсбольной команде?',
    theme_id: '1',
    q_img: 'https://www.sovsport.ru/data/sovsport/preview/2000-01/20/images-5536-1538221547-620x458.jpg', 
    answer: '9',
  },
  {
    q_text: 'В каком виде спорта у вас был бы тачдаун?',
    theme_id: '1',
    q_img: 'https://media.istockphoto.com/id/1245928482/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5-%D0%BD%D0%B0-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%BC-%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%D0%B5-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2-%D0%BA-%D0%B8%D0%B3%D1%80%D0%B5-%D0%B2-%D0%BF%D0%BE%D0%BB%D1%83%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B5.jpg?s=612x612&w=0&k=20&c=xP6Aaso1sIC8WkkXSf_bt3HIDY3f8Agm0w7R-Om_kP4=', 
    answer: 'американский футбол',
  },
  {
    q_text: 'На столе стояло три стакана с ягодами. Вова съел один стакан ягод и поставил его на стол. Сколько стаканов стоит на столе?',
    theme_id: '2',
    q_img: 'https://thumbs.dreamstime.com/b/%D1%81%D1%82%D0%B0%D0%BA%D0%B0%D0%BD-%D1%81-%D1%8F%D0%B3%D0%BE%D0%B4%D0%B0%D0%BC%D0%B8-%D1%81%D0%B2%D0%B5%D0%B6%D0%B8%D0%B9-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BD%D0%B0-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-164951509.jpg', 
    answer: '3',
  },
  {
    q_text: 'Три человека ждали поезда три часа. Сколько времени ждал каждый из них?',
    theme_id: '2',
    q_img: 'https://kartinkof.club/uploads/posts/2022-04/1649580059_4-kartinkof-club-p-ugarnie-kartinki-pro-parovozik-tomas-4.jpg', 
    answer: '3 часа',
  },
  {
    q_text: 'Сколько лап у двух медвежат?',
    theme_id: '2',
    q_img: 'https://cameralabs.org/media/lab17/05/25/medvezhata-foto.jpg', 
    answer: '8',
  },
  {
    q_text: 'В первой коробке десять карандашей, во второй - столько же, сколько в первой, а в третьей - столько же, сколько во второй. Сколько карандашей в третьей коробке?',
    theme_id: '2',
    q_img: 'https://i.ytimg.com/vi/kSR4XyN_xKY/hqdefault.jpg', 
    answer: '10',
  },
  {
    q_text: 'Из какого города Юра?',
    theme_id: '3',
    q_img: 'https://v-tagile.ru/media/k2/items/cache/69c4a61a228e50ebfb8c1532a60323a5_XL.jpg', 
    answer: 'Нижный Тагил',
  },
  {
    q_text: 'Рекорд дистанции, которую Юра проехал на велосипеде (в км)?',
    theme_id: '3',
    q_img: 'https://marathonec.ru/wp-content/uploads/2021/08/skorost-velosipedista.jpg', 
    answer: '100',
  },
  {
    q_text: 'Верно ли что в Лизу ударила молния?',
    theme_id: '3',
    q_img: 'https://topchikmix.ru/wp-content/uploads/2023/04/kosplej-triss-merigold-iz-the-witcher-2-assassins-of-kings-e2f179e.jpg', 
    answer: 'верно',
  },
  {
    q_text: 'В каком году Юра пришёл работать в Elbrus?',
    theme_id: '3',
    q_img: 'https://i.ytimg.com/vi/NZ07rOopPb0/maxresdefault.jpg', 
    answer: '2020',
  },
  {
    q_text: 'У Лизы есть полулысый кот, верите?',
    theme_id: '3',
    q_img: 'https://files.slack.com/files-pri/T04V5DDHUN8-F05AC1STRNZ/img_3583.jpg', 
    answer: 'да',
  },
  {
    q_text: 'У Лизы есть высшее театральное образование?',
    theme_id: '3',
    q_img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Ana_Maria_Ventura_como_Altisidora_en_%22La_enamorada_del_rey%22_%281988%29.jpg', 
    answer: 'да',
  },

  {
    q_text: 'Любимый мульт Артёма - Крутые Бобры ',
    theme_id: '3',
    q_img: 'https://avatars.dzeninfra.ru/get-zen_doc/3420563/pub_5efd9d6e7c8a441248d0d8b8_5efda2d6883e4d7dcbfd923d/scale_1200', 
    answer: 'нет',
  },
  {
    q_text: 'Артём выступал на сцене с юмористическими импровизациями',
    theme_id: '3',
    q_img: 'https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/30002/original.jpg', 
    answer: 'да',
  },
  {
    q_text: 'Что продаёт Артём?',
    theme_id: '3',
    q_img: 'https://165dc6ae-1b27-4856-8ca7-b1edf208847c.selcdn.net/images/thumbs/materials/plates/24013/half-image/16421.png?1678454967', 
    answer: 'мотоцикл',
  },
  {
    q_text: 'У кого из преподавателей есть рабочая жена и домашняя?',
    theme_id: '3',
    q_img: 'https://icdn.lenta.ru/images/2018/06/09/15/20180609151737507/detail_046edb0ee029c2e41207486a55ac14ce.jpg', 
    answer: 'Толя',
  },
  {
    q_text: 'Кто чихает как салют на 9-е мая?',
    theme_id: '3',
    q_img: 'https://ticketstour.ru/image/cache/catalog/marshruty/sankt-petersburg/vodniye_progulki/salut-9-maya/depositphotos_227625066_xl-2015_1-1400x1000_g_90.webp', 
    answer: 'Аня',
  },
  {
    q_text: 'У Толи есть такса, по имени Лютик, верим?',
    theme_id: '3',
    q_img: 'https://s8.stc.all.kpcdn.net/family/wp-content/uploads/2022/04/karlikovaya-taksa-960x540.jpg', 
    answer: 'да',
  },
  {
    q_text: 'Назовите родной город Анатолия',
    theme_id: '3',
    q_img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Biysk_-_Sovetskaya_Street.JPG', 
    answer: 'Бийск',
  },
  {
    q_text: '  Кто желает каждое утро “Счастья, здоровья, мужа богатого“?',
    theme_id: '3',
    q_img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/5pin180dinplug.jpg', 
    answer: 'Аня',
  },
  {
    q_text: 'название первой группы Эльбруса',
    theme_id: '3',
    q_img: 'http://www.dom-enota.ru/wp-content/uploads/2013/12/%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA-1.jpg', 
    answer: 'еноты',
  },
  {
    q_text: 'В честь какого родственника Гоши назван Эльбрус?',
    theme_id: '3',
    q_img: 'https://s14.stc.yc.kpcdn.net/share/i/12/12168998/wr-960.webp', 
    answer: 'дедушка',
  }
 ];
 const questions = questData.map((quest) => ({
  ...quest,
  createdAt: new Date(),
  updatedAt: new Date(),
}));
await queryInterface.bulkInsert('Questions', questions);
},

async down(queryInterface) {
await queryInterface.bulkDelete('Questions');
},
};
