import * as CounterActions from '../actions/counter';

export default function counter() {
  return {
    restrict: 'E',
    controllerAs: 'counter',
    controller: CounterController,
    template: require('./counter.html'),
    scope: {}
  };
}

class CounterController {

  constructor(AppState, $scope) {
    Object.assign(this, { AppState });
  }

}
