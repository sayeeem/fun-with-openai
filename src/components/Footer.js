import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center sm:justify-start py-16 px-24 bg-shopify-header-green">
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
    </footer>
  );
}

export default Footer;
