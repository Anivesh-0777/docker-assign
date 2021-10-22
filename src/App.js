import React from "react";
// import React from 'react'
// import DashBoard from './components/DashBoard'
// import {Route, Switch} from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import ViewItems from "./components/ViewItems";


// import Products from "./components/Products/Products";

// import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <BrowserRouter>
      <Header />
      <ViewItems/>

      <Switch>
        <Route path="/home">
          <Body/>
        </Route>
        <Route path="/bots-details/:id">
          <ViewItems/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

//   return (
//     <>
//       <Header />
//       < Body/>
     
//     </>
//   )
// }



  // return (
  //   <Router>
  //     <div className="app">
  //       <Navbar />
  //       <Switch>
  //         <Route exact path="/" component={Products} />
          
  //         {!current ? (
  //           <Redirect to="/" />
  //         ) : (
  //           <Route exact path="/product/:id" component={SingleItem} />
  //         )}
  //       </Switch>
  //     </div>
  //   </Router>
  // );
  // }
// }

// const mapStateToProps = (state) => {
//   return {
//     current: state.shop.currentItem,
//   };
// };

export default App;
// connect(mapStateToProps)(App);