import Image from 'next/image'

const images = [
  'images/large-image1.jpg',
  'images/large-image2.jpg',
  'images/large-image3.jpg',
  'images/large-image4.jpg',
  'images/large-image5.jpg',
]

const SampleImagePage = () => {
  return (
    <div className="flex-center flex-col p-rem" style={{ height: '100%' }}>

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

      <section className="flex-center flex-col" style={{ position: 'relative', marginTop: '3rem' }}>
        <p><b>5 imagens de alta definição (2x)</b></p>
        {images.map(image => (
          <Image key={image}
            src={require(`@/../public/${image}`)}
            placeholder="blur"
            alt={image}
            quality={100}
            style={{ margin: '1rem 0' }}
          />
        ))}
        {images.map(image => (
          <Image key={image}
            src={require(`@/../public/${image}`)}
            placeholder="blur"
            alt={image}
            quality={100}
            style={{ margin: '1rem 0' }}
          />
        ))}
      </section>

    </div>
  )
}

export default SampleImagePage
