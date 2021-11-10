import React from "react";
import { StyleSheet, Text, View, Modal, Button, Image } from "react-native";
import ball from "../assets/ball.png";
import lost from "../assets/lost.png";

const FinishModal = (props) => {
  const { visible, onReplay, result, onFinish } = props;

  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{result}</Text>
          {result == "Ganaste!" ? <Image source={ball} /> : <Image source={lost} />}
          <Button title="Jugar nuevamente" onPress={onReplay} />
          <Button title="Terminar" type="outline" onPress={onFinish} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  },
});

export default FinishModal;
