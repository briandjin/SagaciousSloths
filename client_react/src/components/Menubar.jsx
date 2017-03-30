import React from 'react';
import $ from 'jquery';
import { Menu, Segment } from 'semantic-ui-react';

class Menubar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }; 
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
        <Menu.Item name='Home' active={this.state.activeItem === 'home'} onClick={this.props.loadDashboard} />
        <Menu.Menu position='right'>
          <Menu.Item name='Logout' active={this.state.activeItem === 'logout'} onClick={this.logOut} />
        </Menu.Menu>
      </Menu>
    );
  }
};

export default Menubar;
