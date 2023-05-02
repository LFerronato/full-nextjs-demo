/* eslint-disable no-console */

import type { GetStaticPaths, GetStaticProps } from 'next'
import { getUserProfileData, getUserTotalForks, getUserTotalStars } from '@/common/lib/github-user-stats'
import type { UserData } from './_/GithubStatsTemplate/@types/userData'

type PageProps = { userData: UserData }

// run at SSG time - Server Site Generation
export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
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

// run at SSG time - Server Site Generation
export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [{ params: { username: 'vercel' } }], fallback: 'blocking' }
}
