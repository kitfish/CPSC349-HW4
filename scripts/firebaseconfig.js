(function (window) {
    'use strict';

    var App = window.App || {};

    var FirebaseConfig = {
      apiKey: "AIzaSyBcepbAHowINtMZTU6sISBGY_zMC1mhMA4",
      authDomain: "coffeerun-171ec.firebaseapp.com",
      projectId: "coffeerun-171ec",
      storageBucket: "coffeerun-171ec.appspot.com",
      messagingSenderId: "934412229676",
      appId: "1:934412229676:web:3933049ce239a7452c0589"
    };

    App.FirebaseConfig = FirebaseConfig;
      firebase.initializeApp(App.FirebaseConfig);
      window.App = App;
  })(window);

  
/*
(function (window) {
    ‘use strict’;
    var App = window.App || {};
var FirebaseConfig = {
…  (your data here)
};
App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;
})(window);

*/