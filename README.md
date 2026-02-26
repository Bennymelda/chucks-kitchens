Chuck's Kitchen Web App

A responsive food ordering web application that allows users to browse, select, and order meals with a clean, mobile-first design.

📌 Project Overview

Chuck's Kitchen is a modern frontend food ordering application built with React and TypeScript.

Users can:

Browse food items by category

Add items to their cart with quantity selection

View subtotal, delivery fee, service fee, and total cost

Enter delivery details and payment information

Navigate seamlessly between pages using a responsive navbar

The application is fully responsive, featuring:

A mobile hamburger menu

Dynamic product display depending on screen size

Conditional rendering for mobile vs desktop layouts

🛠️ Tech Stack Used
Technology	Purpose
React	Frontend framework for building UI components
TypeScript	Adds type safety to React components
Tailwind CSS	Styling and responsive design
React Router DOM	Navigation between pages
React Icons	Displaying icons (cart, hamburger menu, add/remove buttons)
React Hot Toast	Toast notifications for actions like adding items to cart
Vite	Fast development server and build tool
📂 Project Structure
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Cart.tsx
│   └── ProductCard.tsx
├── pages/
│   ├── Home.tsx
│   ├── Page.tsx
│   ├── Order.tsx
│   └── Detail.tsx
├── App.tsx
├── main.tsx
└── types.d.ts
Key Files

App.tsx – Main application layout with routing configuration.

Navbar.tsx – Responsive navigation bar with desktop and mobile (hamburger) menu.

Page.tsx – Displays products, handles category filtering, "View All" functionality, and cart additions.

Detail.tsx – Delivery and payment form with validation and phone formatting.

Footer.tsx – Footer component (hidden on mobile screens).

🎨 Design Interpretation

The application was built using a mobile-first approach.

UI Decisions:

Food items are displayed as reusable product cards.

Quantity buttons allow users to increase or decrease items in the cart.

Cart totals are dynamically calculated (subtotal, delivery fee, service fee, total).

A hamburger menu replaces the navbar links on smaller screens.

Phone numbers are automatically formatted with spacing.

Credit card and CVV inputs restrict invalid characters.

Assumptions Made:

Delivery fee and service fee are fixed.

Tax is currently set to zero.

No authentication system is required.

Images differ between desktop and mobile layouts based on design interpretation.

⚠️ Current Limitations

No backend integration (cart data stored in React state only).

Payment form does not process real transactions.

Tax is not dynamically calculated.

Credit card input is not fully masked.

Images differ between desktop and mobile versions.

No final confirmation button to fully process order submission.

🚀 Potential Improvements

If given more time, the following improvements would be implemented:

Backend integration with database for order storage.

Real payment gateway integration (Stripe or Paystack).

Proper order confirmation and checkout flow.

Improved input masking for payment details.

Accessibility improvements (ARIA labels, keyboard navigation).

Consistent image usage across mobile and desktop.

Smooth UI animations and transitions.

User authentication and order history.

🖥️ How to Run the Project
1️⃣ Clone the repository
git clone

‎https://github.com/Bennymelda/chucks-kitchens.git
cd chucks-kitchen
2️⃣ Install dependencies
npm install
3️⃣ Start development server
npm run dev

The app will run on:

http://localhost:5173
4️⃣ Build for production
npm run build
📌 Environment Requirements

Node.js (v16 or later recommended)

npm or yarn

Modern browser (Chrome, Edge, Firefox)

✨ Built as a frontend project focused on responsive design, state management, and UI interaction.
