import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddDoctor from './pages/AddDoctor';
import AppointmentForm from './pages/AppointmentForm';
import DeleteDoctor from './pages/DeleteDoctor';
import Doctors from './pages/Doctors';
import DoctorsDetail from './components/DoctorDetail';
import MyAppointments from './pages/MyAppointments';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="container">
      <div className="row">
        <Router>      
          <Routes>
            <Route path="/makeAppointment" element={<AppointmentForm />} />
            <Route path="/myAppointments" element={<MyAppointments />} />
            <Route path="/addDoctor" element={<AddDoctor />} />
            <Route path="/deleteDoctor" element={<DeleteDoctor />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/doctors" exact element={<Doctors />} />
            {/* <Route path="/" element={<DoctorsDetail />} /> */}
            
          </Routes>
        </Router>  
      </div>
    </div>
  );
}

export default App;
