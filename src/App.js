// import React from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import Alert from './Components/Alert';


function App() {
// const darkColor = "#ff0000";
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white"

  });
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white"
      });
      document.body.style.backgroundColor="white";
    showAlert("Light Mode Enabled", "Success")


    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "rgb(14, 34, 52)"

      });
      document.body.style.backgroundColor="rgb(14, 34, 52)";
      showAlert("Dark Mode Enabled", "Success")

    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }  

  return (
    <>
    <Navbar title="TExtUtiles" aboutText="About" toggleStyle={toggleStyle} myStyle={myStyle}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter The Text Analyze" toggleStyle={toggleStyle} myStyle={myStyle} showAlert={showAlert}/>
    </>
   
  );
}

export default App;
