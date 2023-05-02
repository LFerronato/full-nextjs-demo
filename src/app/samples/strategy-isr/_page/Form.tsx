import { useRouter } from 'next/router'
import { useState, type FormEventHandler } from 'react'

export const Form = () => {
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
  )
}
