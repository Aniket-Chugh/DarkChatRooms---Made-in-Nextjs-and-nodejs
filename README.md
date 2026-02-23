<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
<body>

  <h1>🖤 DarkChatRooms - Made in Reactjs and nodejs and AI</h1>
  <p><strong>A full-stack real-time chat platform built with Next.js + Node.js demonstrating CRUD, WebSockets, networking/OS concepts, and AI integrations.</strong></p>

  <div class="section">
    <h2>🧠 Features</h2>
    <ul>
      <li>User authentication (login/signup)</li>
      <li>CRUD operations: users, rooms, messages</li>
      <li>Real-time chat with WebSockets (Socket.io)</li>
      <li>Message sentiment analysis using AI microservices</li>
      <li>Topic clustering & room recommendations</li>
      <li>Efficient server networking & process management</li>
      <li>Admin dashboards for moderation</li>
      <li>Fully dark-themed UI</li>
    </ul>
  </div>

  <div class="section">
    <h2>📂 Folder Structure</h2>
    <pre>
DarkChatRooms-2.0/
│
├── frontend/
│   ├── src/components/
│   ├── src/pages/
│   └── src/services/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── sockets/
│   └── models/
├── ai_service/
│   ├── sentiment_model.py
│   └── topic_clustering.py
├── .gitignore
├── README.html
└── LICENSE
    </pre>
  </div>

  <div class="section">
    <h2>🚀 Installation</h2>
    <h3>Backend</h3>
    <pre>
cd backend
npm install
npm run dev
    </pre>

    <h3>Frontend</h3>
    <pre>
cd frontend
npm install
npm run dev
    </pre>

    <h3>AI Service</h3>
    <pre>
cd ai_service
pip install -r requirements.txt
python sentiment_model.py
    </pre>
  </div>

  <div class="section">
    <h2>📚 Resources & Tutorials</h2>
    <ul>
      <li>Authentication: <a href="https://www.youtube.com/watch?v=iYR-m-pgDrk&t=1894s" target="_blank">YouTube Auth Tutorial</a></li>
      <li>Real-time Chatrooms (Playlist): <a href="https://www.youtube.com/watch?v=uosSnR_3MB8&list=PLYjIYu9Xn2rgkWEUhrCjbtaapn3TXZ7if" target="_blank">YouTube Chat Playlist</a></li>
      <li>Chat App with Node & WebSockets: <a href="https://www.youtube.com/watch?v=9VAYiRUY5s0&t=5396s" target="_blank">YouTube Tutorial</a></li>
      <li>Full-stack Chat App Guide: <a href="https://www.youtube.com/watch?v=bR4b_Io8shE&t=16549s" target="_blank">YouTube Full Guide</a></li>
    </ul>
  </div>

  <div class="section">
    <h2>🛠 Tech Stack</h2>
    <ul>
      <li><strong>Frontend:</strong> Next.js, React, Tailwind CSS, Socket.io</li>
      <li><strong>Backend:</strong> Node.js, Express, Socket.io, JWT, PostgreSQL</li>
      <li><strong>AI:</strong> Python, HuggingFace / NLTK / spaCy</li>
      <li><strong>Others:</strong> Redis, Docker (optional)</li>
    </ul>
  </div>

  <div class="section">
    <h2>🎯 Why It’s Impressive</h2>
    <ul>
      <li>Full-stack project with modern frameworks</li>
      <li>Real-time networking + OS-level scalability</li>
      <li>AI microservices integrated</li>
      <li>Clean modular architecture</li>
      <li>Resume/hackathon worthy</li>
    </ul>
  </div>

  <div class="section">
    <h2>📌 Example Socket Setup</h2>
    <pre>
import { io } from "socket.io-client";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;
export const socket = io(SOCKET_URL, { transports: ["websocket"], reconnection: true });

export function joinRoom(roomId, userId) {
  socket.emit("join_room", { roomId, userId });
}

export function sendMessage(roomId, msg) {
  socket.emit("send_message", { roomId, msg });
}

socket.on("receive_message", (data) => console.log("New message:", data));
    </pre>
  </div>

  <div class="section">
    <h2>🧠 AI Sentiment Service Example</h2>
    <pre>
from transformers import pipeline

sentiment = pipeline("sentiment-analysis")

def analyze(text):
    result = sentiment(text)
    return result

if __name__ == "__main__":
    print(analyze("I love building projects!"))
    </pre>
  </div>

</body>
</html>
