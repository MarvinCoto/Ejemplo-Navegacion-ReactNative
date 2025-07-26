import React from "react";
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native";

const EditModal = ({
  visible,
  onClose,
  user,
  onChangeNombre,
  onChangeEdad,
  onChangeCorreo,
  onSave,
}) => {
  if (!user) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Editar Usuario</Text>

          <TextInput
            style={styles.input}
            value={user.nombre}
            onChangeText={onChangeNombre}
            placeholder="Nombre"
          />
          <TextInput
            style={styles.input}
            value={user.edad.toString()}
            onChangeText={onChangeEdad}
            keyboardType="numeric"
            placeholder="Edad"
          />
          <TextInput
            style={styles.input}
            value={user.correo}
            onChangeText={onChangeCorreo}
            placeholder="Correo"
          />

          <Button title="Guardar cambios" onPress={onSave} />
          <Button title="Cancelar" onPress={onClose} color="gray" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});

export default EditModal;