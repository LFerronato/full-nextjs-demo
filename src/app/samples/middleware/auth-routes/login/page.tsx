import { useRouter } from 'next/router'
import { FormEventHandler, useEffect, useState } from 'react'
import { sleep } from '@/common/utils/sleep'

const Banner = () => <span style={{ fontSize: '0.5rem', color: 'gray' }}>não necessário preencher</span>

export const LoginPage = () => {
  const { push } = useRouter()

  const [loading, setLoading] = useState(true)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    setLoading(true)
    // simulate a call for API
    await sleep(1000)
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

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="input-user">User <Banner /></label>
          <input id="input-user" />
        </div>
        <div>
          <label htmlFor="input-user">Senha <Banner /></label>
          <input id="input-user" />
        </div>

        <button type="submit" data-busy={loading}>Sign-in</button>
      </form>

    </div>
  )
}

export default LoginPage
