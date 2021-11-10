import React, { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [start, setStart] = useState(false);
  const [loaded] = useFonts({
    roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) return <AppLoading />;

  const content = start ? <GameScreen onEndGame={setStart} /> : <StartScreen onStartGame={setStart} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina donde esta la bola" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    fontFamily: "roboto",
  },
});
