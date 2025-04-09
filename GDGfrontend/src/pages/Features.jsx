"use client";
import React from "react";
import '../index.css';


export default function Features() {
  return (
    <section className="mt-20 w-full max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ce09e34ed109460e9f80485e806d61e9/9684a45bc7223e4927c2cd078c95cd1efc279ae9?placeholderIfAbsent=true"
        alt="Features Banner"
        className="object-contain w-full aspect-[1.01] max-w-[1428px] max-md:max-w-full"
      />
      <div className="flex flex-col pr-9 pb-24 mt-5 w-full bg-blue-700 max-md:pr-5 max-md:mr-2 max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-start px-20 py-40 text-white min-h-[591px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ce09e34ed109460e9f80485e806d61e9/b2b3c26d479da792d8094308d502a071751847ba?placeholderIfAbsent=true"
            alt="Background Pattern"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col -mb-7 max-w-full w-[589px] max-md:mb-2.5">
            <h2 className="text-5xl font-bold leading-[55px] max-md:max-w-full">
              Explore endless possibilities with FinanceFlow
            </h2>
            <p className="self-start mt-24 text-lg leading-8 max-md:mt-10 max-md:max-w-full">
              From basics to expert strategies, our chatbot has you covered.
            </p>
          </div>
        </div>
        <button className="gap-1 self-center px-8 py-7 mt-16 text-base font-bold tracking-widest leading-none text-center text-blue-700 uppercase bg-white rounded-[80px] max-md:px-5 max-md:mt-10">
          Download App
        </button>
      </div>
    </section>
  );
}
