export type UserSession = {
  name: string
  email: string
  image: string
}

export type GithubUser = {
  avatar_url: string
  bio: string
  blog: string
  login: string
  company: string
  created_at: string
  email: null
  followers: number
  following: number
  gists_url: string
  gravatar_id: string
  hireable: boolean
  html_url: string
  id: number
  location: string
  name: string
  public_gists: number
  public_repos: number
  repos_url: string
  site_admin: boolean
  type: 'User'
}
