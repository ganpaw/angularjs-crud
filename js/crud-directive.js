(function() {
  'use strict';

  angular
    .module('crudDirectiveModule', [])
    .directive('entryForm', EntryFormDirective)
    .directive('iterateResults', IterateResultsDirective)

  /**
     =  is 2 way $scope -> <- directive binding
     & is for functions
   */
  function EntryFormDirective() {
    console.log("EntryFormDirective is invoked.");
    return {
      restrict: 'A',
      templateUrl: 'directives/entry-form.html',
      scope: {
        dealObj: "=",
        addFunc: "&",
        updateFunc: "&",
        clearFunc: "&",
        refreshFunc: "&",
        enableUpdateFlag: '='
      }
    }
  }

  /**
   One way $scope to directive binding
   No scope means directive page will have access to root controller scope (two way binding)
   */
  function IterateResultsDirective() {
    console.log("IterateResultsDirective is invoked.");
    return {
      restrict: 'A',
      templateUrl: 'directives/iterate-results.html'
      // scope:{
      //   removeFunc: "&",
      //   editFunc: "&"
      // }
      // scope: {
      //   dealsObj: "@"
      // }
    };
  }
})();
