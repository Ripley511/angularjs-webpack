// Base modules
import './core';
import './shared';

// Application modules
import './todos';

(angular => {
  angular
    .module('main', [
      'core',
      'shared',
      'todos',
    ])
  ;
})(angular || window.angular);