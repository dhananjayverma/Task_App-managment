import { View, Text, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";
import { Toast } from "toastify-react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "@/redux/task";

const intialState = {
  title: "",
  description: "",
};

const CreateTask = ({
  getTasks,
  modalVisible,
  setModalVisible,
  task = {},
  edit = 1,
}) => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState(task || intialState);
  const { token } = useSelector((state) => state.user);
  const { tasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const handleCreate = async () => {
    setLoading(true);
    try {
      if (edit === 2) {
        const response = await axios.patch(
          `${process.env.EXPO_PUBLIC_API_URL}/api/task/${task._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Toast.success(response.data.message);
        setFormData(intialState);
        setModalVisible(false);
        const filterdData = tasks.filter((item) => item._id !== task._id);
        const newData = [...filterdData, response.data.task];
        dispatch(setTask(newData));
      } else {
        const response = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/api/task/`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Toast.success(response.data.message);
        setFormData(intialState);
        setModalVisible(false);
        const newData = [...tasks, response.data.task];
        dispatch(setTask(newData));
      }
    } catch (error) {
      console.error(
        "error occurred on create task",
        error?.response?.data?.message || error
      );
      Toast.error(
        error?.response?.data?.message || "error occurred on create task"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (formData.title === "" || formData.description === "" || loading)
      setDisabled(true);
    else setDisabled(false);
  }, [formData, loading]);

  return (
    <View>
      <Modal isVisible={modalVisible}>
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>
              {edit === 2 ? "Update Task" : "Create Task"}
            </Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Entypo name="cross" size={40} />
            </Pressable>
          </View>
          <View style={{ borderWidth: 1, marginTop: 20, borderRadius: 10 }} />
          <View>
            <View style={styles.card}>
              <View style={styles.subCard}>
                <Text style={styles.label}>Title:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="enter title"
                  value={formData.title}
                  onChangeText={(value) =>
                    setFormData((prev) => ({ ...prev, title: value }))
                  }
                />
              </View>
              <View style={styles.subCard}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                  multiline={true}
                  style={[
                    styles.input,
                    { height: 100, textAlignVertical: "top" },
                  ]}
                  placeholder="enter description"
                  value={formData.description}
                  onChangeText={(value) =>
                    setFormData((prev) => ({ ...prev, description: value }))
                  }
                />
              </View>
              <Pressable
                style={[styles.button, disabled && { opacity: 0.7 }]}
                onPress={handleCreate}
                disabled={disabled}
              >
                <Text style={styles.buttonText}>
                  {loading ? "Loading..." : edit === 2 ? "Update" : "Create"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CreateTask;
