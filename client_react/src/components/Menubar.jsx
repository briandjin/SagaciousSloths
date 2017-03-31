import React from 'react';
import $ from 'jquery';
import { Menu, Segment } from 'semantic-ui-react';

const Menubar = function (props) {
  return (
    <Menu pointing secondary>
      <Menu.Item name='HOME' onClick={props.loadDashboard} />
      <Menu.Menu position='right'>
        <Menu.Item name='LOGOUT' onClick={props.logOut} />
      </Menu.Menu>
    </Menu>
  );
};

export default Menubar;
