‎Chuck's Kitchen Web App 🍴
‎
‎A responsive food ordering web application that allows users to browse, select, and order meals with a clean, mobile-first design
‎
‎Project Overview
‎
‎Chuck's Kitchen is a modern frontend application for food ordering. Users can:
‎Browse food items by category.
‎Add items to their cart with quantity selection.
‎View subtotal, delivery, service fees, and total.
‎Enter delivery details and payment information.
‎Navigate seamlessly between pages using a responsive navbar.
‎
‎The app is fully responsive, with a hamburger menu for mobile, and dynamic item display depending on screen size.
‎
‎
‎Tech Stack Used
‎
‎Technology
‎Purpose
‎React
‎Frontend framework for building UI components
‎
‎TypeScript
‎Adds type safety to React components
‎
‎Tailwind CSS
‎Styling and responsive design
‎
‎React Router DOM
‎Navigation between pages
‎
‎React Icons
‎Displaying icons like cart, hamburger menu, add/remove buttons
‎
‎React Hot Toast
‎Showing toast notifications for actions like adding items to cart
‎
‎
‎Project Structure
‎Copy code
‎
‎src/
‎├── components/
‎│   ├── Navbar.tsx
‎│   ├── Footer.tsx
‎│   ├── Cart.tsx
‎│   └── ProductCard.tsx
‎├── pages/
‎│   ├── Home.tsx
‎│   ├── Page.tsx
‎│   ├── Order.tsx
‎│   └── Detail.tsx
‎├── App.tsx
‎├── index.tsx
‎└── types.d.ts
‎Key files:
‎App.tsx – Main application layout with routing.
‎Navbar.tsx – Responsive navbar with desktop and mobile (hamburger) menu.
‎Page.tsx – Displays products, handles category selection, “View All” functionality, and cart additions.
‎Detail.tsx – Delivery form with validation and phone formatting.
‎Footer.tsx – Footer component, hidden on mobile screens.
‎
‎
‎Design Interpretation
‎
‎The design is based on a mobile-first approach.
‎Food items are displayed as cards, with quantities and add/remove buttons.
‎Cart totals are dynamically calculated with subtotal, delivery, service fees, and total.
‎
‎Hamburger menu appears on mobile, hiding links and login button.
‎Input formatting: phone numbers automatically add spaces, and credit card/CVV fields restrict invalid input.
‎
‎Assumptions:
‎
‎Delivery fee and service fee are fixed.
‎Tax is currently zero.
‎
‎
‎Limitations & Improvements
‎
‎Current Limitations:
‎
‎No backend integration; all cart data is stored in React state.
‎
‎Payment form doesn’t process real transactions.
‎
‎Tax is not dynamically calculated.
‎Some inputs are not fully masked (e.g., credit card).
‎
‎Images on mobile are totally different from image on desktop.
‎
‎No button to confirm cart order
‎
‎
‎
‎Potential Improvements:
‎
‎Add backend with database to store orders.
‎
‎Implement real payment gateway integration.
‎
‎Add button to process payment 
‎
‎Enhance accessibility (ARIA labels, keyboard navigation).
‎
‎Make image same on both desktop and mobile 
‎
‎Add animations for smoother transitions.
‎
