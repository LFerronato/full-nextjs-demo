import dynamic from 'next/dynamic'

const GithubStatsTemplate = dynamic(import('./_/GithubStatsTemplate').then(mod => mod.Repos), {
  loading: () => (<article data-busy />),
})

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: 'url("https://media.giphy.com/media/sWFYgYFjHGugleQdO7/giphy.gif")',
        backgroundRepeat: 'repeat',
      }}
    >

      <GithubStatsTemplate />

    </div>
  )
}
