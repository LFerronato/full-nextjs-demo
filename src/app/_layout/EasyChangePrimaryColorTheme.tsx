import { useEffect, useState } from 'react'

const INITIAL = '#1095c1'

// It is disable for now
// TODO: ainda não tá 100%
export const EasyChangePrimaryColorTheme = () => {
  const [color, setColor] = useState<string>()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const root = document.querySelector('[data-theme=dark]') as HTMLElement
    if (!root) return

    const storedColor = localStorage.getItem('css-var--primary')
    if (!storedColor) {
      localStorage.setItem('css-var--primary', INITIAL)
      setColor(INITIAL)
      return
    }

    if (!color) {
      setColor(storedColor)
      return
    }

    root.style.setProperty('--primary', color)
    root.style.setProperty('--primary-hover', color + 'BB')
    root.style.setProperty('--primary-focus', color + '1f')
    localStorage.setItem('css-var--primary', color)
  }, [color])

  return (
    <input
      type="color"
      value={color}
      onChange={e => setColor(e.target.value)}
      style={{
        height: '20px', width: '20px',
        margin: '0 10px', padding: 0,
        border: 0, outline: 'none',
        // borderRadius: '999px',
        position: 'absolute', bottom: 35, left: 5,
      }} />
  )
}
