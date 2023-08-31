/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";

import Loader from "./Loader";
import Status from "./Status";
import { formatPrice } from "../utils";

interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
  };
}

function Crypto({ crypto }: Props) {
  const colorClassName = crypto.prevPrice ? crypto.price > crypto.prevPrice 
  ? "text-green-400" 
  : "text-red-400"
  : "text-white" ;
// OJITO CON ESTO PAPA
  return (
    // <div className="max-w p-6 bg-white border backdrop-blur-sm	 border-gray-100 rounded-lg shadow-lg"></div>
    <div className=" p-6 backdrop-blur-lg bg-gray-700 border-gray-100 rounded-3xl shadow-xl">
      <img className="h-[70px] mb-2 rounded-full transition ease-in-out delay-50 hover:brightness-125" src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.iconCode}.png`} />
      <a className="inline-flex items-center hover:text-blue-200 mt-6 mb-1 text-2xl font-semibold tracking-tight text-white" href={crypto.explorer} target="_blank" rel="noreferrer">
        {crypto.name}
    </a>
    <br />
      {crypto.price ? (
        <>
          <span className={colorClassName} title={`${crypto.price}`}>
            {formatPrice(crypto.price)}

          </span>
          <div className="mt-4">
            <Status label="24h High" value={formatPrice(crypto.highPrice)}/>
            <Status label="24h Low" value={formatPrice(crypto.lowPrice)}/>
            <Status label="Market" value={crypto.symbol}/>

          </div>
        </>

      ) : (
        <Loader/>
      )}
      <a className="inline-flex items-center text-blue-300 mt-6 text-sm" href={crypto.explorer} target="_blank" rel="noreferrer"> 
      Visit
      <svg
  className="w-5 h-5 ml-2"
  fill="currentColor"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
</svg></a>
    </div>
  );
}

export default memo(Crypto);
