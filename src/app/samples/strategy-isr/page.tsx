import { Form } from './_page/Form'

const Page = () => {
  return (
    <div>
      <h1 style={{ margin: '1rem 0', fontSize: '1.2rem' }}>ISR - Incremental Static Regeneration</h1>
      <hr />

      <section>
        <h2 style={{ margin: '1rem 0', fontSize: '1.2rem' }}>📊 GitHub Dashboard</h2>
        <p style={{ margin: 0, fontSize: '0.7rem' }}>OBS 1: foi add um delay de 7s, no getStaticProps.</p>
        <p style={{ margin: 0, fontSize: '0.7rem' }}>OBS 2: revalida após 30s </p>

        <Form />
      </section>

    </div>
  )
}

export default Page
