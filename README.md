# 🍔 Food E-Commerce Admin Panel

A modern, responsive, and fully dynamic **Admin Panel** for the Food E-Commerce platform, built with **Next.js, React, and TypeScript**.

This project provides a complete management interface for the Food E-Commerce platform. Administrators can manage products, categories, users, orders, transactions, discounts, and other essential parts of the online food store through a centralized dashboard.

The Admin Panel communicates with a separate REST API and provides a structured interface for managing the entire e-commerce platform.

---

## ✨ Features

### 🔐 Admin Authentication

* Admin login
* Secure authentication flow
* Persistent authentication session
* Protected admin routes
* Admin logout
* Authentication state management

### 📊 Dashboard

The dashboard provides an overview of the e-commerce platform, including:

* Store statistics
* Products overview
* Users overview
* Orders overview
* Transactions overview
* Sales and payment information

### 🛍️ Product Management

Administrators can fully manage the products available in the food store:

* Create products
* Edit products
* Delete products
* View product details
* Upload primary product images
* Upload multiple product images
* Manage product prices
* Manage sale prices
* Manage product quantity
* Manage product status
* Set sale start and end dates
* Assign products to categories
* Add product descriptions

### 🗂️ Category Management

* Create categories
* Edit categories
* Delete categories
* View categories
* Manage food categories

### 👥 User Management

* View registered users
* View user details
* Manage users
* View user information
* Manage user access and status
* create new user
* editing users informations
* deleting users
* showing them individually

### 📦 Order Management

Administrators can manage customer orders:

* View orders
* View order details
* View ordered products

* View order status
* Manage order information

### 💳 Transaction Management

* View transactions
* View payment information
* View transaction status
* View payment details
* Monitor customer payments

### 🎟️ Discount Management

* Create discount codes
* Edit discounts
* Delete discounts
* Manage discount percentages
* Manage coupon codes
* Manage discount availability

### 🖼️ Product Images

Product management supports:

* Primary product image
* Multiple product images
* Image preview
* Image replacement
* Image removal

### 📱 Responsive Admin Interface

The Admin Panel is designed to work across different screen sizes:

* Desktop
* Laptop
* Tablet
* Mobile

---



## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**


### Next.js Features

* App Router
* Server Components
* Client Components
* Server Actions
* Dynamic Routes
* API integration
* Authentication handling

---

## 🔌 Backend

This Admin Panel consumes a separate **REST API backend**.

The backend is responsible for the application's main data and business logic, including:

* Authentication
* Users
* Products
* Categories
* Orders
* Transactions
* Discounts
* Database operations

The backend and database are **not included in this repository**.

---

## 🔐 API Authentication

The Admin Panel communicates with protected API endpoints using authentication tokens.

Authentication is handled through secure HTTP cookies and authorization headers when communicating with the backend API.

Protected API requests are used for operations such as:

* Admin authentication
* Product management
* Category management
* User management
* Order management
* Transaction management
* Discount management

---



## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/mahzadkhosraviani/food-ecommerce-admin.git
```

Navigate to the project directory:

```bash
cd next-admin
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Admin Panel will be available at:

```text
http://localhost:3000
```

---



## 📌 Main Sections

The Admin Panel includes the following major sections:

* Dashboard
* Products
* Product Creation
* Product Editing
* Categories
* Users
* Orders
* Transactions
* Discounts
* Admin Authentication

---

## 📌 Project Status

done and final version.




## 👨‍💻 Author

**Mahzad Khosraviani**

Frontend Developer

Built with ❤️ using Next.js, React, and TypeScript.
