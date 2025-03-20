import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTokenFromStorage = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
};

export const getUserFromStorage = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user !== null ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error fetching token:", error);
    return null;
  }
};
