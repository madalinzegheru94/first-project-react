import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';



class App extends React.Component {
  constructor() {
    
    console.log('Constructor called!');
    super();
    
    this.state = {};
  }
      
     
  render() {
    
    
    console.log('App component rendered!');
    return(
      <div className="app" style={{background: this.state.background} }>
        
       
      
        <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>}  />
        <Route path="/*" element={<Page404/>}  />
        </Routes>

        
       
        
        
        
       
        </div>
      
    );
  }
}

export default App;
    

  
  
  
  
  