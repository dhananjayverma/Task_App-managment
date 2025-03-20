import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { ActivityIndicator, View } from "react-native";

import Home from "../app/pages/home";
import Login from "../app/pages/login";
import Signup from "../app/pages/signup";
import {
  getTokenFromStorage,
  getUserFromStorage,
} from "../utils/getStorageData";
import { setToken, setUser } from "@/redux/user";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getTokenFromStorage();
      const user = await getUserFromStorage();

      if (token && user) {
        dispatch(setToken(token));
        dispatch(setUser(user));
        setInitialRoute("home");
      } else {
        setInitialRoute("login");
      }
    };

    checkToken();
  }, []);

  return initialRoute ? (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#6200EE" />
    </View>
  );
};

export default AppNavigator;
