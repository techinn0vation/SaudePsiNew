interface PropsButton {
  text: string
  onClick: () => void
  href?: string
}

export default function Button({ text, onClick, href }: PropsButton) {
  if (href) {
    return (
      <a href={href}>
        <button>{text}</button>
      </a>
    )
  } else {
    return <button onClick={onClick}>{text}</button>
  }
}
