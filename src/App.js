import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import ProtectedRoute from './routing/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to='/login' replace/>}/>
        <Route path="/login" element={LoginScreen}/>
        <Route path="/register" element={RegisterScreen}/>
        <Route element={ProtectedRoute}>
          <Route path="/dashboard" element={Dashboard}/>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Router>
  );
}

export default App;
