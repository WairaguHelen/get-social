import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import UserProfile from "./components/profile/UserProfile";
import NewsFeed from "./components/feed/NewsFeed";
import Notifications from "./components/notifications/Notifications";
import EditProfile from "./components/profile/EditProfile";
import "./styles/index.css";
import "./styles/feed.css";
import "./styles/notifications.css";
import "./styles/profile.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
