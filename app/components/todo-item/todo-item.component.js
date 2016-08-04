'use strict';

angular.module('todoItem', []).component('todoItem', {
  templateUrl: 'components/todo-item/todo-item.component.html',
  controller: [function TodoItemController() {
    var ctrl = this;

    function compareDone(a, b) {
      if (a.done && !b.done) return 1;
      else if (!a.done && b.done) return -1;
      else return 0;
    }

    ctrl.sortList = function () {
      ctrl.list.sort(compareDone);
    };

    ctrl.toggleDone = function () {
      ctrl.item.done = !ctrl.item.done;
    };

    ctrl.delete = function () {
      ctrl.onDelete({item: ctrl.item});
    }
  }],
  bindings: {
    item: "=",
    list: "=",
    onDelete: '&'
  }
});