# Project Name

dot-cards frontend interview challenge

## Description

This project is built for dot.cards interview challenge for Jr. Frontend Developer position. This is a basic ecommorce template. This project consists of there main pages; Product, Cart, and main landing page. This project is developed using React NextJS and Typescript.

## Installation

To set up the project and install all the required dependencies, follow these steps:

-Make sure you have Node.js installed on your system.
-You can download the ZIP file and extract it or use bash command to clone it.
-Navigate to the project directory.
-Install the dependencies using npm.
-Once the installation is complete, you can now start the development server:
   npm run dev

## Folder Structure

The project's folder structure is organized as follows:
📦 dotcards
├─ dotcards
│  ├─ README.md
│  ├─ app: Contains the pages of the application.
│  │  ├─ app-provider.tsx: This file is responsible for providing global context to the application.
│  │  ├─ cart: Contains files related to the cart page.
│  │  │  └─ page.tsx: The implementation of the cart page.
│  │  ├─ favicon.ico: The icon displayed in the browser tab.
│  │  ├─ globals.css: A CSS file that contains global styles.
│  │  ├─ layout.tsx: The layout component that wraps around all pages.
│  │  ├─ page.module.css: The CSS module.
│  │  └─ page.tsx: The implementation of the main landing page(named 'content' in this project).
│  └─ product: Contains files related to the product pages.
│     └─ [id]: A dynamic directory that represents different product pages.
│        └─ page.tsx: The implementation of each individual product page by product id.
├─ assets: Contains static assets used in the application.
│  └─ images
│     ├─ Arrow.svg, Banner.svg, Instagram.png, Twitter.png, Youtube.png
│     ├─ cartIcon.svg
│     └─ dummy
│        ├─ Image1.png, Image2.png, Image3.png, Image4.png, image5.png, image6.png, image7.png: Dummy images.
│        └─ index.ts: A TypeScript file exporting information about the dummy images.
├─ components: Contains reusable UI components used throughout the application.
│  ├─ ProductList.tsx, addToCartButton.tsx, banner.tsx, carousel.tsx, cartItems.tsx, checkoutButton.tsx, content.tsx, footer.tsx, header.tsx, product-card.tsx, quantityButton.tsx, removeButton.tsx, summary.tsx: Various UI components used in the application.
├─ models: Contains data transfer objects (DTOs) used to represent data models.
│  └─ dto: A directory holding DTO files.
│     ├─ cart-total.dto.ts: Represents the cart total information.
│     └─ product.dto.ts: Represents product-related information.
└─ utils: Contains utility files and Redux-related functionality.
   ├─ data.ts: A utility file holding data used in the application.
   └─ redux: A directory holding Redux-related files.
      ├─ commonSlice.ts: A Redux slice responsible for managing common state.
      ├─ hooks.tsx: Custom hooks related to Redux.
      └─ store.tsx: The Redux store configuration.



## Notable Considerations
While working on this project for the interview challenge, there are a couple of aspects that I would like to address:

-Device-Specific Design: The current webpage design has been crafted for optimal viewing on Macbook 13".

-Responsive Design: As a developer, I understand the significance of a seamless user experience on various devices. Although I've been recently using libraries for similar tasks, I embraced this challenge, allowing me to explore new techniques and expand my skillset. This experience has motivated me to continue seeking growth and pushing my boundaries in future opportunities.

-Carousel Implementation: For the carousel feature in this project, I utilized the "react-carousel-minimal" library (version 1.4.1). While the current implementation serves the purpose, I aim to explore further carousel options and potentially develop a custom carousel component to better align with the upcoming projects' specific requirements.

If required, I'll keep working on this project to meet the exact requirements provided.

By acknowledging these areas and expressing my commitment to continuous improvement, I hope to showcase my dedication to delivering high-quality solutions and my willingness to be a good fit in your team.
