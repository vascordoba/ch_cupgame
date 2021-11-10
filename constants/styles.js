import { StyleSheet, Platform } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.back,
  },
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.back,
  },
  gameBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.modal,
    borderRadius: 4,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "roboto",
  },
});

export default styles;
