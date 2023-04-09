import _StatsOfNamePage, { type StatsOfNamePageProps } from '@/domains/samples/strategy-ssr/[name]/page'
import _Layout from '@/domains/samples/strategy-ssr/layout'
import { HtmlHead } from '@/shared/components/HtmlHead'
import { GetServerSideProps } from 'next'

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

const StatsOfNamePage: NextPageWithLayout<StatsOfNamePageProps> = ({ stats, name }) => {
  return (
    <>
      <HtmlHead title={name} />
      <_StatsOfNamePage stats={stats} name={name} />
    </>
  )
}

StatsOfNamePage.layout = _Layout

export default StatsOfNamePage
