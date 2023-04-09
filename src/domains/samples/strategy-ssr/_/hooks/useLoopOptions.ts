import { useEffect, useState } from 'react'

export const useLoopOptions = () => {
  const [option, setOption] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setOption(state => state === 1 ? 2 : 1)
    }, 8000)
    return () => clearTimeout(timer)
  }, [option])

  return { option }
}
