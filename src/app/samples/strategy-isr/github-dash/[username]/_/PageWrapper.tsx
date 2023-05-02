export const PageWrapper = ({style, ...rest}: DivProps) => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://media.giphy.com/media/sWFYgYFjHGugleQdO7/giphy.gif")',
        backgroundRepeat: 'repeat',
        ...style,
      }}
      {...rest}
    />

  )
}
