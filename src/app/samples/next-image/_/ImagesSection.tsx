import Image from 'next/image'

const images = [
  'images/large-image1.jpg',
  'images/large-image2.jpg',
  'images/large-image3.jpg',
  'images/large-image4.jpg',
  'images/large-image5.jpg',
]

export const ImagesSection = () => {
  return (
    <section className="flex-center flex-col" style={{ position: 'relative', marginTop: '3rem' }}>

      <p><b>5 imagens de alta definição (2x)</b></p>

      {images.map(image => (
        <Image key={image}
          src={require(`@/../public/${image}`)}
          placeholder="blur"
          alt={image}
          quality={100}
          style={{ margin: '1rem 0' }}
          loading="lazy"
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
  )
}
