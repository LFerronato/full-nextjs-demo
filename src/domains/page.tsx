import { cubanoFont } from '@/shared/styles/fonts'

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={cubanoFont.className} style={{ margin: '4rem 0', fontSize: '3rem' }}>Hey dev! 🚀</h1>

      <p>Default strategy of rendering is <b>SSG</b> (Static Site Generation) - at build-time</p>
    </div>
  )
}

export default HomePage
