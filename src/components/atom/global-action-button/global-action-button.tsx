import './global-action-button.style.scss'

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
