// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which framer-motion's
// whileInView animations rely on.
class IntersectionObserverStub {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {}

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = IntersectionObserverStub;
window.IntersectionObserver = IntersectionObserverStub;
