import Nav from './components/Nav';

import './App.css';
import BootstrapCarousel from './components/BootstrapCarousel';



function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row subContainer'>
          <div className='col-2 logoNavContainer'>
            <div className='row logoContainer'>
              <div>
                GOOD DOCTOR
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
              <div>
                LATEST MODELS
              </div>
              <div>
                Please select a Doctor
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
