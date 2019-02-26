(function() {
  "use strict"

  angular
    .module("capstone.cities")
    .directive("cities", CitiesDirective)

  CitiesDirective.$inject = ["capstone.CONFIG"]

  function CitiesDirective(CONFIG) {
    return {
      templateUrl: CONFIG.pages.cities,
      replace: true,
      bindToController: true,
      controller: "capstone.cities.CitiesController",
      controllerAs: "citiesVM",
      restrict: "E",
      scope: {}
    }
  }
})()
