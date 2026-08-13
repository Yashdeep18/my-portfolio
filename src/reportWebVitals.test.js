import reportWebVitals from './reportWebVitals';

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}));

const webVitals = require('web-vitals');

const METRIC_GETTERS = ['getCLS', 'getFID', 'getFCP', 'getLCP', 'getTTFB'];

// web-vitals is pulled in through a dynamic import, so registration happens
// after the call returns.
const flushPromises = () => new Promise((resolve) => setTimeout(resolve, 0));

test('registers every web-vitals metric with the given callback', async () => {
  // A plain function rather than jest.fn(): mocks are created in another realm
  // and therefore fail the `instanceof Function` guard in reportWebVitals.
  const onPerfEntry = () => {};

  reportWebVitals(onPerfEntry);
  await flushPromises();

  METRIC_GETTERS.forEach((getter) => {
    expect(webVitals[getter]).toHaveBeenCalledWith(onPerfEntry);
  });
});

test.each([
  ['undefined', undefined],
  ['null', null],
  ['a non-function value', 'not a function'],
])('does nothing when called with %s', async (_label, value) => {
  reportWebVitals(value);
  await flushPromises();

  METRIC_GETTERS.forEach((getter) => {
    expect(webVitals[getter]).not.toHaveBeenCalled();
  });
});
