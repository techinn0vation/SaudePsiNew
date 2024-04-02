interface PropsText {
  title: {
    mainText: string
    pseudoText: string
  }
  text: string
}

export default function HeadlineHero({ title, text }: PropsText) {
  return (
    <div>
      <h1>
        {title.mainText}
        <span>{title.pseudoText}</span>
      </h1>
      <p>{text}</p>
    </div>
  )
}
