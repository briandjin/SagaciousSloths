import React from 'react';
import {GridList} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Subheader from 'material-ui/Subheader';
import GridTileEntry from './GridTileEntry.jsx';

const GridTileList = function (props) {
  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    },
    titleStyle: {
      color: 'rgb(0, 188, 212)',
    },
  };

  return (
    <MuiThemeProvider>
      <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
          {props.cards.map((card, index) => (
            <GridTileEntry 
              card={card}
              index={index}
              style={styles}
            />))}
        </GridList>
      </div>
    </MuiThemeProvider>
  )
};

export default GridTileList;