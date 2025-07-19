🚛 Haula - Your Modern Moving Solution
Haula is a modern, web-based platform for booking professional moving services. Whether it's home relocation, office moving, pet transport, or fragile item handling, Haula offers an intuitive interface with real-time features, dynamic vehicle recommendations, live chat with drivers, and a seamless booking experience.

Table of Contents
Key Features

Technologies Used

Prerequisites

Simplified Setup (One Command)

Project Structure

License

🚀 Key Features
🏠 Comprehensive Service Selection: Choose from a wide range of services, including home and office relocations, pet transport, fragile item handling, and more.

📍 Smart Location Search: Powered by the Mapbox API, our location input fields provide smart, real-time suggestions for pickup and drop-off addresses.

🚚 Dynamic Vehicle Recommendations: Based on your specific needs, Haula intelligently suggests the most suitable vehicle for your move.

💰 Live Price Calculation: Get transparent, real-time cost estimates.

💬 Real-Time Driver Chat: Communicate directly with your driver in real-time.

🛠 Technologies Used
Backend: Node.js, Express

Frontend: HTML, CSS, JavaScript, React

Real-Time Communication: WebSockets (ws)

Mapping & Geocoding: Mapbox API

✅ Prerequisites
Before you begin, ensure you have Node.js installed on your system.

To check if Node.js is installed, run: node -v

If not installed, download the LTS version from nodejs.org.

⚙️ Simplified Setup (One Command)
Get the entire project—both the server and the React client—up and running with these two commands from the project's root directory.

Install All Dependencies:
This command installs the necessary packages for the entire project, including the server and the client.

Bash

npm run install-all
Run the Project:
This command starts both the backend server and the React development server at the same time.

Bash

npm start
The main application will be available at http://localhost:3000.

The React client will be available at http://localhost:5173 (or the URL shown in your terminal).

📂 Project Structure
The project is organized into a server and a client-react directory to maintain a clean separation of concerns.

/
├── server/               # Contains the Node.js backend and main frontend
│   ├── public/           # All static files (HTML, CSS, images)
│   └── server.js         # The main Express server
│
└── client-react/         # The separate React frontend application
📄 License
This project is licensed under the MIT License.