(function() {
  "use strict"

  angular
    .module("capstone.cities")
    .factory("capstone.cities.City", CityFactory)

  CityFactory.$inject = ["$resource", "capstone.CONFIG"]

  function CityFactory($resource, CONFIG) {
    return $resource(
      CONFIG.api_url + "/api/cities/:id",
      { id: "@id" },
      {
        update: {
          method: "PUT",
          transformRequest: transformRequest
        },
        save: {
          method: "POST",
          transformRequest: transformRequest
        }
      }
    )
  }

  function transformRequest(data) {
    return angular.toJson({ city: data })
  }
})()
