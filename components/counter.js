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
  constructor(AppState) {
    Object.assign(this, { AppState });
  }
}
