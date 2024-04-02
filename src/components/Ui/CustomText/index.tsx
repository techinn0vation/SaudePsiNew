interface PropsText {
  text: string
  onClick: () => void
}

export default function Text({ text, onClick }: PropsText) {
  return <p onClick={onClick}>{text}</p>
}
