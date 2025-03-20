import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalHeaderText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 22,
    fontWeight: "600",
  },
  card: {
    width: "80%",
    margin: "auto",
    marginTop: 20,
  },
  subCard: {
    marginTop: 5,
  },
  label: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
  },
  input: {
    fontFamily: "Montserrat-Regular",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "black",
    marginTop: 20,
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
});

export default styles;
