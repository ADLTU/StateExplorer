import './App.css'
import Map from './components/Map.js'
import StateInformation from './components/StateInformation.js'

import {BrowserRouter as Router, Route, Link, Routes, useLocation} from 'react-router-dom'


function App() {
    const location = useLocation();

  return (
    <div className="mainDiv">
            <div>
            <Link to={"/"}> home </Link>
                {/*<h1>{{ocation.state}}</h1>*/}
            </div>
            <Routes>
                <Route path={'/'} element={<Map />} />
                {/*<StateInformation />*/}
                <Route path={`/stateInformation/*`} element={<StateInformation/>} />
                {/*<Route path={`${<GetCurrentPath />}`} element={<h1>`${<GetCurrentPath />}`</h1>} />*/}

            </Routes>

    </div>
  )
}

export default App

