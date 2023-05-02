import { useRouter } from 'next/router'
import { FormEventHandler, useEffect, useState } from 'react'
import { sleep } from '@/common/utils/sleep'

export const LoginPage = () => {
  const { push } = useRouter()

  const [loading, setLoading] = useState(true)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setLoading(true)
    // simulate a call for API
    await sleep(2000)
    // set cookie
    // await push('/samples/middleware/auth-routes/admin-painel')
    setLoading(false)
  }

  useEffect(() => {
    console.log('loading =>', loading)
  }, [loading])

  return (
    <div style={{ textAlign: 'center' }}>

      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>

        <div>
          <label htmlFor="input-user">User</label>
          <input id="input-user" placeholder="não necessário preencher" />
        </div>
        <div>
          <label htmlFor="input-user">Senha</label>
          <input id="input-user" placeholder="não necessário preencher" />
        </div>

        <button type="submit" data-busy={loading}>Sign-in</button>
      </form>

    </div>
  )
}

export default LoginPage
