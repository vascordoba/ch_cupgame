import React from "react";
import { Text, View, Modal, Button, Image } from "react-native";
import ball from "../assets/ball.png";
import lost from "../assets/lost.png";
import styles from "../constants/styles";
import colors from "../constants/colors";

const FinishModal = (props) => {
  const { visible, onReplay, result, onFinish } = props;

  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{result}</Text>
          {result == "Ganaste!" ? <Image source={ball} /> : <Image source={lost} />}
          <Button title="Jugar nuevamente" onPress={onReplay} color={colors.button} />
          <Button title="Terminar" type="outline" onPress={onFinish} color={colors.button} />
        </View>
      </View>
    </Modal>
  );
};

export default FinishModal;
