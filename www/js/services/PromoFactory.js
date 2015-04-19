angular.module('urbanet.app.services')

.factory('PromoFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var promos = [{
    id: 2220,
    promoContent: 'Estéreo Picnic te espera. ¡Ganá 3 entradas!',
    promoBanner: '/img/picnic.jpg',
    eventDate: '12 Abril, 2015'
  }, {
    id: 3451,
    promoContent: '2 entradas dobles para Srillex, no te lo podés perder.',
    promoBanner: '/img/skrillex-banner.jpg',
    eventDate: '7 Abril, 2015'
  }, {
    id: 234,
    promoContent: 'Jarras cerveceras por la compra de tu entrada. *ingresa el número de tu cupón en el mensaje',
    promoBanner: '/img/jarra.jpg',
    eventDate: '15 Marzo, 2015'
  }, {
    id: 65756,
    promoContent: 'Ingresa gratis a las mejores discos del país, mirá la promo.',
    promoBanner: 'img/vertigo.jpg',
    eventDate: '5 Febrero, 2015'
  }];

  return {
    all: function() {
      return promos;
    },
    get: function(promotionsId) {
      console.log(promotionsId);
      for (var i = 0; i < promos.length; i++) {
        if (promos[i].id === parseInt(promotionsId)) {
          return promos[i];
        }
      }
      return null;
    }
  };
});
