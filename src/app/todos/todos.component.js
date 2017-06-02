import template from './todos.html';
import controller from './todos.controller';

const bindings = {
  todos: '<',
};

export const Todos = {
  template, controller, bindings,
};