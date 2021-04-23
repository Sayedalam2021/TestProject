import React from 'react';
import Tile from '../Tile'

import {StyleSheet, View} from 'react-native';

const Board = ({ tiles, onPress }) => {
  return (
    <View style={Styles.ticTacToeContainer}>
      {tiles.map((tile, i) => (
          <Tile key={i} piece={tile} onPress={() => onPress(i)} />
      ))}
    </View>
  );
}

const Styles = StyleSheet.create({
  ticTacToeContainer: {
    flexDirection: 'row',
    flexGrow: 0,
    flex: 1,
    flexWrap: 'wrap'
  },
  ticTacToeTile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default Board;
