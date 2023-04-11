import { useRouter } from 'next/router'
import { useState } from 'react'

const Page = () => {
  const { push } = useRouter()

  const [username, setUsername] = useState('LFerronato')

  return (
    <div>
      <h1 style={{ margin: '1rem 0' }}>ISR - Incremental Static Regeneration</h1>
      <hr />

      <section>
        <h2 style={{ margin: '2rem 0' }}>📊 GitHub Dashboard</h2>

        <div className="p-rem">
          <label htmlFor="profile">GitHub Profile Username:</label>
          <input id="profile" type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </div>

        <button
          onClick={async () => {
            // setLoading(true)
            await push(`/samples/strategy-isr/github-dash/${username}`)
            // setName('')
            // setLoading(false)
          }}
        // aria-busy={loading}
        >
          Ir para o Dashboard do seu Perfil
        </button>
      </section>

    </div>
  )
}

export default Page
