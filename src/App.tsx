import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Data from "./pages/Data";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/data"
              element={
                <PrivateRoute>
                  <Data />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
