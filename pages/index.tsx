import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        {/* <div className="text-lg font-semibold leading-8 items-center pt-4 item-center mx-auto w-full drop-shadow-2xl p-4 bg-gray-900 text-gray-100 text-center">
          CryptoMonitor</div> */}
        <div className="py-0 bg-gradient-to-r from-gray-500 to-gray-900 ">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            <div className="text-center py-5 mb-10">

              <h2 className="text-lg font-semibold leading-8 text-white items-center">
                CryptoMonitor
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tighter text-white drop-shadow-lg sm:text-4xl">
                {/* OJO LO DE TRACKING */}
                A decentralized world, much better.
              </p>
              <p className="mx-auto mt-6 max-w-2xl md:text-lg xl:text 2xl:text leading-6 text-gray-200 sm:text-sm">
              Real-time cryptocurrency trackers can be a useful tool for cryptocurrency 
                investors and traders. They allow users to see how prices 
                move in real time, which can help them make informed investment decisions.

              </p>
            </div>

     
            <Ticker />

            
          </div>
          <footer className="mt-20 pt-4 item-center mx-auto w-full text-sm drop-shadow-2xl p-4 bg-gray-900 text-gray-100">
      <div className="text-center">
        <p>
          Developed by
          <span> </span>
          <a className="font-semibold underline text-blue-400 hover:text-blue-200" href="https://www.linkedin.com/in/douglasmarquezsvizzero/"
            >Douglas Marquez</a>

        </p>
      </div>
    </footer>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
