import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Breadcrumbs, Link, Typography, TextField, Button } from '@material-ui/core';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter id='b'>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <div className="App" id="ap">
        
        <header className="App-header">
        <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit"  href="/polypaths" onClick={handleClick}>
          Polypaths
        </Link>
        <Link color="inherit"  href="https://google.com" onClick={handleClick}>
          Google
        </Link>
        <Link color="inherit"  href="/backend" onClick={handleClick}>
          See Backend
        </Link>
      </Breadcrumbs>
      
    
        </header>
        <Route path="/home" component={home} />
          <Route path="/polypaths" component={polypaths} />
          <Route path="/backend" component={backend} />
      </div>
    </BrowserRouter>
  );
}
function handleClick(){
  console.log("poggers")
}

function home(){
  return(
    <h1>Home</h1>
  )
}
function polypaths(){
  return(
    <iframe src="https://polypaths.com"></iframe>
  )
}
function backend(){
  return(
    <div id="back">
      <h1>Hello sir</h1>
      <form  noValidate autoComplete="off">
    <TextField id="path" label="Path" variant="filled" />
    </form>
      <Button variant="contained" onClick={banana}>Enter</Button>
      <div id="banan">

      </div>
    </div>
  )
}

function banana(){
  console.log('haha')
  var xhr = new XMLHttpRequest()
  var route = document.getElementById('path').value
  // get a callback when the server responds
  xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    ReactDOM.render(
      <h1>{xhr.responseText}</h1>,document.getElementById('banan')
    )
  })
  // open the request with the verb and the url
  
  xhr.open('GET', 'http://localhost:4000/'+route)
  // send the request
  xhr.send()
}
export default App;

