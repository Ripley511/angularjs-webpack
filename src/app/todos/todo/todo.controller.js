export default class TodoController {
  /** @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  handleUpdateTodo() {
    this.updateTodo({todo: this.todo});
  }

  handleRemoveTodo() {
    this.removeTodo({todo: this.todo});
  }

  goToDetail() {
    this.$state.go('todo', {id: this.todo.id});
  }
}