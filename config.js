(function() {

  angular
    .module("displayApp")
    .config(function($routeProvider) {
      $routeProvider
        .when("/home", {
          template: "<home-page></home-page>"
        })
        .when("/learn", {
          template: "<learn-page></learn-page>"
        })
        .when("/volunteer", {
          template: "<volunteer-page></volunteer-page>"
        })
        .when("/donate", {
          template: "<donate-page></donate-page>"
        })
        .when("/contact-us", {
          template: "<contactus-page></contactus-page>"
        })
        .when("/newsletter", {
          template: "<newsletter-page></newsletter-page>"
        })
        .when("/tutor-application", {
          template: "<tutorapplication-page></tutorapplication-page>"
        })
        .otherwise({redirectTo: "/home"
      });
    });
})();
