// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Provinsi } from './pages'


const App = () =>{
    return (
        <center>
        <Router>
            <div>
              <h1> Covid Tracker </h1>
                <nav>
                        <tr>
                            <Link to="/Global">
                                Global
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </tr>
                        <tr>
                            <Link to="/Provinsi">
                                Provinsi
                            </Link>
                        </tr>
                </nav>
            </div>
            <Switch>
                <Route path="/Global">
                    <Global />
                </Route>
                <Route path="/indonesia">
                    <Indonesia />
                </Route>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
            </Switch>
        </Router>
        </center>
    )
}

export default App;
