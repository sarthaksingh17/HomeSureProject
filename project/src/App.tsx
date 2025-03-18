import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import Complaints from './pages/Complaints';
import Insurance from './pages/Insurance';
import Bills from './pages/Bills';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex min-h-screen bg-gray-50">
                  <Sidebar />
                  <main className="flex-1 p-8">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/items" element={<Items />} />
                      <Route path="/complaints" element={<Complaints />} />
                      <Route path="/insurance" element={<Insurance />} />
                      <Route path="/bills" element={<Bills />} />
                    </Routes>
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App;