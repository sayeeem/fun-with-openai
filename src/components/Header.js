import React from "react";

function Header({ resetAttempts }) {
  return (
    <header className="px-6 sm:px-24 py-6 flex items-center justify-between bg-shopify-header-green">
      <a
        href="https://internships.shopify.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://vidyard-client-services.s3.amazonaws.com/shopify/images/shopify-logo.png"
          alt="Shopify Logo"
          width={121}
        />
      </a>
      <div>
        <p>
          Made by:{" "}
          <a
            className="underline hover:no-underline font-bold"
            onClick={resetAttempts}
            href="https://sayeemahmed.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Sayeem
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
