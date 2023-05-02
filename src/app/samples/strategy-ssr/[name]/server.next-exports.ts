import { GetServerSideProps } from 'next'
import { StatsOfNamePageProps } from './page'

// run at SSR time - Server Side Rendering
export const getServerSideProps: GetServerSideProps<StatsOfNamePageProps> = async (ctx) => {
  const name = ctx.query.name && String(ctx.query.name)

  if (!name || name.length <= 1)
    return { redirect: { destination: '/samples/strategy-ssr', permanent: true } }

  const fetchAge = await fetch(`https://api.agify.io?name=${name}`).then(res => res.json())
  const fetchGender = await fetch(`https://api.genderize.io?name=${name}`).then(res => res.json())
  const fetchCountry = await fetch(`https://api.nationalize.io?name=${name}`)
    .then(res => res.json())
    .then(
      (data: { country: { country_id: string }[] }) => ({
        ...data,
        country: data.country.map(rs => ({
          ...rs,
          country_flag: `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${rs.country_id.toLowerCase()}.svg`,
        })),
      })
    )

  if (Math.random() >= 0.90)
    await new Promise(fn => setTimeout(fn, 4000))

  return {
    props: {
      stats: {
        fetchAge,
        fetchGender,
        fetchCountry,
      },
      name: name,
    },
  }
}
