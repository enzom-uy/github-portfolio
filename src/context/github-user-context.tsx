import { createContext, ReactNode, useState } from "react";
import { Repo } from "../types/repos";
import { GithubUser } from "../types/user";

interface IContext {
  user?: GithubUser;
  userData?: GithubUser;
  userRepos?: Repo[];
  getUserData?: (user: GithubUser, repos: Repo[]) => void;
  userSearched?: boolean;
}

const user: GithubUser = {
  avatar_url: "",
  bio: "",
  blog: "",
  login: "",
  company: "",
  created_at: "",
  email: null,
  events_url: "",
  followers: 0,
  followers_url: "",
  following: 0,
  following_url: "",
  gists_url: "",
  gravatar_id: "",
  hireable: false,
  html_url: "",
  id: 0,
  location: "",
  name: "",
  organizations_url: "",
  public_gists: 0,
  public_repos: 0,
  received_events_url: "",
  repos_url: "",
  site_admin: false,
  starred_url: "",
  type: "User",
  url: "",
};

const defaultValue = {
  user,
};

export const GithubUserContext = createContext<IContext>(defaultValue);
const { Provider } = GithubUserContext;

const GithubUserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<GithubUser>(user);
  const [userRepos, setUserRepos] = useState<Repo[]>()
  const [userSearched, setUserSearched] = useState<boolean>(false)

  const getUserData = (user: GithubUser, repos: Repo[]) => {
    const userDataCopy = userData;
    const {
      avatar_url,
      id,
      bio,
      url,
      blog,
      name,
      type,
      email,
      login,
      company,
      hireable,
      html_url,
      location,
      followers,
      following,
      gists_url,
      repos_url,
      created_at,
      events_url,
      site_admin,
      gravatar_id,
      starred_url,
      public_gists,
      public_repos,
      followers_url,
      following_url,
      organizations_url,
      received_events_url,
    } = user;
    setUserData({
      ...userDataCopy,
      avatar_url,
      bio,
      blog,
      login,
      id,
      url,
      name,
      type,
      email,
      company,
      hireable,
      html_url,
      location,
      followers,
      following,
      gists_url,
      repos_url,
      created_at,
      events_url,
      site_admin,
      gravatar_id,
      starred_url,
      public_gists,
      public_repos,
      followers_url,
      following_url,
      organizations_url,
      received_events_url,
    });
    setUserSearched(true)
    if (repos) {
      setUserRepos(repos)
    }
  };

  const contextValue: IContext = {
    userData,
    userRepos,
    getUserData,
    userSearched
  };
  return <Provider value={contextValue}>{children}</Provider>;
};

export default GithubUserContextProvider;
