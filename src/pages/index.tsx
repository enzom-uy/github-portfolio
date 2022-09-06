import type { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { User } from "../types/user";
import { authOptions } from "./api/auth/[...nextauth]";

const Home: NextPage<{ user: User }> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Github portfolio</title>
        <meta name="description" content="Github portfolio website, created by enzom-uy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex items-center justify-center h-screen flex-col gap-4">
        <h1 className="font-semibold text-[1.6rem] text-center">Welcome to Github portfolio</h1>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-2">
            <p className="font-medium">Search</p>
            <input type="text" className="input h-auto focus:outline-none" />
          </div>
          {!user && <><p>or</p>
            <button className="bg-accent px-4 py-2 rounded-lg hover:bg-accent-light text-white" onClick={() => signIn('github')}>Login</button></>}
        </div>
      </main>

    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  const user = session?.user
  if (!session) {
    return {
      redirect: {
        destination: 'https://google.com/',
        permanent: false
      }
    }
  }

  return {
    props: {
      user
    }
  }

}
