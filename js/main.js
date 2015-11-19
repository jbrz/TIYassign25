import angular from 'angular';
import 'angular-ui-router';

// config
import config from './config';

// Controllers
import HomeController from './controllers/home.controller';
import ContactController from './controllers/contact.controller';

// Services
import HomeService from './services/home.service';
import ContactService from './services/contact.service';

// Other Add-ons
import PARSE from './constants/constantly';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('ContactController', ContactController)
  .service('HomeService', HomeService)
  .service('ContactService', ContactService)
;