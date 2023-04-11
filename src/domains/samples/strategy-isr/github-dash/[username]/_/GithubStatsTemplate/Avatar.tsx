import type { UserData } from './@types/userData'
import styles from './styles/Template.module.css'

export default function Avatar({ user }: { user: UserData }) {
  return (
    <div
      className={styles.avatar}
      style={{
        background: `url(${user.avatar_url}) center center no-repeat`,
        backgroundSize: 'cover',
      }}
    ></div>
  )
}
