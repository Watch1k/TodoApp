'use strict';

angular.module('todoForm', []).directive('inputFocusFunction', function () {
  'use strict';
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      scope[attr.inputFocusFunction] = function () {
        element[0].focus();
      };
    }
  };
}).component('todoForm', {
  templateUrl: 'components/todo-form/todo-form.component.html',
  controller: ['$http', function ($http) {
    var ctrl = this;

    ctrl.list = [];
    ctrl.title = 'TodoApp';

    $http.get('./shared/todos.json').success(function (response) {
      ctrl.list = response;
    });

    function ItemList(title) {
      this.title = title;
      this.done = false;
    }

    ctrl.addTask = function () {
      if (ctrl.task) {
        ctrl.list.unshift(new ItemList(ctrl.task));
        ctrl.task = '';
      }
    };
  }]
});