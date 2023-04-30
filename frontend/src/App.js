import React from 'react';
import './App.css'
import AddMovie from './components/AddMovie';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/Movies';

const App = () => {
  return ( 
    <>
      <Header/>
      <Movies/>
      <AddMovie/>
      <Footer/>
    </>
   );
}
 
export default App;