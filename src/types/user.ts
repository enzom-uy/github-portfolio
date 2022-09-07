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
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: string
  hireable: boolean
  html_url: string
  id: number
  location: string
  name: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  type: "User"
  url: string
}
