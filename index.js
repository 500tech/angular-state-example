import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import counter from './components/counter';
import { AppState } from './states/app-state';
import { default as DevTools, runDevTools} from './devTools';

angular.module('counter', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()]);
  })
  .directive('ngrCounter', counter)
  .service('AppState', AppState)
  .run(runDevTools);
