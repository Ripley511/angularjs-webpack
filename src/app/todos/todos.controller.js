export default class TodosController {
  /** @ngInject */
  constructor(todosService) {
    this.todosService = todosService;
  }

  updateTodo(todo) {
    this.todosService.updateTodo(this.todos, todo)
      .then(todos => {
        this.todos = todos;
      })
      .catch(err => console.log(err));
  }

  removeTodo(todo) {
    this.todosService.removeTodo(this.todos, todo)
      .then(todos => {
        this.todos = todos;
      })
      .catch(err => console.log(err));
  }
}