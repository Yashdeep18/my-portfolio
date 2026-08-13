import React from 'react';

const mockRender = jest.fn();
const mockCreateRoot = jest.fn(() => ({ render: mockRender }));

jest.mock('react-dom/client', () => ({ createRoot: mockCreateRoot }));
jest.mock('./reportWebVitals', () => jest.fn());
jest.mock('./App', () => () => null);

const reportWebVitals = require('./reportWebVitals');

test('mounts the app into the root element and reports web vitals', () => {
  // Create React App resets mock implementations before each test.
  mockCreateRoot.mockReturnValue({ render: mockRender });

  const container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);

  require('./index');

  expect(mockCreateRoot).toHaveBeenCalledWith(container);
  expect(mockRender).toHaveBeenCalledTimes(1);
  expect(mockRender.mock.calls[0][0].type).toBe(React.StrictMode);
  expect(reportWebVitals).toHaveBeenCalledTimes(1);
});
