import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "90%",
    margin: "auto",
    marginBlock: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "600",
    fontSize: 20,
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 5,
    paddingInline: 10,
    borderRadius: 10,
  },
  logoutButtonText: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "600",
    fontSize: 18,
    color: "white",
  },
  taskCard: {
    width: "90%",
    margin: "auto",
    borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 5,
    padding: 5,
  },
  noTask: {
    margin: 10,
  },
  noTaskText: {
    fontFamily: "Montserrat-Regular",
    fontWeight: "600",
    fontSize: 20,
  },
  createButton: {
    backgroundColor: "black",
    width: "30%",
    padding: 8,
    margin: 20,
    borderRadius: 10,
  },
  createButtonText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    color: "white",
  },
});

export default styles;
