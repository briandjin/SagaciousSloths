import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Subheader from 'material-ui/Subheader';

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

  const tilesData = [
    {
      img: 'http://i.imgur.com/9Aj5str.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'http://i.imgur.com/w7D2E7q.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      img: 'http://i.imgur.com/avHn4Gw.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
  ];
  return (
    <MuiThemeProvider>
      <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </MuiThemeProvider>
  )
};

export default GridTileList;