import Nav from './components/Nav';
import Carousel from './components/Carousel';
import './App.css';



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
              <Carousel/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
