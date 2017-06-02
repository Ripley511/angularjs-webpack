export class TodosService {
  /** @ngInject */
  constructor($q, apiService) {
    this.$q = $q;
    this.apiService = apiService;
  }

  getAll() {
    return this.apiService.get('todos');
  }

  updateTodo(todos, todo) {
    const index = todos.findIndex(t => t.id === todo.id);
    if (index < 0) 
      return $q.reject(new Error('Cannot find todo'));

    return this.apiService.update(`todos/${todo.id}`, todo)
      .then(res => {
        const newList = todos.slice();
        return newList.splice(index, 1, res.data);
      });
  }

  removeTodo(todos, todo) {
    const index = todos.findIndex(t => t.id === todo.id);
    if (index < 0) 
      return $q.reject(new Error('Cannot find todo'));

    return this.apiService.remove(`todos/${todo.id}`)
      .then(res => {
        const newList = todos.slice();
        return newList.splice(index, 1);
      });
  }

  findTodo(todoId) {
    return this.apiService.find(`${this.baseUrl}/${todoId}`);
  }
}