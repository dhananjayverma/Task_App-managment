import { View, Text, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Toast } from "toastify-react-native";

import styles from "./styles";
import { setUser, setToken } from "@/redux/user";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const intialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/auth/login`,
        formData
      );
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      Toast.success(response.data.message);
      dispatch(setUser(response.data.user));
      dispatch(setToken(response.data.token));
      navigation.navigate("home");
    } catch (error) {
      console.error(
        "error occurred on login",
        error?.response?.data?.message || error
      );
      Toast.error(error?.response?.data?.message || "error occurred on login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log;
    if (formData.email === "" || formData.password === "" || loading)
      setDisabled(true);
    else setDisabled(false);
  }, [formData, loading]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.subCard}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            inputMode="email"
            style={styles.input}
            placeholder="enter email"
            value={formData.email}
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, email: value.toLowerCase() }))
            }
          />
        </View>
        <View style={styles.subCard}>
          <Text style={styles.label}>Password:</Text>
          <View
            style={[
              styles.input,
              {
                padding: 0,
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              },
            ]}
          >
            <TextInput
              secureTextEntry={showPassword}
              placeholder="enter password"
              style={{ padding: 10, width: "85%" }}
              value={formData.password}
              onChangeText={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  password: value.toLowerCase(),
                }))
              }
            />
            <Pressable onPress={() => setShowPassword((prev) => !prev)}>
              <Ionicons name={showPassword ? "eye" : "eye-off"} size={25} />
            </Pressable>
          </View>
        </View>
        <Pressable
          style={[styles.button, disabled && { opacity: 0.7 }]}
          onPress={handleLogin}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Login"}
          </Text>
        </Pressable>
        <View style={{ borderWidth: 1, marginTop: 20, borderRadius: 10 }} />

        <Text style={styles.footerText}>
          Don't have a account?{" "}
          <Text
            style={{ textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("signup")}
          >
            Signup
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
