import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddDoctor from './pages/AddDoctor';
import AppointmentForm from './pages/AppointmentForm';
import DeleteDoctor from './pages/DeleteDoctor';
import Doctors from './pages/Doctors';
import MyAppointments from './pages/MyAppointments';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">         
          <Routes>
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/makeAppointment" element={<AppointmentForm />} />
            <Route path="/myAppointments" element={<MyAppointments />} />
            <Route path="/addDoctor" element={<AddDoctor />} />
            <Route path="/deleteDoctor" element={<DeleteDoctor />} />
            {/* <Route path="/" exact={true} element={<Home />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
