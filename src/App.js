//import './App.css';
import React, { useState } from 'react'
//import {
//  BrowserRouter as Router,
//  Switch,
// Route
//} from "react-router-dom";
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
//import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ="#14213d";
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }
  return (
    <>
      {/*<Router>*/}
      <Navbar title="Text Modifier"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/*<Switch>
        <Route path="/about">
          <About mode={mode} />
        </Route>
      <Route path="/">*/}
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        {/*</Route>
      </Switch>
      </div>
        </Router>*/}
    </>
  );
}

export default App;
