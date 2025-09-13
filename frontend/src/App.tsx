import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Uploads from './pages/Uploads'
import { getToken } from './lib/api'

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = getToken()
  return token ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/uploads" element={<PrivateRoute><Uploads /></PrivateRoute>} />
    </Routes>
  )
}
