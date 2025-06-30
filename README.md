# 🧑‍💻 Employee Management API (Node.js + Express + PostgreSQL + Sequelize)

A backend API for managing employee data using **Express.js**, **PostgreSQL**, and **Sequelize ORM**. This API supports full CRUD operations and is designed for integration with any frontend or API testing tools like **Postman**.

---

## 🚀 Features

- 📦 RESTful API with Express.js
- 🗃️ PostgreSQL database integration via Sequelize ORM
- 🔐 Environment-based configuration using dotenv
- 📥 JSON request parsing
- 🔄 Async Sequelize connection with dynamic model access
- ✅ Schema validation and unique constraints
- 📫 Clear responses and proper error handling

---

## 📂 Project Structure

├── controller/
│ └── userController.js # Logic for each route (GET, POST, PUT, DELETE)
├── model/
│ └── userSchema.js # Sequelize User model
├── postgres/
│ └── postgres.js # Sequelize connection & model initializer
├── view/
│ └── routes.js # Express routes mapped to controller
├── index.js # App entry point
├── .env # Environment variables





---

## 🔗 API Endpoints & Usage (with Postman)

### ➕ Add Employee
- **Method:** `POST`
- **Endpoint:** `/addEmp`
- **Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "designation": "Developer",
  "password": "secure123"
}
```


📥 Get All Employees
Method: GET

Endpoint: /getAll

Response: Array of employee records

🔄 Update Employee
Method: PUT

Endpoint: /emp/:empid

Example: /emp/1

Body (JSON):
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "designation": "Manager",
  "password": "newpassword"
}



❌ Delete Employee
Method: DELETE

Endpoint: /emp/:empid

Example: /emp/1

🧠 How It Works (Request Flow)
index.js initializes Express, reads .env, applies middleware, and connects to the database.

postgres.js connects to PostgreSQL, defines the User model, and syncs the schema.

Routes are defined in routes.js and map to functions in userController.js.

Each controller function:

Uses getUserModel() from postgres.js

Performs the desired Sequelize operation (findAll, create, update, destroy)

Returns a JSON response to the client (Postman, browser, etc.)

🛠 Setup Instructions
✅ Prerequisites
Node.js installed

PostgreSQL installed and running

.env file created in root with:

PORT=3000
DB_NAME=mydb
DB_USER=postgres
DB_PASSWORD=root


npm install
nodemon index.js


Connection has been established successfully.
DataBase Synced
server is running on http://localhost:3000


✅ Notes
Wait for "✅ DataBase Synced" message before using endpoints.

Only send fields that are defined in the model (name, email, designation, password).

Unique constraint on email prevents duplicates.

Sequelize logs actual SQL queries to the console.

💡 Example Use Cases
Build a full-stack HR/Employee portal

Use this backend with a React/Angular/Vue frontend

Connect this API to a mobile app (React Native/Flutter)

Integrate with admin dashboards or BI tools

✨ Author
Soumen-Developer
🔗 GitHub: Soumen-Developer

📄 License
This project is licensed under the MIT License.


---

### ✅ Paste this directly into your `README.md` on GitHub.

Let me know if you also want:

- Deployment instructions (e.g., Railway, Render, Vercel backend)
- Swagger/OpenAPI documentation for your API
- A matching frontend UI in HTML or React

I'll help you complete the full stack!


---

## 🧪 API Testing with Postman

You can easily test all the API endpoints using the pre-built Postman collection.

### 🔗 Postman Collection Link  
[👉 Click here to open in Postman](https://soumen-7005845.postman.co/workspace/Soumen's-Workspace~71a7d9f3-cd13-4053-83be-5ab5ee3a5b51/collection/46223918-59d30226-2a5c-4ede-91cf-25cca9dfcb44?action=share&source=copy-link&creator=46223918)

### 📦 What's Included
- `GET /getAll` - Fetch all employees
- `POST /addEmp` - Add a new employee
- `PUT /emp/:empid` - Update employee by ID
- `DELETE /emp/:empid` - Delete employee by ID

### 📝 How to Use:
1. Click the link above and import the collection into your Postman app.
2. Make sure your server is running locally at `http://localhost:3000`.
3. Choose the endpoint you want to test and click **Send**.

> 💡 Tip: Ensure you use `Content-Type: application/json` in your headers for POST and PUT requests.

---

[![Postman Collection](https://img.shields.io/badge/Postman-Collection-orange?logo=postman)](https://soumen-7005845.postman.co/workspace/Soumen's-Workspace~71a7d9f3-cd13-4053-83be-5ab5ee3a5b51/collection/46223918-59d30226-2a5c-4ede-91cf-25cca9dfcb44?action=share&source=copy-link&creator=46223918)

