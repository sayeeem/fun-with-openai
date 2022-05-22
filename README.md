# Checkout the app Live

https://sayeem-openai-shopify.netlify.app/

# Features

- Enter a prompt for a response from OpenAI
- Each result includes the original prompt and a response from OpenAI
- Display responses in a sorted from newest to oldest
- Add some presets for the user to quickly send a good prompt
- Save their response from OpenAI to **local storage**
- Max limit of 7 responses.
    - Form will be disabled after the limit has been reached
    - The user can click my name in the header to reset the limit
- Auto scroll to responses upon form submission

# Design

I designed this app referenceing Shopify's business name generator tool: https://www.shopify.ca/tools/business-name-generator

# Development

- React
- JavaScript

# Libraries used

- Tailwind

# General notes

**All** components aside from the form were developed from scratch and implemented based on the design of Shopify's business name generator tool.

The application is fully responsive on mobile desvices and it has an accessible score of **100** as tested by Google lighthouse. This was achieved by using semantic elements, using the axe Accessibility Linter VSCode extension, and using the Firefox Accessibility Inspector.