import type { UserData } from './_/GithubStatsTemplate/@types/userData'

import { GithubStatsTemplate } from './_/GithubStatsTemplate'
import { PageWrapper } from './_/PageWrapper'

export default function Page({ userData }: { userData: UserData }) {
  return (
    <PageWrapper>

      <GithubStatsTemplate userData={userData} />

    </PageWrapper>
  )
}
