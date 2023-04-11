import type { UserData } from './@types/userData'
import styles from './styles/Template.module.css'

export default function DataViewer({ userData }: { userData: UserData }) {
  return (
    <div className={styles.dataViewer}>
      <h3 style={{ marginTop: 0 }}>Returned userData object:</h3>
      <pre><code>{JSON.stringify(userData, null, 2)}</code></pre>
    </div>
  )
}
