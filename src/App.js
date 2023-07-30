// import logo from './logo.svg';
import './Appa.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   // Switch,
//   Route,
// } from "react-router-dom";


import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success");
    }

  }

  return (
    <>
      {/* <Navbar title = "TextUtils2" abouttext ="abouttext"/> */}
      {/* <Router> */}
        <Navbar title="textUtills" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about"
              element={<About/>}>
            </Route> */}
            {/* <Route exact path="/"  element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
              
            {/* </Route>
          </Routes> */}
        </div>
        {/* </Router> */}

    </>
  );
}
export default App;
