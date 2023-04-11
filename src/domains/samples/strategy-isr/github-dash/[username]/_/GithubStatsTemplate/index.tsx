import { useRouter } from 'next/router'
import useGithubStats from 'react-github-user-stats'

import styles from './styles/Template.module.css'

import Stats from './Stats'
import Avatar from './Avatar'
import DataViewer from './DataViewer'

export const Repos = () => {
  const { query } = useRouter()
  const username = query.username as string
  const { error, loading, userData } = useGithubStats(username)

  if (loading) return <h2>Loading data..</h2>
  if (error) return <h2>ERROR: {error}</h2>
  if (!userData) return <h2>Not found!</h2>

  const accountCreatedAt = new Date(userData.created_at)
  return (
    <div>
      <div className={styles.container}>

        <div>
          <Avatar user={userData} />
          <h1 style={{ margin: 0 }}>
            <a className={styles.name} href={userData.url || '#'}>
              {userData.name}
            </a>
          </h1>

          <h2 className={styles.username}>@{userData.username}</h2>

          <Stats user={userData} />

          <p>Bio: {userData.bio || '--'}</p>
          <p>
            <span>🏠</span> {userData.location || '--'}
          </p>
          <p>
            <span>🚀</span> {userData.website || '--'}
          </p>
          <p>
            <span>🌍</span> {userData.company || '--'}
          </p>
          {userData.twitter_username && (
            <p>
              <span>🐤</span> Twitter @{userData.twitter_username}
            </p>
          )}
          <div className={styles.createdAt}>
            <p>This GitHub account was created at <span><b>{`${accountCreatedAt.getMonth() + 1}/${accountCreatedAt.getFullYear()}`}</b></span></p>
          </div>
        </div>

        <DataViewer userData={userData} />
      </div>

      <hr />
      <p></p>
      <p style={{ textAlign: 'center' }}>créditos para: <a href="https://github.com/munafio/react-github-user-stats" target="_blank" rel="noopener noreferrer"><code>munafio/react-github-user-stats</code></a></p>
      <hr />
    </div>
  )
}
