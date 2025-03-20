import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";
import axios from "axios";

import styles from "./styles";
import { setToken, setUser } from "@/redux/user";
import CreateTask from "../../../components/CreateTask";
import { setTask } from "@/redux/task";
import TaskCard from "../../../components/TaskCard";

const Home = () => {
  const { user, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { tasks } = useSelector((state) => state.task);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    dispatch(setToken(null));
    dispatch(setUser(null));
    navigate("login");
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/api/task/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setTask(response.data.tasks));
    } catch (error) {
      console.error(
        "error occurred on get task",
        error?.response?.data?.message || error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome,{" "}
          {String(user?.name).charAt(0).toUpperCase() +
            String(user?.name).slice(1)}
        </Text>
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </Pressable>
      </View>
      <View style={{ borderWidth: 1, borderRadius: 10 }} />
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.createButton}
      >
        <Text style={styles.createButtonText}>Create Task</Text>
      </Pressable>
      <CreateTask
        getTasks={getTasks}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      {loading && <ActivityIndicator size={50} style={{ marginTop: "50%" }} />}
      {!loading && (
        <View style={styles.taskCard}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <View key={task._id}>
                  <TaskCard task={task} getTasks={getTasks} />
                  <View
                    style={{ borderWidth: 1, marginTop: 5, borderRadius: 10 }}
                  />
                </View>
              );
            })
          ) : (
            <View style={styles.noTask}>
              <Text style={styles.noTaskText}>
                No Task Found, Please create one!!
              </Text>
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
