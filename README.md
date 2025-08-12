# 🛒 TCCD Task – E-Commerce Backend API

A backend API built with **Node.js, Express, and MongoDB** for a simplified e-commerce platform.  
Implements CRUD operations for **Products** and **Categories**, plus bonus features for **Cart** and **Cart Items**.

---

## 📌 Features

### **Product Management**
- **POST** `/api/products` → Create new product  
- **GET** `/api/products` → Get all products  
- **GET** `/api/products/:id` → Get single product by ID  
- **PATCH** `/api/products/:id` → Update product (partial update)  
- **DELETE** `/api/products/:id` → Delete product

### **Category Management**
- **POST** `/api/categories` → Create new category  
- **GET** `/api/categories` → Get all categories  
- **GET** `/api/categories/:id` → Get single category  
- **PATCH** `/api/categories/:id` → Update category  
- **DELETE** `/api/categories/:id` → Delete category

### **Cart Management** (Bonus)
- **POST** `/api/cart` → Create cart (empty)  
- **DELETE** `/api/cart/:cartId` → Delete cart by ID  
- **GET** `/api/cartItems/:cartId` → Get all cart items in a cart

### **Cart Item Management** (Bonus)
- **POST** `/api/cartItems/:cartId` → Create cart item for a cart  
- **GET** `/api/cartItems/:cartItemId` → Get single cart item info  
- **PATCH** `/api/cartItems/:cartItemId` → Update specific cart item

---

## 🛠 Tech Stack
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose)

---

## 📂 Project Structure

```C++
src/
├── config/
│ └── db.js
├── controllers/
│ ├── productController.js
│ ├── categoryController.js
│ ├── cartController.js
│ └── cartItemController.js
├── models/
│ ├── Product.js
│ ├── Category.js
│ ├── Cart.js
│ └── CartItem.js
├── routes/
│ ├── productRoutes.js
│ ├── categoryRoutes.js
│ ├── cartRoutes.js
│ └── cartItemRoutes.js
├── app.js
└── server.js
```
---

## ⚙️ Installation & Running
### 1. Clone the Repository  
   ```sh
   git clone https://github.com/amrashraf15/TCCD_Task.git
   cd backend
   ```
2.  Install Dependencies
   ```sh
    npm install
   ```
3. Create a .env file
  ```sh
     PORT=2020
    MONGO_URI=...
   ```
4. Run Server
  ```sh
        npm run dev
   ```
---
