(function() {
  'use strict';

  angular
    .module('crudControllerModule', [])
    .controller('CrudController', CrudController);

  CrudController.$inject = ['$scope', '$log'];

  /* @ngInject */
  function CrudController($scope, $log) {

    var json = [{
        _id: 0,
        title: "HUAWEI Nexus 6p",
        salePrice: 299,
        originalPrice: 499
      },
      {
        _id: 1,
        title: "Thinkpad T520",
        salePrice: 699,
        originalPrice: 899
      },
      {
        _id: 2,
        title: "Dell Inspiron Laptop",
        salePrice: 750,
        originalPrice: 1000
      }, {
        _id: 3,
        title: "HP Printer",
        salePrice: 30,
        originalPrice: 100
      }, {
        _id: 4,
        title: "Asus Monitor",
        salePrice: 1900,
        originalPrice: 2500
      }

    ];

    // Init
    function init() {
      $log.info('init');
      $scope.deals = angular.copy(json);
    }
    init();

    // Create (C)
    $scope.add = function() {
      // Build/Retrieve the id for this new deal (it will _id of last + 1)
      $scope.deal._id = $scope.deals.length > 0 ? $scope.deals[$scope.deals.length - 1]._id + 1 : 0;
      console.log('$scope.deal._id: ' + $scope.deal._id);
      $scope.deals.push($scope.deal);
      $log.info("Added");
      $scope.clear();
    }

    // Update  (U)
    $scope.update = function() {
      $log.info("Update");
      console.log($scope.deal);
      $scope.deals[$scope.deal._id] = $scope.deal;
      //      angular.copy($scope.deal, $scope.deals[$scope.deal._id]); //deep copy
      $scope.clear();
    }

    // Show update view
    $scope.edit = function(id) {
      $log.info("Edit:" + id);
      $scope.clear();
      // Deep copy of $scope.deals[id] --> $scope.deal (if you wont do this, interpolation will change and no use of Update button)
      // So we will operate on independent object by making a deep copy.
      // https://docs.angularjs.org/api/ng/function/angular.copy
      angular.copy($scope.deals[id], $scope.deal);
      console.log($scope.deal);
      $scope.enableUpdate = true;
    }


    /**
     *  Delete (D)
     *  Here we will run 2 things
     *  We will itearte over deals and find out right deal object, we will delete deal object from memory that by using 'delete'
     *  but still we need to use splice to change the length and rearrange the array indexes
     */
    $scope.remove = function(id) {
      $log.info("Remove :" + id);
      if (id > -1) {
        for (var i = 0; i < $scope.deals.length; i++) {
          if ($scope.deals[i]._id == id) {
            delete $scope.deals[i];
            $scope.deals.splice(i, 1);
            break;
          }
        }
      }
    }

    //Clear Form
    $scope.clear = function() {
      $scope.deal = {};
      $scope.enableUpdate = false;
    }

    // Refresh
    $scope.refresh = function() {
      $log.info("Refresh");
      $scope.clear();
      init();
    }
  }
})();
