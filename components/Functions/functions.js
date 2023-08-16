import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    console.log("value", value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@my_prayers", jsonValue);
    console.log("Prayers saved");
  } catch (e) {
    // saving error
    console.log("Storing error:", e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@my_prayers");
    console.log("Prayers read");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log("Getting error:", e);
  }
};
