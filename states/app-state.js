export class AppState {
  constructor($timeout) {
    this.$timeout = $timeout;
    this._counter = 0;
  }

  get counter() { return this._counter }
  set counter(value) { this._counter = value }
  increment() { this._counter++ }
  decrement() { this._counter-- }

  incrementIfOdd() {
    if (this.isOdd()) this.increment();
  }

  isOdd() {
    return this._counter % 2 === 1;
  }

  incrementAsync(delay = 1000) {
    this.$timeout(this.increment.bind(this), delay);
  }
}
