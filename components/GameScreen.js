import React, { useState } from "react";
import { View, Text, Button, Dimensions, Animated, StyleSheet, Easing, TouchableWithoutFeedback } from "react-native";
import FinishModal from "./FinishModal";
import WarningModal from "./WarningModal";
import styles from "../constants/styles";
import cup from "../assets/cup.png";

let { width, height } = Dimensions.get("window");
width -= 40;
height = height / 4;
const animation = {
  duration: 140,
  easing: Easing.linear,
  useNativeDriver: false,
};
const iterations = 3;

let SQUARE_DIMENSIONS = 50;

const GameScreen = (props) => {
  const { onEndGame } = props;
  const [pan1, setPan1] = useState(new Animated.ValueXY());
  const [pan2, setPan2] = useState(new Animated.ValueXY());
  const [pan3, setPan3] = useState(new Animated.ValueXY());
  const [winner, setWinner] = useState(-1);
  const [warning, setWarning] = useState(false);
  const [finish, setFinish] = useState(false);
  const [result, setResult] = useState("");

  const handleFinishGame = () => {
    setFinish(false);
    onEndGame(false);
  };

  const handleReplay = () => {
    setFinish(false);
    setWinner(-1);
    setResult("");
  };

  const handleChoice = (choice) => {
    if (winner < 0) {
      setWarning(true);
    } else {
      if (winner == choice) {
        setResult("Ganaste!");
      } else {
        setResult("Lo siento, intententalo de nuevo.");
      }
      setFinish(true);
    }
  };

  const triggerAnimationCup1 = (cb) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: 0, y: height - SQUARE_DIMENSIONS }, //to bottom left
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: (width - SQUARE_DIMENSIONS) / 2, y: height - SQUARE_DIMENSIONS }, // to bottom center
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: (width - SQUARE_DIMENSIONS) / 2, y: 0 }, // to top center
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: width - SQUARE_DIMENSIONS, y: 0 }, // to top right
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: width - SQUARE_DIMENSIONS, y: height - SQUARE_DIMENSIONS }, // to bottom right
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: (width - SQUARE_DIMENSIONS) / 2, y: height - SQUARE_DIMENSIONS }, // to bottom center
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: (width - SQUARE_DIMENSIONS) / 2, y: 0 }, // to top center
        }),
        Animated.timing(pan1, {
          ...animation,
          toValue: { x: 0, y: 0 }, // return to start
        }),
      ]),
      { iterations: iterations }
    ).start();
  };

  const triggerAnimationCup2 = (cb) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: 0, y: height - SQUARE_DIMENSIONS }, // return to start
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: -((width - SQUARE_DIMENSIONS) / 2), y: height - SQUARE_DIMENSIONS }, //to bottom left
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: -((width - SQUARE_DIMENSIONS) / 2), y: 0 }, // to bottom center
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: 0, y: 0 }, // to top center
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: 0, y: height - SQUARE_DIMENSIONS }, // to top right
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: (width - SQUARE_DIMENSIONS) / 2, y: height - SQUARE_DIMENSIONS }, // to bottom right
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: (width - SQUARE_DIMENSIONS) / 2, y: 0 }, // to bottom center
        }),
        Animated.timing(pan2, {
          ...animation,
          toValue: { x: 0, y: 0 }, // to top center
        }),
      ]),
      { iterations: iterations }
    ).start();
  };

  const triggerAnimationCup3 = (cb) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: -((width - SQUARE_DIMENSIONS) / 2), y: 0 }, // return to start
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: -((width - SQUARE_DIMENSIONS) / 2), y: height - SQUARE_DIMENSIONS }, //to bottom left
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: -(width - SQUARE_DIMENSIONS), y: height - SQUARE_DIMENSIONS }, // to bottom center
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: -(width - SQUARE_DIMENSIONS), y: 0 }, // to top center
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: -((width - SQUARE_DIMENSIONS) / 2), y: 0 }, // to top right
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: -((width - SQUARE_DIMENSIONS) / 2), y: height - SQUARE_DIMENSIONS }, // to bottom right
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: 0, y: height - SQUARE_DIMENSIONS }, // to bottom center
        }),
        Animated.timing(pan3, {
          ...animation,
          toValue: { x: 0, y: 0 }, // to top center
        }),
      ]),
      { iterations: iterations }
    ).start();
  };

  const triggerAnimation = () => {
    triggerAnimationCup1();
    triggerAnimationCup2();
    triggerAnimationCup3();
    setWinner(Math.floor(Math.random() * 100) % 3);
  };

  const getStyles = (p, i) => {
    return [
      stylesLocal["square" + i],
      {
        transform: p.getTranslateTransform(),
      },
    ];
  };

  return (
    <View style={styles.gameScreen}>
      <Text>Juego terminado</Text>
      <Button title="Iniciar" onPress={triggerAnimation}></Button>
      <Button title="Terminar" onPress={handleFinishGame}></Button>
      <View style={styles.gameBox}>
        <TouchableWithoutFeedback onPress={() => handleChoice(0)}>
          <Animated.Image source={cup} style={getStyles(pan1, 1)} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleChoice(1)}>
          <Animated.Image source={cup} style={getStyles(pan2, 1)} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handleChoice(2)}>
          <Animated.Image source={cup} style={getStyles(pan3, 1)} />
        </TouchableWithoutFeedback>
      </View>
      <WarningModal visible={warning} onClose={() => setWarning(false)} />
      <FinishModal visible={finish} result={result} onReplay={handleReplay} onFinish={handleFinishGame} />
    </View>
  );
};

export default GameScreen;

const stylesLocal = StyleSheet.create({
  square1: {
    width: SQUARE_DIMENSIONS,
    height: SQUARE_DIMENSIONS + 29,
    padding: 10,
    backgroundColor: "transparent",
  },
});
