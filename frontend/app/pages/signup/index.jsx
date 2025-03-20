import { View, Text, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Toast } from "toastify-react-native";

import styles from "./styles";

const intialState = {
  email: "",
  name: "",
  password: "",
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const [formData, setFormData] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/api/auth/signup`,
        formData
      );
      Toast.success(response.data.message);
      navigation.navigate("login");
      setFormData(intialState);
    } catch (error) {
      console.error(
        "error occurred on signup",
        error?.response?.data?.message || error
      );
      Toast.error(error?.response?.data?.message || "error occurred on signup");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      loading
    )
      setDisabled(true);
    else setDisabled(false);
  }, [formData, loading]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Signup</Text>
        <View style={styles.subCard}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="enter name"
            value={formData.name}
            onChangeText={(value) =>
              setFormData((prev) => ({ ...prev, name: value }))
            }
          />
        </View>
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
          onPress={handleSignup}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Signup"}
          </Text>
        </Pressable>
        <View style={{ borderWidth: 1, marginTop: 20, borderRadius: 10 }} />

        <Text style={styles.footerText}>
          Already have a account?{" "}
          <Text
            style={{ textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
