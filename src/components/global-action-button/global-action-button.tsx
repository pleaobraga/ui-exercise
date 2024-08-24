import './global-action-button.styles.scss'

export interface GlobalActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function GlobalActionButton({
  text,
  ...props
}: GlobalActionButtonProps) {
  return (
    <button className="global-action-button" {...props}>
      {text}
    </button>
  )
}
