interface PropsText {
  title: string
  text: string
}

export default function Headline({ title, text }: PropsText) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
