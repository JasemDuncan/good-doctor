import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddDoctor from './pages/AddDoctor';
import AppointmentForm from './pages/AppointmentForm';
import DeleteDoctor from './pages/DeleteDoctor';
import Doctors from './pages/Doctors';
import MyAppointments from './pages/MyAppointments';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">         
          <Routes>
            <Route path="/makeAppointment" element={<AppointmentForm />} />
            <Route path="/myAppointments" element={<MyAppointments />} />
            <Route path="/addDoctor" element={<AddDoctor />} />
            <Route path="/deleteDoctor" element={<DeleteDoctor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" exact={true} element={<Doctors />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
