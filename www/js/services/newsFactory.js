angular.module('starter.services')

.factory('NewsFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [{
    id: 0,
    newsTitle: '¡Skrillex en Costa Rica!',
    newsContent: 'Un hábil lector del público, Skrillex, compartió ingeniosas combinaciones que mantuvieron a sus fanáticos de puntillas, gritando y saltando sin parar. Concluido el espectáculo a las 8 p. m., los productores del evento informaron de que el cierre del festival, a cargo de Moby, se trasladaría para la tarima oeste. Originalmente se había programado para la tarima del bosque, donde el espacio es más limitado.',
    eventBanner: '../img/skrillex-banner.jpg',
    eventDate: '12 Abril, 2015'
  }, {
    id: 1,
    newsTitle: 'Fiesta en la playa',
    newsContent: 'Al ritmo de deephouse Corona impulsa una campaña en la cual su objetivo principal es la concientización del cuidado de las playas mexicanas, Movimiento Playa Corona es un proyecto para la concientización de la conservación de dichas playas.',
    eventBanner: '../img/beach-party.jpg',
    eventDate: '7 Abril, 2015'
  }, {
    id: 2,
    newsTitle: 'Música en vivo',
    newsContent: '¡Dése el gusto! Este sábado, de 11 AM a 6 PM, una parrillada con choripán, el famoso sándwich de las parrilladas argentinas, lo espera en el Centro Gastronómico Sabores. El lugar tendrá sus puertas abiertas a todo público. ¡Venga y conozca sus instalaciones y los cursos que se imparten! Se ubica en Escazú.',
    eventBanner: '../img/live-music.jpg',
    eventDate: '15 Marzo, 2015'
  }, {
    id: 3,
    newsTitle: 'Inauguración de nueva disco',
    newsContent: 'Las obras de la nueva discoteca Boom Boom Room han finalizado y desde GranadaMarcha.com os traemos en exclusiva las primeras imágenes de la discoteca. Granada ha cambiado y uno de sus clubes más emblemáticos también… Si conocisteis Granada 10 no conocéis Boom Boom Room.',
    eventBanner: '../img/disco.jpg',
    eventDate: '5 Febrero, 2015'
  }];

  return {
    all: function() {
      return news;
    },
    // remove: function(notice) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(newsId) {
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id === parseInt(noticeId)) {
          return stories[i];
        }
      }
      return null;
    }
  };
});
