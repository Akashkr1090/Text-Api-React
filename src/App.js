import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter,Link,Router,Rout } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light'); //! Whether dark is enebled or not
  const [alert, setAlert]= useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      {<Navbar title="WordEditor" aboutme="AboutMe" mode={mode} toggleMode={toggleMode} />}
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        {<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}
        {/* {<About  heading="Enter the text"/>} */}
      </div>
    </>
  );
}

export default App;
