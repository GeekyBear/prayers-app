import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, StyleSheet, Image, Alert } from "react-native";
import List from "../List/List";
import CreateModal from "../CreateModal/CreateModal";
import CreateButton from "../CreateButton/CreateButton";
import { storeData, getData } from "../Functions/functions";
import uuid from "react-native-uuid";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyPrayer from "../MyPrayer/MyPrayer";

const Tab = createMaterialTopTabNavigator();

const InProgress = () => {
  const [prayers, setPrayers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [prayerToEdit, setPrayerToEdit] = useState({});
  const [openPrayer, setOpenPrayer] = useState(false);
  const [currentPrayer, setCurrentPrayer] = useState({});

  const handleVisibility = () => {
    setModalVisible(!modalVisible);
  };

  var date = new Date().getDate();
  if (date < 10) {
    date = "0" + date.toString();
  }

  var month = new Date().getMonth() + 1;
  if (month < 10) {
    month = "0" + month.toString();
  }

  var year = new Date().getFullYear();

  const createPrayer = (title, description, answer, id) => {
    if (!title && !id)
      return Alert.alert("Error", "El motivo de oracion necesita un titulo", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ]);

    if (id) {
      setPrayers((prevState) => [
        ...prevState.filter((pray) => pray.id !== id),
        {
          id: id,
          title,
          description,
          answer,
          isApproved: true,
          createdAt: year + "-" + month + "-" + date,
        },
      ]);
    } else if (prayers) {
      setPrayers((prevState) => [
        ...prevState,
        {
          id: uuid.v4(),
          title,
          description,
          answer,
          isApproved: true,
          createdAt: year + "-" + month + "-" + date,
        },
      ]);
    } else {
      setPrayers([
        {
          id: uuid.v4(),
          title,
          description,
          answer,
          isApproved: true,
          createdAt: year + "-" + month + "-" + date,
        },
      ]);
    }
    setPrayerToEdit({});
    setSaving(!saving);
  };

  const editPrayer = (id) => {
    console.log("editando");
    setPrayerToEdit(...prayers.filter((pray) => pray.id === id));
    setEditing(true);
    handleVisibility();
  };

  const closeEditing = () => {
    console.log("dejando de editar y vaciando player to edit");
    setEditing(false);
    setPrayerToEdit({});
  };

  const deletePrayer = (id) => {
    Alert.alert("Mensaje", "¿Esta seguro de eliminar el motivo de oracion?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          const newItems = prayers.filter((item) => item.id !== id);
          setPrayers(newItems);
          setSaving(!saving);
        },
      },
    ]);
  };

  useEffect(() => {
    if (saving === true) {
      storeData(prayers);
    }
    setSaving(!saving);
  }, [prayers]);

  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      setPrayers(response);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {prayers && (
        <List
          data={prayers}
          deletePrayer={deletePrayer}
          editPrayer={editPrayer}
          setOpenPrayer={setOpenPrayer}
          setCurrentPrayer={setCurrentPrayer}
          title={"My Prayers"}
          modalVisible={modalVisible}
        />
      )}
      <CreateButton setModalVisible={() => handleVisibility()} />
      <CreateModal
        handleVisibility={handleVisibility}
        modalVisible={modalVisible}
        createPrayer={createPrayer}
        editing={editing}
        prayerToEdit={prayerToEdit}
        closeEditing={closeEditing}
      />
      <MyPrayer
        openPrayer={openPrayer}
        setOpenPrayer={setOpenPrayer}
        currentPrayer={currentPrayer}
        item={{ title: "wewewe" }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const Archived = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Archived</Text>
    </View>
  );
};
const Answered = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Answered</Text>
    </View>
  );
};

export default function MyPrayers() {
  return (
    <View style={styles.generalContainer}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Mis oraciones</Text>
      </View>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: "#f6f5f4",
          },
        })}
      >
        <Tab.Screen name="En progreso" component={InProgress} />
        <Tab.Screen name="Contestadas" component={Answered} />
        <Tab.Screen name="Archivadas" component={Archived} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f5f4",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  header: {
    backgroundColor: "#f6f5f4",
    width: "100%",
    height: "10%",
    marginTop: 16,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  sectionTitle: {
    paddingLeft: 16,
    fontWeight: 400,
    color: "black",
    fontFamily: "Lora-Regular",
    fontSize: 30,
  },
  howMany: {
    fontSize: 15,
    fontWeight: 400,
    color: "#939191",
  },
  icon: {
    width: 50,
    height: 50,
  },
});
