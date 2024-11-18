import React from 'react';
import './App.css';
import Home from './components/Home';
import MyWorks from './components/MyWorks';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Home />
      <MyWorks />
      <Portfolio />
      <ContactForm />
    </div>
  );
}

export default App;
