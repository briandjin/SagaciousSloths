import React from 'react';
import $ from 'jquery';
import { Menu, Segment } from 'semantic-ui-react';

class Menubar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }; 
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDashboard = this.handleDashboard.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  // SS code
  // handleMenuSelect(index) {
  //   this.setState({
  //     index: index
  //   });

  //   if (this.props.items[index] === 'Dashboard') {
  //     this.props.loadDashboard();
  //   } else if (this.props.items[index] === 'Log Out') {
  //     this.logOut();
  //   };
  // }

  handleLogout () {
    this.logOut();
  }

  handleDashboard () {
    this.props.loadDashboard();
  }

  logOut() {
    $.ajax({
      url: '/logout',
      method: 'GET',
      success: function(data) {
        document.write(data);
      }.bind(this),
      error: function(err) {
        console.error('error logging out', err);
      }
    });
  }

  render() { 
    return (
      <Menu pointing secondary>
        <Menu.Item name='Home' active={this.state.activeItem === 'home'} onClick={this.handleLogoutClick} />
        <Menu.Item name='Dashboard' active={this.state.activeItem === 'messages'} onClick={this.handleDashboard} />
        <Menu.Menu position='right'>
          <Menu.Item name='Logout' active={this.state.activeItem === 'logout'} onClick={this.handleLogout} />
        </Menu.Menu>
      </Menu>
    );
  }
};

export default Menubar;
