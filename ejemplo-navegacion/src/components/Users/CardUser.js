import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import EditModal from "./ModalUser";
import useFetchUser from "../../hooks/useFetchUser";

const CardUser = ({ user }) => {
  const { handleEliminar, handleEditar } = useFetchUser();

  const [modalVisible, setModalVisible] = useState(false);
  const [editNombre, setEditNombre] = useState(user.nombre);
  const [editEdad, setEditEdad] = useState(user.edad.toString());
  const [editCorreo, setEditCorreo] = useState(user.correo);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const guardarCambios = () => {
    handleEditar(user.id, editNombre, parseInt(editEdad), editCorreo);
    closeModal();
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{user.nombre}</Text>
      <Text style={styles.cardText}>Edad: {user.edad}</Text>
      <Text style={styles.cardText}>Correo: {user.correo}</Text>

      <View style={styles.buttonsRow}>
        <Button title="Editar" onPress={openModal} />
        <Button title="Eliminar" onPress={() => handleEliminar(user.id)} color="red" />
      </View>

      <EditModal
        visible={modalVisible}
        onClose={closeModal}
        user={{ nombre: editNombre, edad: editEdad, correo: editCorreo }}
        onChangeNombre={setEditNombre}
        onChangeEdad={setEditEdad}
        onChangeCorreo={setEditCorreo}
        onSave={guardarCambios}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5C3D2E",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#3B2C24",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default CardUser;