import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import LoginPage from "./components/LoginPage/LoginPage";
import ToolsPage from "./components/ToolsPage/ToolsPage";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  const [username, setUsername] = useState("");

  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header userName={username} />
          <Routes>
            <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/" element={<Body />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
