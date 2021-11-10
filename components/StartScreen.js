import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../constants/styles";
import colors from "../constants/colors";

const StartScreen = (props) => {
  const { onStartGame } = props;

  const handleStartGame = () => {
    onStartGame(true);
  };

  return (
    <View style={styles.startScreen}>
      <Text style={styles.modalText}>Comenzar el juego</Text>
      <Button title="Jugar" onPress={handleStartGame} color={colors.button}></Button>
    </View>
  );
};

export default StartScreen;
