import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import {Route,Switch} from "react-router-dom"

import "./_app.scss"
const Layout=({children})=>{
   const [sidebar, toggleSidebar] = useState(false);
   const handleToggleSidebar = () => toggleSidebar((value) => !value);
  <>
    <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main border border-warning">
             {children}
        </Container>
      </div>
  </>;
}
const App = () => {
  
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginScreen />
      </Route>
    </Switch>
  );
}

export default App