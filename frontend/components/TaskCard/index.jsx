import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "toastify-react-native";
import CreateTask from "../CreateTask";
import { setTask } from "@/redux/task";

const TaskCard = ({ task, getTasks }) => {
  const { token } = useSelector((state) => state.user);
  const { tasks } = useSelector((state) => state.task);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleIsCompleted = async () => {
    try {
      const newData = tasks.map((item) => {
        if (item._id === task._id) {
          return { ...item, isCompleted: !task.isCompleted };
        } else return item;
      });
      dispatch(setTask(newData));
      await axios.patch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/task/${task._id}`,
        { isCompleted: !task.isCompleted },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(
        "error occurred on create task",
        error?.response?.data?.message || error
      );
      Toast.error(
        error?.response?.data?.message || "error occurred on create task"
      );
    }
  };

  const handleDelete = async () => {
    try {
      const newData = tasks.filter((item) => item._id !== task._id);
      dispatch(setTask(newData));
      const response = await axios.delete(
        `${process.env.EXPO_PUBLIC_API_URL}/api/task/${task._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Toast.success(response.data.message);
    } catch (error) {
      console.error(
        "error occurred on create task",
        error?.response?.data?.message || error
      );
      Toast.error(
        error?.response?.data?.message || "error occurred on create task"
      );
    }
  };

  return (
    <>
      <CreateTask
        getTasks={getTasks}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        task={task}
        edit={2}
      />
      <View style={styles.card}>
        <Pressable onPress={handleIsCompleted}>
          <MaterialCommunityIcons
            name={
              task.isCompleted
                ? "checkbox-marked-outline"
                : "checkbox-blank-outline"
            }
            size={30}
          />
        </Pressable>
        <View style={{ width: "70%" }}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.description}>
            {task.description.slice(0, 30)}...
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Pressable onPress={() => setModalVisible(true)}>
            <AntDesign name="edit" size={30} />
          </Pressable>
          <Pressable onPress={handleDelete}>
            <Entypo name="cross" size={30} />
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default TaskCard;
