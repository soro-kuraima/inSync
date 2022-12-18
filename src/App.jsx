import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./State/AuthContext.jsx";
import Profile from "./Routes/Profile.jsx";
import Find from "./Routes/Find.jsx";
import Login from "./Routes/Login.jsx";
import Home from "./Routes/Home.jsx";
import Register from "./Routes/Register.jsx";
import ErrorRoute from "./Routes/ErrorRoute.jsx";
import Connections from "./Routes/Connections.jsx";
import Chat from "./Routes/Chat.jsx";
import Community from "./Routes/Community.jsx";
import "./index.css";

function App() {
  const { user } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/insync/login"></Navigate>;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/insync/" element={<Home />}>
        <Route
            index
            element={
              <ProtectedRoute>
                <Find />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="find"
            element={
              <ProtectedRoute>
                <Find />
              </ProtectedRoute>
            }
          />
          <Route
            path="community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route
            path="connections"
            element={
              <ProtectedRoute>
                <Connections />
              </ProtectedRoute>
            }
          />
          <Route
            path="chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorRoute />} />
        </Route>
        <Route path="/insync/login" element={<Login />} />
        <Route path="/insync/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
