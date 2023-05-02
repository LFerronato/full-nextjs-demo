import useGithubStats from 'react-github-user-stats'

export type UserData = ReturnType<typeof useGithubStats>['userData']
