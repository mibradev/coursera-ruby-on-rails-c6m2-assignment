(function() {
  "use strict"

  angular
    .module("capstone.cities")
    .controller("capstone.cities.CitiesController", CitiesController)

  CitiesController.$inject = ["capstone.cities.City"]

  function CitiesController(City) {
      var self = this

      self.cities = City.query()
      self.city = new City

      self.create = function() {
        self.city.$save().then(function(response) {
          self.cities.push(self.city)
          self.city = new City
        }).catch(onRejected)
      }

      self.edit = function(resource) {
        self.city = resource
      }

      self.update = function() {
        self.city.$update().catch(onRejected)
      }

      self.destroy = function() {
        self.city.$delete().then(function(response) {
          self.cities = self.cities.filter(city => city.id !== self.city.id)
          self.city = new City
        }).catch(onRejected)
      }

      function onRejected(response) {
        console.log(response)
      }
  }
})()
