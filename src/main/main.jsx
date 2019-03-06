import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Footer from './components/footer';

class Main extends React.Component {

   render() {
      return (
          <div className="app" >
       <Header/>
          <div>
              <Navbar/>
               <h1> Hey it is the mid </h1>
          </div>

        <Footer/>
          </div>
      );
   }
}

export default Main;