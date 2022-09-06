import * as z from 'zod'
import { createRouter } from './context'
import axios from 'axios'

const githubGetUserUrl = `https://api.github.com/users`
export const userRouter = createRouter().mutation("getUser", {
  input: z.object({
    userName: z.string()
  }),
  async resolve({ input }) {
    let error
    const userData = await axios.get(`${githubGetUserUrl}/${input.userName}`)
    console.log(`${githubGetUserUrl}/${input.userName}`)
    if (!userData) {
      error = 'No user was found.'
    }
    const userRepos = await axios.get(`${githubGetUserUrl}/${input.userName}/repos`)
    return { userData, userRepos, error }
  }
})
