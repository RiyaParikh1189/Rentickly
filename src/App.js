import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import { Footer } from './Footer';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Layout } from './Layout';
import { NavigationBar } from './NavigationBar';
import  Registration  from './Registration';
import { NoMatch } from './NoMatch';
import { Jumbotron } from './Jumbotron';
import {FaqPage} from './FaqPage';

import './SideDrawer.css';


/* App.jsx */
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }
  
  render(){
    const styles= 
      {
        container:{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: '99',
          opacity: 0.9,
          display:'flex',
          alignItems:'center',
          background: 'black',
          width: '100%',
          color: 'white',
          fontFamily:'Lobster',
        },
        logo: {
          margin: '0 auto',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          filter: this.state.menuOpen ? 'blur(2px)':null,
          transition: 'filter 0.5s ease',
        },
      }
    const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });
    
    return(
      <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
          <div style={styles.logo}>Rentickly</div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
      <div className="main-content"> {/*navogation bar */}
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron/>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Registration}/>
              <Route path="/FAQ" component={FaqPage} />
               <Route component={NoMatch} />
            </Switch>
          </Layout>
          
        </Router>

      </React.Fragment>
      </div>
       </div>
    )
  }
}

/* MenuItem.jsx*/

/* Menu.jsx */

/* MenuButton.jsx */

/* Footer.jsx */


/* Main.jsx */
