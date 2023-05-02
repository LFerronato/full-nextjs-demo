import dynamic from 'next/dynamic'

const ImagesSection = dynamic(import('./_/ImagesSection').then(mod => mod.ImagesSection), {
  loading: () => <article aria-busy="true">Carregando</article>,
})

const SampleImagePage = () => {
  return (
    <div className="flex-col" style={{ height: '100%' }}>

      <div style={{ margin: '2rem 0' }}>
        <h1 style={{ margin: 0 }}>Image Component - {'<Image />'}</h1>
        <code>next/image</code>
      </div>

      <div>
        <p style={{ margin: 0 }}>algumas observações:</p>
        <li>Imagens são carregadas em 2 momentos: blur inicial, depois imagem completa</li>
        <li>
          Se tem varias imagens na página, vai carregar apenas o que está no &apos;campo de visão&apos;.
          As demais serão carregadas a medida que o usuário navegar pela página (scroll).
        </li>
      </div>

      <ImagesSection />

    </div>
  )
}

export default SampleImagePage
