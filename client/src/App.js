import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AddaHike from "./pages/AddHike";
import Saved from "./pages/MyHikes";
import MyNavbar from "../src/components/Navbar";
import PlanHike from './pages/PlanHike';
import Planned from './pages/PlannedHikes';
// import UserContext from './utils/UserContext';
import { removeHike, removePlannedHike, getUserProfile, loginCheck } from './utils/API';
import { Redirect } from 'react-router-dom';



class App extends React.Component {

  // state = {
  //   isLoggedIn: false,
  //   hikes: [],
  //   plannedhikes: [],
  //   id: "",
  //   firstName: "",
  //   email: "",
  //   setLogin: (userData) => {
  //     this.setState({
  //       id: userData._id,
  //       firstName: userData.firstName,
  //       email: userData.email,
  //       isLoggedIn: true,
  //       hikes: userData.hikes,
  //       plannedhikes: userData.plannedhikes
  //     });
  //   },
  //   setLogout: () => {
  //     this.setState({
  //       isLoggedIn: false,
  //     });
  //   },
  //   checkLogin: () => {
  //     loginCheck()
  //       .then(({data: userInfo}) => {
  //         console.log(userInfo);
  //         this.setState({
  //           isLoggedIn: userInfo.isLoggedIn,
  //           firstName: userInfo.firstName,
  //           email: userInfo.email,
  //           id: userInfo._id
  //         })
  //       })
  //       .catch(err => console.log(err));
  //   }
  // };

  // state = {
  //     isLoggedIn: false,
  //     hikes: [],
  //     plannedhikes: []
  // }
  render () {
    
  return (
    <Router>
       {/* <UserContext.Provider value={this.state}> */}
      
      <MyNavbar />
      <div>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/home" component = {Home} />
        <Route exact path = "/addhike" component = {AddaHike} />
        <Route exact path = "/myhikes" component = {Saved} />
        <Route exact path = "/planhike" component = {PlanHike} />
        <Route exact path = "/plannedhikes" component = {Planned} />
        <Route render = {() => <h2>404 page!</h2>} />
      </Switch>

     </div>
     {/* </UserContext.Provider> */}
  </Router>

  )
}
}

export default App;
