import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyFigure from './components/MyFigure';
import MySection from './components/MySection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className='flex justify-between'>
          <MySection />
          <MyFigure />
        </main>
      </div>
    </Router>
  );
}

export default App;
