/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React , { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Tile from './components/Tile';
import Board from './components/Board';

//functions go here

const App: () => React$Node = () => {
  const emptyBoard = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(emptyBoard);
  
  const [player, setPlayer] = useState(true);
  const piece = player ? "X" : "O";
  const [winner, setWinner] = useState(null);
  const win = checkWinner(board);

  const pad = [null, null, null, null, null, null];
  const [padding, setPadding] = useState(pad);

  const tileSelect = (i) => {
    console.log(winner);
    const tmpBoard = board;

    if (win){
      setBoard(emptyBoard);
      setWinner(win);
    }
    else {
      if (tmpBoard[i]) {
        setWinner("Tie")
        setBoard(emptyBoard);
        return;
      }

      tmpBoard[i] = piece;
      setBoard(tmpBoard);
      setPlayer(!player);
    }
  }

  function checkWinner(board) {
    let winIndex = [
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // vertical 
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // horizontal
      [0, 4, 8], [2, 4, 6]              // diagonal
    ]

    // check indexes
    for (let i = 0; i < winIndex.length; i++) {
      const [x, y, z] = winIndex[i];

      let win = (board[x] === board[y] && board[x] === board[z]);

      if (board[x] === board[y]) {
        console.log(board[x], board[y], board[z], win);
      }
      
      if (win && board[x])
        return board[x];
    }
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.savContainer}> 
        <View style={styles.gameView}>     
          <View style={styles.container}>
            <Text style={styles.text}>Tic-Tac-Toe</Text>
          </View>
          <Text>
            <Text>{winner ? "Winner: " + winner : "Player Turn: " + piece}</Text>
            </Text> 
          <Board tiles={board} onPress={tileSelect} />
      
        </View>  
     

      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  savContainer: {
    flexGrow: 1,
    backgroundColor: '#FDFEFE',
  },
  gameView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    flexGrow: 12,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    paddingTop: '25%',
    position: 'relative',
    width: '50%'
  },
  text: {
    color: "#1B99C0",
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default App;