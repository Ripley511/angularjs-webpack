/** @ngInject */
export function todosRoutes($stateProvider) {
  $stateProvider
    .state({
      name: 'todos',
      url: '/',
      template: `<todos todos="todosRouteCtrl.todos></todos>`,
      resolve: {
        /** @ngInject */
        todos: todosService => todosService.getAll(),
      },
      /** @ngInject */
      controller: todos => {
        this.todos = todos;
      },
      controllerAs: 'todosRouteCtrl',
    })
    .state({
      name: 'todo',
      url: '/todo/:id',
      template: `<todo todo=todoRouteCtrl.todo></todo>`,
      resolve: {
        /** @ngInject */
        todo: ($stateParams, todosService) => todosService.find($stateParams.id),
      },
      /** @ngInject */
      controller: todo => {
        this.todo = todo;
      },
      controllerAs: 'todoRouteCtrl',
    })
    ;
}