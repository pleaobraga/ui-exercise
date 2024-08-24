import './global-action-button.styles.scss'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <button className="global-action-button" {...props}>
      {text}
    </button>
  )
}
