import React from "react";
import { Text, View, Modal, Button } from "react-native";
import styles from "../constants/styles";
import colors from "../constants/colors";

const WarningModal = (props) => {
  const { visible, onClose } = props;

  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Debes iniciar el juego antes de elegir un vaso</Text>
          <Button title="Cerrar" color={colors.button} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default WarningModal;
