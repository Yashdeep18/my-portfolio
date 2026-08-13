// Single funnel for runtime errors so nothing is discarded silently.
export function reportError(error, context = {}) {
  const normalized = error instanceof Error ? error : new Error(String(error));
  console.error(`[portfolio] ${context.source || 'unknown'}:`, normalized, context);
  return normalized;
}

export function installGlobalErrorHandlers(target = window) {
  target.addEventListener('error', event => {
    reportError(event.error || event.message, { source: 'window.error', filename: event.filename });
  });
  target.addEventListener('unhandledrejection', event => {
    reportError(event.reason, { source: 'unhandledrejection' });
  });
}
