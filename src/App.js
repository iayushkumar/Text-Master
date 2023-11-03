import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const changeMode = () => {
    if (mode.backgroundColor === 'white') {
      setMode({
        color: 'white',
        backgroundColor: 'black',
      });
      showAlert('dark mode enabled', 'success');
    } else {
      setMode({
        color: 'black',
        backgroundColor: 'white',
      });
      showAlert('Light mode enabled', 'success');
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <div className={`bg-${mode.backgroundColor} vh-100`}>
        <Navbar mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={<About mode={mode} />} />

          <Route path="/" element={<Text mode={mode} alert={alert} showAlert={showAlert} changeMode={changeMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
