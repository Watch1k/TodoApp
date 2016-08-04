'use strict';

angular.module('todoList', []).component('todoList', {
  templateUrl: 'components/todo-list/todo-list.component.html',
  controller: [function TodoListController() {
    var ctrl = this;

    ctrl.removeItem = function (item) {
      var index = ctrl.list.indexOf(item);
      if (index > -1) {
        ctrl.list.splice(index, 1);
      }
    };
  }],
  bindings: {
    list: '='
  }
});