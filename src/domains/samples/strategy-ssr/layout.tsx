import GlobalLayout from '@/domains/layout'
import { useRouter } from 'next/router'
import { FormEventHandler, useState } from 'react'

export const SampleSSRLayout = ({ children }: PropsWithChildren) => {
  const { push } = useRouter()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setLoading(true)
    await push(`/samples/strategy-ssr/${name}`)
    setName('')
    setLoading(false)
  }

  return (
    <GlobalLayout>
      <div>
        <p style={{ color: 'var(--primary-focus)', margin: 0 }}>layout.tsx</p>
        <div style={{ border: '1px solid var(--primary-focus)' }} className="p-rem">
          <h1 style={{ margin: '1rem 0', fontSize: '1.2rem' }}>SSR - Server Side Rendering</h1>
          <hr />
          <div style={{ fontSize: '0.8rem' }}>
            Com base no nome, vamos <b>estimar</b>:
            <li>País de origem <code>nationalize.io</code></li>
            <li>Idade <code>agify.io</code></li>
            <li>Masculino ou Feminino <code>genderize.io</code></li>
          </div>
          <hr />

          <form onSubmit={handleSubmit} className="p-rem" style={{ margin: 0 }}>
            <div>
              <label htmlFor="profile">Digite um nome:</label>
              <input id="profile" type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <button
              type="submit"
              aria-busy={loading}
              disabled={!name}
            >
              Ir para estatísticas do <b>{name}</b>
            </button>
          </form>
        </div>

        <hr />

        {children}

      </div>
    </GlobalLayout>
  )
}

export default SampleSSRLayout
