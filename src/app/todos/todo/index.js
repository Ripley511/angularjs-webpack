import template from './todo.html';
import controller from './todo.controller';

const bindings = {
  todo: '<',
  removeTodo: '&',
  updateTodo: '&',
};

export const Todo = {
  template, controller, bindings,
};