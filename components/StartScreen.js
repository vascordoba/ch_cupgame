import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../constants/styles";

const StartScreen = (props) => {
  const { onStartGame } = props;

  const handleStartGame = () => {
    onStartGame(true);
  };

  return (
    <View style={styles.startScreen}>
      <Text>Comenzar el juego</Text>
      <Button title="Jugar" onPress={handleStartGame}></Button>
    </View>
  );
};

export default StartScreen;
