(function() {
  "use strict"

  angular
    .module("capstone")
    .config(RouterFunction)

  RouterFunction.$inject = [
    "$stateProvider",
    "$urlRouterProvider",
    "capstone.CONFIG"
  ]

  function RouterFunction($stateProvider, $urlRouterProvider, CONFIG) {
    $stateProvider.state("home", {
      url: "/",
      templateUrl: CONFIG.pages.home
    })

    $urlRouterProvider.otherwise("/")
  }
})()
