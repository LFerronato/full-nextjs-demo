import useSWR from 'swr'

type FetcherArgs = Parameters<typeof fetch>
type SWRArgs = Parameters<typeof useSWR>

const basicFetcher = (...args: FetcherArgs) => fetch(...args).then(res => res.json())

export const useFetch = (url: string, config: { fetcher?: SWRArgs[1] } & SWRArgs[2]) => {
  const { fetcher, ...rest } = config

  const consideredFetcher = fetcher ?? basicFetcher

  return useSWR(url, consideredFetcher, { ...rest })
}
