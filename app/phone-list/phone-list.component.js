'use strict';

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl : 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

      /*
         This is because we set orderProp to 'age' in the controller. 
         So the binding works in the direction from our model to the UI.
          Now if you select "Alphabetically" in the drop-down menu, 
          the model will be updated as well and the phones will be reordered. 
          That is the data-binding doing its job in the opposite direction — 
          from the UI to the model.
      */

      this.orderProp = 'age';
    }
  });