import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {

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
          <p>or</p>
          <button className="bg-accent px-4 py-2 rounded-lg hover:bg-accent-light text-white">Login</button>
        </div>
      </main>

    </>
  );
};

export default Home;
