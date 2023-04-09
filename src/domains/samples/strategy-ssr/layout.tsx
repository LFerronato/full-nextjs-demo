import GlobalLayout from '@/domains/layout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const SampleSSRLayout = ({ children }: PropsWithChildren) => {
  const { push } = useRouter()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <GlobalLayout>
      <div>
        <h1 style={{ margin: '1rem 0' }}>SSR - Server Side Rendering</h1>
        <hr />
        Com base no nome, vamos <b>estimar</b>:
        <li>País de origem <code>nationalize.io</code></li>
        <li>Idade <code>agify.io</code></li>
        <li>Masculino ou Feminino <code>genderize.io</code></li>
        <hr />

        <div className="p-rem">
          <label htmlFor="profile">Digite um nome:</label>
          <input id="profile" type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>

        <button
          onClick={async () => {
            setLoading(true)
            await push(`/samples/strategy-ssr/${name}`)
            setName('')
            setLoading(false)
          }}
          aria-busy={loading}
        >
          Ir para estatísticas do <b>{name}</b>
        </button>

        <hr />

        {children}

      </div>
    </GlobalLayout>
  )
}

export default SampleSSRLayout
