import { sharedRoutes, sharedConfig } from './shared.config';
import { sharedRun } from './shared.run';

import { ApiService } from './services/api.service';

(angular => {
  angular
    .module('shared', [])
    
    .config(sharedRoutes)
    .config(sharedConfig)

    .run(sharedRun)

    .service('apiService', ApiService)
  ;
})(angular || window.angular);