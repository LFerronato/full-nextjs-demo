import Image from 'next/image'
import { useLoopOptions } from './_/hooks/useLoopOptions'

const Page = () => {
  const { option } = useLoopOptions()

  return (
    <div className="flex-center" style={{ margin: '3rem' }}>
      
      {option === 1 && (
        <Image
          src="https://media.giphy.com/media/hFmIU5GQF18Aw/giphy.gif"
          alt="giraffe waiting gif"
          width="200" height="300"
          style={{ borderRadius: '1rem', filter: 'opacity(0.4)' }}
        />
      )}
      
      {option === 2 && (
        <Image
          src="https://media.giphy.com/media/lP4jmO461gq9uLzzYc/giphy.gif"
          alt="giraffe waiting gif"
          width="450" height="300"
          style={{ borderRadius: '1rem', filter: 'opacity(0.4)' }}
        />
      )}
      
    </div>
  )
}

export default Page

// https://api.github.com/users/lferronato/repos

// https://countapi.xyz

// https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/br.svg
