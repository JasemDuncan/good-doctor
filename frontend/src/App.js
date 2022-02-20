import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddDoctor from './pages/AddDoctor';
import AppointmentForm from './pages/AppointmentForm';
import DeleteDoctor from './pages/DeleteDoctor';
import Doctors from './pages/Doctors';
import DoctorsDetail from './components/DoctorDetail';
import MyAppointments from './pages/MyAppointments';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';

function App() {
  const doctors = useSelector((state)=> state.doctorsReducer);
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
            {/* <Route path="/" element={<DoctorsDetail />} /> */}
            { doctors.map((doctor) => (
              <Route 
              key={doctor}
              path={`/${doctor.id}`}
              element={<DoctorsDetail doctor={doctor}/>}
              
              />
              ))
            }
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
