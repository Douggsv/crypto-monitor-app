import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-5 bg-gradient-to-r">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
            <div className="sm:text-center">

              <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                Cryptos
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
                {/* OJO LO DE TRACKING */}
                Digital money for digital world.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Cryptocurrencies are digital or virtual currencies that use cryptography for security
                and are decentralized, meaning they are not controlled by any goverment.

              </p>
            </div>

            {/* Main content - crypto cards */}
            <Ticker />

            <div className="mt-20 pt-4 text-center">
              <p className="text-gray-400">Powered by</p>
              <a href="https://www.binance.com" className="underline text-indigo-600" target="blank" rel="noreferrer">
                Binance</a>
            </div>
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
