interface PropsTitle {
  title: string
}

export default function Title({ title }: PropsTitle) {
  return <h1>{title}</h1>
}
