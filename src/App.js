import React from 'react';
import './css/App.scss';
import TopText from './components/TopText';
import NotifyMe from './components/NotifyMe';
import ExampleImage from './components/ExampleImage';
import ContactLinks from './components/ContactLinks';


function App() {
  return (
    <div className="App">
     <TopText title='ping' period="." paraOne='We are launching' paraTwo="subscribe and get notified" soon="soon!"/>
     <NotifyMe buttonCopy="Notify Me"/>
     <ExampleImage/>
     <ContactLinks copyright='&copy; Copyright Ping. All rights reserved.'/>
    </div>
  );
}

export default App;
