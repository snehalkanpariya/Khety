export function LoadingSpinner({ label = 'Loading', className = '' }) {
  return (
    <span className={`loading-indicator ${className}`.trim()} role="status">
      <span className="loading-indicator__spinner" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  )
}
