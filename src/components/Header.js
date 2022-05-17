import React from "react";

function Header({ resetAttempts }) {
  return (
    <div className="py-6 px-24 flex justify-between bg-shopify-header-green">
      <img
        src="https://vidyard-client-services.s3.amazonaws.com/shopify/images/shopify-logo.png"
        alt="Shopify Logo"
        width={121}
      />
      <div>
        <span>
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
        </span>
      </div>
    </div>
  );
}

export default Header;
