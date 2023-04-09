import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{ textAlign: 'center', minHeight: '100vh', paddingTop: '1rem', }}
    >
      <h1>Oops! 404</h1>
      <p>Oops! The page you requested could not be found.</p>
      <div>
        <Image
          src="https://media.giphy.com/media/aYpmlCXgX9dc09dbpl/giphy.gif"
          alt="Sad cat 404 gif"
          width="480" height="480"
          style={{ borderRadius: '1rem' }}
        />
      </div>
    </div>
  )
}
