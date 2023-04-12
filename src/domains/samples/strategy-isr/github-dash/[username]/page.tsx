import type { UserData } from './_/GithubStatsTemplate/@types/userData'

import { GithubStatsTemplate } from './_/GithubStatsTemplate'

export default function Page({ userData }: { userData: UserData }) {
  return (
    <div
      style={{
        backgroundImage: 'url("https://media.giphy.com/media/sWFYgYFjHGugleQdO7/giphy.gif")',
        backgroundRepeat: 'repeat',
      }}
    >

      <GithubStatsTemplate userData={userData} />

    </div>
  )
}
