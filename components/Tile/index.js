import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tile = ({ piece, onPress }) => {
  return (
    <TouchableOpacity
      style={{...Styles.container, width: '33.33%'}}
      onPress={onPress}>
      <Text style={Styles.text}>{piece}</Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#1B99C0',
    borderWidth: 1,
    borderColor: '#000000',
    paddingTop: '25%',
    position: 'relative',
  },
  text: {
    fontSize: 48,
    color: '#FFFFFF',
    position: 'absolute',
  },
});

export default Tile;
