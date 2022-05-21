import React from "react";

function Hero() {
  return (
    <section className="bg-shopify-hero-green py-10 xl:pt-0 flex flex-col lg:flex-row">
      <div className="flex-1 px-8 lg:pl-24 lg:pr-0 flex flex-col justify-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-black text-5xl text-center lg:text-left">
            Fun with GPT-3
          </h1>
          <h2 className="text-md text-center lg:text-left text-3xl text-gray-300">
            GPT-3 is a powerful AI model created by OpenAI. It can process plain
            text prompts and produce outputs that are hard to distinguish from
            human writing.
          </h2>
        </div>
      </div>
      <div className="flex-1 px-24">
        <img
          src="https://vidyard-client-services.s3.amazonaws.com/shopify/images/ai-banner.png"
          alt="AI Banner"
          className="w-96	my-0 mx-auto lg:w-fit"
        />
      </div>
    </section>
  );
}

export default Hero;
