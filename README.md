ShoppyGlobe 🛍️
A full-stack E-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication, Redux state management, and RESTful API integration.

📌 Features
✅ User Authentication (Register/Login with JWT)
✅ Product Management (Add, View, Update, Delete)
✅ Shopping Cart (Add to Cart, Remove from Cart, Update Quantity)
✅ Secure Checkout Process
✅ Search & Filter Products
✅ Responsive UI for all devices
✅ API Error Handling

🛠 Tech Stack
Frontend: React.js, Redux, React Router

Backend: Node.js, Express.js, MongoDB

Authentication: JWT (JSON Web Tokens)

Database: MongoDB (Mongoose ORM)

Styling: CSS

🚀 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/shoppyglobe.git
cd shoppyglobe
2️⃣ Install Dependencies
Backend Setup:

sh
Copy
Edit
cd backend
npm install
Frontend Setup:

sh
Copy
Edit
cd ../frontend
npm install
3️⃣ Setup Environment Variables
Create a .env file in the backend directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Start the Application
Run Backend Server:

sh
Copy
Edit
cd backend
npm start
Run Frontend:

sh
Copy
Edit
cd frontend
npm start
🛠 API Routes & Testing with ThunderClient/Postman
Method	Endpoint	Description	Auth Required?
POST	/api/auth/register	Register a new user	❌ No
POST	/api/auth/login	Login and get JWT Token	❌ No
GET	/api/products	Fetch all products	❌ No
GET	/api/products/:id	Fetch product by ID	❌ No
POST	/api/cart	Add item to cart	✅ Yes
DELETE	/api/cart/:id	Remove item from cart	✅ Yes
POST	/api/orders	Place an order	✅ Yes
