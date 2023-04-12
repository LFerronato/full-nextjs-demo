import { useRouter } from 'next/router'
import { FormEventHandler, useState } from 'react'

const Page = () => {
  const { push } = useRouter()

  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setLoading(true)
    await push(`/samples/strategy-isr/github-dash/${username}`)
    setUsername('')
    setLoading(false)
  }

  return (
    <div>
      <h1 style={{ margin: '1rem 0', fontSize: '1.2rem' }}>ISR - Incremental Static Regeneration</h1>
      <hr />

      <section>
        <h2 style={{ margin: '1rem 0', fontSize: '1.2rem' }}>📊 GitHub Dashboard</h2>
        <p style={{ margin: 0, fontSize: '0.7rem' }}>OBS 1: foi add um delay de 7s, no getStaticProps.</p>
        <p style={{ margin: 0, fontSize: '0.7rem' }}>OBS 2: revalida após 30s </p>

        <form onSubmit={handleSubmit} className="p-rem" style={{ margin: 0 }}>
          <div>
            <label htmlFor="profile">GitHub Profile Username:</label>
            <input id="profile" type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </div>

          <button
            type="submit"
            aria-busy={loading}
            disabled={!username}
          >
            Ir para o Dashboard do seu Perfil
          </button>
        </form>
      </section>

    </div>
  )
}

export default Page
