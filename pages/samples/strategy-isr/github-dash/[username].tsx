import type { GetStaticPaths, GetStaticProps } from 'next'
import { getUserProfileData, getUserTotalForks, getUserTotalStars } from '@/shared/lib/github-user-stats'

import type { UserData } from '@/domains/samples/strategy-isr/github-dash/[username]/_/GithubStatsTemplate/@types/userData'
import _Page from '@/domains/samples/strategy-isr/github-dash/[username]/page'
import _Layout from '@/domains/layout'
import { setHtmlHead } from '@/shared/components/HtmlHead'

type IProps = { userData: UserData }
export const getStaticProps: GetStaticProps<IProps> = async (ctx) => {
  const username = String(ctx.params?.username)
  if (!username)
    return { redirect: { destination: '/samples/strategy-isr', permanent: true } }

  console.time('get-stats-with-delay')
  const [data, stars, forks] = await Promise.all([
    getUserProfileData(username),
    getUserTotalStars(username),
    getUserTotalForks(username),
    new Promise(fn => setTimeout(fn, 7000)),
  ])
  console.timeEnd('get-stats-with-delay')

  const userData = {
    id: data?.id,
    name: data?.name,
    username,
    avatar_url: data?.avatar_url,
    url: data?.html_url,
    type: data?.type,
    company: data?.company,
    website: data?.blog,
    location: data?.location,
    email: data?.email,
    bio: data?.bio,
    twitter_username: data?.twitter_username,
    public_repos: data?.public_repos,
    public_gists: data?.public_gists,
    followers: data?.followers,
    following: data?.following,
    total_stars: stars,
    total_forks: forks,
    created_at: data?.created_at,
    updated_at: data?.updated_at,
  }

  return {
    props: { userData },
    revalidate: 30,
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [{ params: { username: 'vercel' } }], fallback: 'blocking' }
}

const GitHubDashboardPage: NextPageWithLayout<IProps> = ({ userData }) => {
  return <_Page userData={userData} />
}

GitHubDashboardPage.head = setHtmlHead({ title: 'Dash' })
GitHubDashboardPage.layout = _Layout

export default GitHubDashboardPage
