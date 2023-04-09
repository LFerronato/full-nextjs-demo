import Image from 'next/image'

type Stats = Record<string, { country: { country_id: string, country_flag: string }[] }>
export type StatsOfNamePageProps = { stats: Stats, name: string }

const StatsOfNamePage = ({ stats, name }: StatsOfNamePageProps) => {
  return (
    <div className="flex-center flex-col" style={{ margin: '3rem' }}>
      <h2 style={{ textAlign: 'center' }}>{name}</h2>

      <div className="grid" style={{ gap: '1rem', width: '100%' }}>
        <div style={{ border: '1px solid' }}>
          <pre>
            {JSON.stringify(stats.fetchAge, null, 4)}
          </pre>
        </div>
        <div style={{ border: '1px solid' }}>
          <pre>
            {JSON.stringify(stats.fetchGender, null, 4)}
          </pre>
        </div>
        <div style={{ border: '1px solid' }}>
          <pre>
            {JSON.stringify(stats.fetchCountry, null, 4)}
          </pre>
          {stats.fetchCountry.country.map(country => (
            <Image
              key={country.country_id}
              src={country.country_flag}
              alt="Bandeira do país"
              width="100"
              height="70"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsOfNamePage

// https://api.github.com/users/lferronato/repos

// https://countapi.xyz
