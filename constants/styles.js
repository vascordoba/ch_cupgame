import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  gameBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
});

export default styles;
