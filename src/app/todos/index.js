import { Todos } from './todos.component';

import { TodosService } from './todos.service';

(angular => {
  angular
    .module('todos', [])
    .component('todos', Todos)

    .service('todosService', TodosService)
  ;
})(angular || window.angular);