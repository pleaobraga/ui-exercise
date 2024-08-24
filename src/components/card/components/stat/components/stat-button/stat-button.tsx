import './stat-button.styles.scss'

export interface StatButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind: 'increment' | 'decrement'
}

export function StatButton({ kind, ...props }: StatButtonProps) {
  return (
    <button
      className={`stat-button stat-button--${kind}`}
      {...props}
      aria-label={`${kind}--button`}
    >
      <span className="stat-button__content">
        {kind === 'increment' ? '+' : '-'}
      </span>
    </button>
  )
}
