import Nav from './components/Nav';
// import Test from './components/Test';
import './App.css';
import BootstrapCarousel from './components/BootstrapCarousel';
// import Button from 'react-bootstrap/Button';
import dots from './components/dots.png';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row subContainer'>
          <div className='col-2 logoNavContainer'>
            <div className='row logoContainer'>
              <div>
                Good Doctor
              </div>
            </div>
            <div className='row'>
              <div>
                <Nav/>
              </div>            
            </div>            
          </div>
          <div className='col-10 latestModels'>
            <div className='titleContainer'>
              <div className='titleDoctors'>
                LATEST DOCTORS                
              </div>
              <div className='titleDoctorsDescription'>
                Please select a Doctor
              </div>
              <div>
                <img src={dots} />
              </div>
            </div>
            <div className='listDoctors'>            
              <BootstrapCarousel/>              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
