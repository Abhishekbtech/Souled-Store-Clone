# The Soul Store Clone

This project is a clone of The Soul Store e-commerce platform, focusing on product details, user authentication, and password update functionalities. It uses React for the front end and Axios for API calls.

## Features

1. **Product Details Page**
    - Displays information such as product name, images, description, price, and available sizes/colors.
    - Includes "Add to Cart" and "Wishlist" buttons.
    - Gallery of product images with thumbnails for easy navigation.
    - Shows availability status of the product.

2. **User Authentication**
    - User registration form with input fields for name, email, and password.
    - User login form with input fields for email and password.
    - Authentication check on product purchase process to ensure the user is logged in before proceeding to checkout.

3. **Password Update**
    - Feature for logged-in users to update their password.
    - Form for users to enter their new password.
    - API call to update the password.

4. **Cart Page**
    - Displays a list of products added to the cart.
    - Allows users to add items to wishlist from the cart.
    - Allows users to remove items from the cart.
    - Calculates the total cost of the items in the cart.
    - Provides a "Checkout" button to proceed to the payment page.

5. **WishList Page**
    - Displays a list of products added to the wishlist.
    - Allows users to remove items from the wishlist.
    - Allows users to add items to the cart from wishlist.

6. **Search Page**
    - Allows users to search for products by category.
    - Displays a list of products matching the search query.
    - Allows users to add items to the cart or wishlist from the search results.


## Technologies Used

### Frontend

- **HTML**: The standard markup language for creating web pages and web applications.
- **Tailwind CSS**: A stylesheet language used for describing the presentation of a document written in HTML.
- **JavaScript**: A programming language that conforms to the ECMAScript specification, used for creating dynamic web content.
- **React**: A JavaScript library for building user interfaces, maintained by Facebook.


### Tools and Libraries

- **npm**: A package manager for the JavaScript programming language, maintained by npm, Inc.
- **Webpack**: A static module bundler for modern JavaScript applications.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making HTTP requests.
- **React Router**: A routing library for React, used for managing the browser history and URLs.
- **heroicons/react**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects, implemented as React components.
- **react-icons**: A collection of icons for React, implemented as React components.
- **MUI**: A popular React UI framework for building responsive and customizable user interfaces.
- **@fortawesome**: A React component library for using Font Awesome icons in React applications


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Abhishekbtech/Souled-Store-Clone.git
    ```
2. Navigate to the project directory:
    ```sh
    cd souled-store
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```
5. Open your browser and navigate to 'http://localhost:3000' to see the app.


## Deploy on Vercel

Deployment link of my project 'https://souled-store-clone-rho.vercel.app/'