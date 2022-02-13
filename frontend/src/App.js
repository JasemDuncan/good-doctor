import Nav from './components/Nav';
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
            <div className='listDoctors carousel-inner'>
              <div className='carousel-item active'>
                <div className='container2'>
                  <h1>Exmplaes Headline</h1>
                  <p>loreSunt ullamco elit eu veniam ad et magna culpa occaecat proident dolore cillum aliqua labore. Proident consectetur veniam culpa pariatur sunt dolor aute commodo tempor dolore. Nisi eiusmod voluptate id pariatur in. Commodo et irure ea aliqua. Esse qui aliquip eu enim eu in enim tempor qui pariatur reprehenderit reprehenderit proident.
                  </p>
                  <a href='#' className='btn btn-lg btn-primary'>Sigup today</a>
                </div>
              </div>
              <div className='carousel-item '>
                <div className='container2'>
                  <h1>Exmplaes Headline</h1>
                  <p>loreSunt ullamco elit eu veniam ad et magna culpa occaecat proident dolore cillum aliqua labore. Proident consectetur veniam culpa pariatur sunt dolor aute commodo tempor dolore. Nisi eiusmod voluptate id pariatur in. Commodo et irure ea aliqua. Esse qui aliquip eu enim eu in enim tempor qui pariatur reprehenderit reprehenderit proident.
                  </p>
                  <a href='#' className='btn btn-lg btn-primary'>Sigup today</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
