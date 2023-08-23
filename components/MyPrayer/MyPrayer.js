import {
  View,
  Text,
  Modal,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";

const MyPrayer = ({ item, currentPrayer, openPrayer, setOpenPrayer }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openPrayer}
      onRequestClose={() => {
        setOpenPrayer(false);
      }}
    >
      <ScrollView contentContainerStyle={styles.centeredView}>
        <View style={styles.modalView}>
          {currentPrayer && (
            <>
              <Button title="x" onPress={() => setOpenPrayer(false)} />
              <Text>Titulo:</Text>
              <Text style={styles.title}>{currentPrayer.title}</Text>
              <Text>Descripcion:</Text>
              <Text style={styles.title}>{currentPrayer.description}</Text>
              {/* <Text style={styles.title}>{currentPrayer.id}</Text> */}
              <Text>Respuesta:</Text>
              <Text style={styles.title}>{currentPrayer.answer}</Text>
            </>
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 16,
  },
  textClose: {
    color: "red",
  },
  options: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonCreate: {
    width: "45%",
    backgroundColor: "green",
  },
  buttonCancel: {
    width: "45%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    padding: 8,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    padding: 8,
    borderRadius: 8,
    borderColor: "#D1D1D1",
    borderWidth: 1,
  },
});

export default MyPrayer;
