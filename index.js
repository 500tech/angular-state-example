import angular from 'angular';
import counter from './components/counter';
import { AppState } from './states/app-state';

angular.module('counter', [])
  .directive('ngrCounter', counter)
  .service('AppState', AppState);
