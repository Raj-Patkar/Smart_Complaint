import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AddComplaint from "./pages/AddComplaint";
import MyComplaints from "./pages/MyComplaints";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔒 PROTECTED */}
        <Route
          path="/student"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-complaint"
          element={
            <ProtectedRoute>
              <AddComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-complaints"
          element={
            <ProtectedRoute>
              <MyComplaints />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;