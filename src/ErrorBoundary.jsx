import React from 'react';
import { reportError } from './errorReporting';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    reportError(error, { source: 'ErrorBoundary', componentStack: info.componentStack });
    if (this.props.onError) {
      this.props.onError(error, info);
    }
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <div
        role="alert"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <h1 className="text-3xl font-bold text-cyan-400">Something went wrong</h1>
        <p className="text-gray-300 max-w-xl">
          This page failed to render. Details were written to the browser console.
        </p>
        <pre className="text-sm text-gray-400 max-w-xl overflow-x-auto">{this.state.error.message}</pre>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors"
        >
          Reload page
        </button>
      </div>
    );
  }
}
